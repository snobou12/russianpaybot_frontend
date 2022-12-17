/** @format */

import classNames from "classnames";
import React, { FC } from "react";
import { Spinner } from "../../../../components";
import { SiHashnode } from "react-icons/si";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import {
	createPromo,
	deletePromo,
	getPromos,
} from "../../../../redux/reducers/apReducer/ActionApCreator";
import { toast } from "react-toastify";
import { APHeader, Header, Navigation } from "../../components";
import generateCode from "../../../../helps/generateCode";
import "./Promocodes.scss";

const Promocodes: FC = () => {
	const dispatch = useAppDispatch();
	const { isLoadingPromocodes, promocodes } = useAppSelector(
		state => state.apReducer
	);
	const [title, setTitle] = React.useState<string>("");
	const [discount, setDiscount] = React.useState<number>(1);
	const [isOneTime, setIsOneTime] = React.useState<boolean>(false);
	const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

	const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { value, min, max } = e.target;
		value = String(Math.max(Number(min), Math.min(Number(max), Number(value))));
		setDiscount(Number(value));
	};
	const handleReloadPromocodes = () => {
		dispatch(getPromos());
	};

	const handleSubmitCreatePromocode = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(createPromo([title, discount, isOneTime, isDisabled])).then(
			res => {
				if (typeof res.payload === "string") {
					toast.error(res.payload);
				} else {
					setTitle("");
					setDiscount(1);
					setIsOneTime(false);
					setIsDisabled(false);
					toast.success("Промокод создан");
				}
			}
		);
	};
	const handleDeletePromo = (_id: string) => {
		dispatch(deletePromo(_id));
	};
	const handleGeneratePromoTitle = () => {
		let randomCode = generateCode(15);
		setTitle(randomCode);
	};
	React.useEffect(() => {
		dispatch(getPromos());
	}, []);
	return (
		<div className="ap__promocodes ap__page">
			<Header />
			<Navigation />
			<div className="ap__page_content">
				<div className="ap__page_inner">
					<APHeader
						title="Промокоды"
						handleClickReload={handleReloadPromocodes}
					/>
					<form onSubmit={handleSubmitCreatePromocode}>
						<label>Создать новый промокод</label>
						<div className="ap__promocodes_row">
							<input
								type="text"
								className="inpt"
								placeholder="Название промокода"
								value={title}
								onChange={e => setTitle(e.target.value)}
								required={true}
							/>
							<div
								onClick={handleGeneratePromoTitle}
								className="ap__promocodes_generate"
							>
								<SiHashnode className="promo__generate_icon" />
								<label>Сгенерировать</label>
							</div>
						</div>

						<input
							type="number"
							max={1000}
							className="inpt"
							value={discount}
							onChange={e => handleChangeDiscount(e)}
							placeholder="%"
						/>
						<div className="ap__promocodes_row">
							<label>Одноразовый</label>
							<input
								type="checkbox"
								checked={isOneTime}
								onChange={() => setIsOneTime(!isOneTime)}
								className="inpt ap__promo_input-checkbox"
							/>
						</div>
						<div className="ap__promocodes_row">
							<label>Выключить</label>
							<input
								checked={isDisabled}
								onChange={() => setIsDisabled(!isDisabled)}
								type="checkbox"
								className="inpt ap__promo_input-checkbox"
							/>
						</div>
						<button className="btn btn--inverted">Создать</button>
					</form>
					{isLoadingPromocodes ? (
						<Spinner loading={isLoadingPromocodes} />
					) : (
						<table>
							<tbody>
								<tr>
									<th style={{ width: "3%" }}>№</th>
									<th style={{ width: "10%" }}>Mongo ID</th>
									<th style={{ width: "7%" }}>Название</th>
									<th style={{ width: "5%" }}>Скидка в %</th>
									<th style={{ width: "5%" }}>Одноразовый</th>
									<th style={{ width: "5%" }}>Выключен</th>
									<th style={{ width: "2%" }}>Удалить</th>
								</tr>
								{promocodes.length > 0 &&
									promocodes.map((promo, idx) => (
										<tr key={`${promo._id}:${idx}`}>
											<td>
												<span>{idx + 1}</span>
											</td>
											<td>
												<span>{promo._id}</span>
											</td>
											<td>
												<span>{promo.title}</span>
											</td>
											<td>
												<span>{promo.discount}</span>
											</td>
											<td
												className={classNames(
													"ap__promocodes_promo-is_one_time",
													{
														"ap__promocodes_promo-is_one_time--true":
															promo.isOneTime,
													}
												)}
											></td>
											<td
												className={classNames(
													"ap__promocodes_promo-is_disabled",
													{
														"ap__promocodes_promo-is_disabled--true":
															promo.isDisabled,
													}
												)}
											></td>

											<td
												onClick={() => {
													handleDeletePromo(promo._id);
												}}
												className="ap__promocodes_promo_delete"
											>
												<span>X</span>
											</td>
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

export default Promocodes;
