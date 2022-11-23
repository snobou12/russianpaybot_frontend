/** @format */

import React, { FC } from "react";
import { Spinner } from "../../../../components";
import { PricePlanType } from "../../../../models/IPrice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import {
	changePrice,
	getPrices,
} from "../../../../redux/reducers/apReducer/ActionApCreator";
import { APHeader, Header, Navigation } from "../../components";
import ModalChange from "./ModalChange/ModalChange";
import "./Prices.scss";

export type modalPlanType = {
	plan: PricePlanType;
	title: string;
};

const Prices: FC = () => {
	const dispatch = useAppDispatch();
	const { prices, isLoadingPrices } = useAppSelector(state => state.apReducer);
	const [showModal, setShowModal] = React.useState<boolean>(false);
	const [modalPlan, setModalPlan] = React.useState<modalPlanType>();
	const handleChangeShowModal = (bool: boolean) => {
		setShowModal(bool);
	};
	const handleClickChangePlan = (plan: PricePlanType, title: string) => {
		setModalPlan({ plan, title });
		setShowModal(true);
	};
	const handleReloadPrices = () => {
		dispatch(getPrices());
	};

	const handleChangePrice = (newPlan: PricePlanType, title: string) => {
		dispatch(changePrice([newPlan, title]));
	};

	React.useEffect(() => {
		dispatch(getPrices());
	}, []);
	return (
		<>
			<div className="ap__prices ap__page">
				<Header />
				<Navigation />
				<div className="ap__page_content">
					<div className="ap__page_inner">
						<APHeader
							title="Цены в боте"
							handleClickReload={handleReloadPrices}
						/>
						<div className="ap__prices_content">
							{isLoadingPrices ? (
								<Spinner loading={isLoadingPrices} />
							) : (
								prices.map((priceService, idx) => (
									<div
										key={`${priceService._id}:${idx}`}
										className="ap__prices_block"
									>
										<h2 className="ap__prices_title">{priceService.title}</h2>
										<table>
											<tbody>
												<tr>
													<th style={{ width: "3%" }}>№</th>
													<th style={{ width: "15%" }}>Полное название</th>
													<th style={{ width: "8%" }}>Сокращенное название</th>
													<th style={{ width: "5%" }}>Цена</th>
													<th style={{ width: "5%" }}>Цена в месяц</th>
													<th style={{ width: "10%" }}>Query для бота</th>
													<th style={{ width: "5%" }}>Изменить</th>
												</tr>
												{priceService.plan.map((plan, planIdx) => (
													<tr key={`${plan._id}:${planIdx}`}>
														<td>
															<span>{planIdx + 1}</span>
														</td>
														<td>
															<span>{plan.fullname}</span>
														</td>
														<td>
															<span>{plan.name}</span>
														</td>
														<td>
															<span>{plan.price}</span>
														</td>
														<td>
															<span>
																{plan.pricePerMonth !== null
																	? plan.pricePerMonth
																	: "-"}
															</span>
														</td>
														<td>
															<span>{plan.query}</span>
														</td>
														<td
															onClick={() =>
																handleClickChangePlan(plan, priceService.title)
															}
															className="ap__prices_change-td"
														></td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</div>
			<ModalChange
				showModal={showModal}
				handleChangeShowModal={handleChangeShowModal}
				modalPlan={modalPlan}
				handleChangePrice={handleChangePrice}
			/>
		</>
	);
};

export default Prices;
