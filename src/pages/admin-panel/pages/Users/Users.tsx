/** @format */

import React, { FC } from "react";
import { Spinner } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import {
	getUsers,
	searchUsers,
} from "../../../../redux/reducers/apReducer/ActionApCreator";
import { AiOutlineEye } from "react-icons/ai";
import {
	APHeader,
	APModalLongData,
	APPaginator,
	Header,
	Navigation,
} from "../../components";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

import Searcher from "./Searcher/Searcher";
import "./Users.scss";
const Users: FC = () => {
	const [page, setPage] = React.useState<number>(1);
	const [varId, setVarId] = React.useState<string>("");
	const [modalTitle, setModalTitle] = React.useState<string>("");
	const [showModal, setShowModal] = React.useState<boolean>(false);

	const [searchValue, setSearchValue] = React.useState<string>(""); //local
	const [_, setSearchQuery] = React.useState<string>("");

	const handleChangeShowModal = (bool: boolean) => {
		setShowModal(bool);
	};

	const handleClickShowID = (mongoID: string, telegramId: string) => {
		if (mongoID) {
			setVarId(mongoID);
			setModalTitle("Mongo ID");
		}
		if (telegramId) {
			setVarId(telegramId);
			setModalTitle("Telegram ID");
		}
		setShowModal(true);
	};

	const nextPage = () => {
		if (page < users.maxPage) {
			setPage(page + 1);
		}
	};
	const previousPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};
	const handleChangePage = (selectedPage: number) => {
		setPage(selectedPage);
	};

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { users, isLoadingUsers, foundUsers, isLoadingFoundUsers } =
		useAppSelector(state => state.apReducer);
	const handleReloadUsers = () => {
		setSearchQuery("");
		setSearchValue("");
		dispatch(getUsers(page));
	};
	const handleNavigateToDialog = (path: string) => {
		navigate(path);
	};

	const updateSearchInput = React.useCallback(
		debounce((value: string) => {
			dispatch(searchUsers(value));
		}, 800),
		[]
	);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		updateSearchInput(e.target.value);
	};

	React.useEffect(() => {
		if (searchValue.length === 0) {
			dispatch(getUsers(page));
		}
	}, [page, searchValue]);

	const getMapUsers = () => {
		return searchValue.length === 0 ? users.users : foundUsers;
	};
	return (
		<>
			<div className="ap__users ap__page">
				<Header />
				<Navigation />
				<div className="ap__page_content">
					<div className="ap__page_inner">
						<APHeader
							title="Все пользователи"
							handleClickReload={handleReloadUsers}
						/>
						{searchValue.length === 0 && (
							<APPaginator
								previousPage={previousPage}
								nextPage={nextPage}
								page={page}
								handleChangePage={handleChangePage}
								maxPage={users.maxPage}
							/>
						)}

						<Searcher value={searchValue} onChangeValue={onChangeInput} />
						{searchValue.length === 0 && isLoadingUsers ? (
							<Spinner loading={isLoadingUsers} />
						) : isLoadingFoundUsers ? (
							<Spinner loading={isLoadingFoundUsers} />
						) : (
							<table>
								<tbody>
									<tr>
										<th style={{ width: "3%" }}>№</th>
										<th style={{ width: "4%" }}>Mongo ID</th>
										<th style={{ width: "4%" }}>TG ID</th>
										<th style={{ width: "10%" }}>@name</th>
										<th style={{ width: "10%" }}>Картинка</th>
										<th style={{ width: "10%" }}>Имя</th>
										<th style={{ width: "10%" }}>Фамилия</th>
										<th style={{ width: "10%" }}>Промо</th>
										<th style={{ width: "4%" }}>К диалогу</th>
									</tr>
									{getMapUsers().length > 0 &&
										getMapUsers().map((user, idx) => (
											<tr key={`${user._id}:${idx}`}>
												<td>
													<span>
														{page > 1 ? idx + 1 + page * 10 - 10 : idx + 1}
													</span>
												</td>
												<td
													className="ap__long_data-show "
													onClick={() => handleClickShowID(user._id, "")}
												>
													<span>
														<AiOutlineEye size={25} />
													</span>
												</td>
												<td
													className="ap__long_data-show "
													onClick={() => handleClickShowID("", user.login)}
												>
													<span>
														<AiOutlineEye size={25} />
													</span>
												</td>
												<td>
													<span>
														{user.username === "anon"
															? "-"
															: `@${user.username}`}
													</span>
												</td>
												<td>{user.photoPath ? user.photoPath : "-"}</td>
												<td>
													<span>{user.firstname}</span>
												</td>
												<td>
													<span>{user.lastname ? user.lastname : "-"}</span>
												</td>
												<td>
													<span>{user.usedPromo ? user.usedPromo : "-"}</span>
												</td>
												<td
													onClick={() =>
														handleNavigateToDialog(
															`/admin-panel/dialogs/${user.login}`
														)
													}
													className="ap__users_to-dialog"
												>
													<span>
														<AiOutlineEye size={25} />
													</span>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
			<APModalLongData
				showModal={showModal}
				handleChangeShowModal={handleChangeShowModal}
				varId={varId}
				modalTitle={modalTitle}
			/>
		</>
	);
};

export default Users;
