/** @format */

import React, { FC } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../../../../components";
import { getFormatTime } from "../../../../helps/getTime";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import { getOrders } from "../../../../redux/reducers/apReducer/ActionApCreator";
import {
	APHeader,
	APModalLongData,
	APPaginator,
	Header,
	Navigation,
} from "../../components";
import "./Orders.scss";
const Orders: FC = () => {
	const dispatch = useAppDispatch();
	const [modalTitle, setModalTitle] = React.useState<string>("");
	const [showModal, setShowModal] = React.useState<boolean>(false);
	const [varId, setVarId] = React.useState<string>("");
	const navigate = useNavigate();
	const handleChangeShowModal = (bool: boolean) => {
		setShowModal(bool);
	};

	const handleClickShowID = (
		mongoID: string,
		telegramId: string,
		billId: string
	) => {
		if (mongoID) {
			setVarId(mongoID);
			setModalTitle("Mongo ID");
		}
		if (telegramId) {
			setVarId(telegramId);
			setModalTitle("Telegram ID");
		}
		if (billId) {
			setVarId(billId);
			setModalTitle("Bill ID");
		}
		setShowModal(true);
	};

	const { isLoadingOrders, orders } = useAppSelector(state => state.apReducer);
	const [page, setPage] = React.useState<number>(1);

	const nextPage = () => {
		if (page < orders.maxPage) {
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

	const handleReloadOrders = () => {
		dispatch(getOrders(page));
	};

	const handleNavigateToDialog = (path: string) => {
		navigate(path);
	};

	React.useEffect(() => {
		dispatch(getOrders(page));
	}, [page]);

	return (
		<>
			<div className="ap__orders ap__page">
				<Header />
				<Navigation />
				<div className="ap__page_content">
					<div className="ap__page_inner">
						<APHeader title="Заказы" handleClickReload={handleReloadOrders} />
						<APPaginator
							previousPage={previousPage}
							nextPage={nextPage}
							page={page}
							handleChangePage={handleChangePage}
							maxPage={orders.maxPage}
						/>

						{isLoadingOrders ? (
							<Spinner loading={isLoadingOrders} />
						) : (
							<table>
								<tbody>
									<tr>
										<th style={{ width: "4%" }}>Mongo ID</th>
										<th style={{ width: "4%" }}>TG ID</th>
										<th style={{ width: "10%" }}>@name</th>
										<th style={{ width: "10%" }}>Имя</th>
										<th style={{ width: "10%" }}>Фамилия</th>
										<th style={{ width: "4%" }}>Bill ID</th>
										<th style={{ width: "10%" }}>Promo</th>
										<th style={{ width: "20%" }}>Услуга</th>
										<th style={{ width: "5%" }}>Стоимость</th>
										<th style={{ width: "10%" }}>Куплено</th>
										<th style={{ width: "4%" }}>К диалогу</th>
									</tr>
									{orders.orders.length > 0 &&
										orders.orders.map((order, idx) => (
											<tr key={`${order._id}:${idx}`}>
												<td
													className="ap__long_data-show "
													onClick={() => handleClickShowID(order._id, "", "")}
												>
													<span>
														<AiOutlineEye size={25} />
													</span>
												</td>
												<td
													className="ap__long_data-show "
													onClick={() => handleClickShowID("", order.login, "")}
												>
													<span>
														<AiOutlineEye size={25} />
													</span>
												</td>
												<td>
													<span>
														{order.username === "anon" ? "-" : order.username}
													</span>
												</td>
												<td>
													<span>{order.firstname}</span>
												</td>
												<td>
													<span>{order.lastname}</span>
												</td>
												<td
													className="ap__long_data-show"
													onClick={() =>
														handleClickShowID("", "", order.billId)
													}
												>
													<span>
														<AiOutlineEye size={25} />
													</span>
												</td>
												<td>
													<span>{order.promocode ? order.promocode : "-"}</span>
												</td>
												<td>
													<span>{order.productData.product}</span>
												</td>
												<td>
													<span>{order.productData.amount}р.</span>
												</td>
												<td>
													<span>{getFormatTime(0, order.createdAt, true)}</span>
												</td>
												<td
													onClick={() =>
														handleNavigateToDialog(
															`/admin-panel/dialogs/${order.login}`
														)
													}
													className="ap__orders_to-dialog"
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

export default Orders;
