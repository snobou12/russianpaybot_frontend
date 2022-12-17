/** @format */

import React, { FC } from "react";
import { FaRobot, FaAmazonPay } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { AiOutlineFieldTime } from "react-icons/ai";
import "./HIW.scss";

type Props = {
	sectionRef: React.RefObject<HTMLDivElement>;
};
const HIW: FC<Props> = ({ sectionRef }) => {
	const hiwItems = [
		{ id: 0, title: `Заходим в телеграм бота`, svg: <FaRobot /> },
		{
			id: 1,
			title: "Выбираем нужный продукт",
			svg: <MdProductionQuantityLimits />,
		},
		{ id: 2, title: "Оплачиваем", svg: <FaAmazonPay /> },
		{ id: 3, title: "Ждем выполнение заказа", svg: <AiOutlineFieldTime /> },
	];
	return (
		<section ref={sectionRef} className="hiw">
			<div style={{ left: "10%", top: 0 }} className="blur__circle" />
			<div style={{ right: "10%", bottom: 0 }} className="blur__circle" />
			<Fade duration={1000} direction="down">
				<div className="container">
					<span className="hiw__title">Как это работает</span>
					<div className="hiw__content">
						<ul className="hiw__items">
							{hiwItems.map((hiw, idx) => (
								<React.Fragment key={`${hiw}:${idx}`}>
									<li className="hiw__item">
										<div className="hiw__item_circle">{hiw.svg}</div>
										<span>{hiw.title}</span>
									</li>
									{idx !== hiwItems.length - 1 && (
										<li className="hiw__items_line"></li>
									)}
								</React.Fragment>
							))}
						</ul>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default HIW;
