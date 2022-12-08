/** @format */

import React, { FC } from "react";
import { Spinner } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import { getUsers } from "../../../../redux/reducers/apReducer/ActionApCreator";
import { APHeader, Header, Navigation } from "../../components";
import "./Users.scss";
import { useNavigate } from "react-router-dom";
const Users: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { users, isLoadingUsers } = useAppSelector(state => state.apReducer);
	const handleReloadUsers = () => {
		dispatch(getUsers());
	};
	const handleNavigateToDialog = (path: string) => {
		navigate(path);
	};
	React.useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<div className="ap__users ap__page">
			<Header />
			<Navigation />
			<div className="ap__page_content">
				<div className="ap__page_inner">
					<APHeader
						title="Все пользователи"
						handleClickReload={handleReloadUsers}
					/>
					{isLoadingUsers ? (
						<Spinner loading={isLoadingUsers} />
					) : (
						<table>
							<tbody>
								<tr>
									<th style={{ width: "3%" }}>№</th>
									<th style={{ width: "10%" }}>Mongo ID</th>
									<th style={{ width: "7%" }}>Telegram ID</th>
									<th style={{ width: "10%" }}>@name</th>
									<th style={{ width: "10%" }}>Имя</th>
									<th style={{ width: "10%" }}>Фамилия</th>
									<th style={{ width: "10%" }}>Промо</th>
									<th style={{ width: "4%" }}>Перейти к диалогу</th>
								</tr>
								{users.length > 0 &&
									users.map((user, idx) => (
										<tr key={`${user._id}:${idx}`}>
											<td>
												<span>{idx + 1}</span>
											</td>
											<td>
												<span>{user._id}</span>
											</td>
											<td>
												<span>{user.login}</span>
											</td>
											<td>
												<span>
													{user.username === "anon" ? "-" : `@${user.username}`}
												</span>
											</td>
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
											></td>
										</tr>
									))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
};

export default Users;
