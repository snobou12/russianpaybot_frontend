/** @format */

import classNames from "classnames";
import React, { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useOnClickOutside } from "../../../../../hooks/useOnClickOutside";
import { PricePlanType } from "../../../../../models/IPrice";
import { modalPlanType } from "../Prices";
import "./ModalChange.scss";

type Props = {
	showModal: boolean;
	handleChangeShowModal: (bool: boolean) => void;
	handleChangePrice: (plan: PricePlanType, query: string) => void;
	modalPlan: PricePlanType | any;
};
const ModalChange: FC<Props> = ({
	showModal,
	handleChangeShowModal,
	modalPlan,
	handleChangePrice,
}) => {
	//hide scroll
	React.useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showModal]);

	const [modalInfo, setModalInfo] = React.useState<modalPlanType>(modalPlan);
	const modalRef = React.useRef(null);
	React.useEffect(() => {
		setModalInfo(modalPlan);
	}, [modalPlan, showModal]);
	const handleChangeModalInfo = (
		e: React.ChangeEvent<HTMLInputElement>,
		query: string
	) => {
		let prevModalInfo = { ...modalInfo };
		let newModalPlan = { ...prevModalInfo.plan };
		switch (query) {
			case "fullname":
				newModalPlan = { ...newModalPlan, fullname: e.target.value };
				break;
			case "name":
				newModalPlan = { ...newModalPlan, name: e.target.value };
				break;

			case "price":
				newModalPlan = { ...newModalPlan, price: Number(e.target.value) };
				break;
			case "pricePerMonth":
				newModalPlan = {
					...newModalPlan,
					pricePerMonth: Number(e.target.value),
				};

				break;
			default:
				newModalPlan = { ...newModalPlan };
				break;
		}
		let newModalInfo = { ...prevModalInfo, plan: newModalPlan };
		setModalInfo(newModalInfo);
	};

	const handleSubmit = () => {
		handleChangePrice(modalInfo.plan, modalInfo.title);
		handleChangeShowModal(false);
	};
	//outside click
	useOnClickOutside(modalRef, () => handleChangeShowModal(false));
	return (
		<>
			{showModal && (
				<div
					className={classNames("modal__change_prices", {
						"modal__change_prices--show": showModal,
					})}
				>
					<div ref={modalRef} className="modal__change_prices-block">
						<h1>{modalInfo?.title}</h1>
						<h2>Полное название</h2>
						<input
							onChange={e => handleChangeModalInfo(e, "fullname")}
							className="inpt"
							value={modalInfo?.plan.fullname}
							placeholder={modalInfo?.plan.fullname}
						/>
						<h2>Сокращенное название</h2>

						<input
							onChange={e => handleChangeModalInfo(e, "name")}
							className="inpt"
							value={modalInfo?.plan.name}
							placeholder={modalInfo?.plan.name}
						/>
						<h2>Цена</h2>

						<input
							onChange={e => handleChangeModalInfo(e, "price")}
							className="inpt"
							value={String(modalInfo?.plan.price)}
							placeholder={String(modalInfo?.plan.price)}
						/>
						<h2>Цена в месяц</h2>

						<input
							onChange={e => handleChangeModalInfo(e, "pricePerMonth")}
							className="inpt"
							value={String(modalInfo?.plan.pricePerMonth)}
							placeholder={String(modalInfo?.plan.pricePerMonth)}
						/>
						<button className="btn btn--inverted" onClick={handleSubmit}>
							Изменить
						</button>
						<AiOutlineClose
							className="modal__change_prices-close"
							onClick={() => handleChangeShowModal(false)}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalChange;
