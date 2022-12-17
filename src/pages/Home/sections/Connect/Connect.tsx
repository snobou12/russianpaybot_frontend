/** @format */

import React, { FC } from "react";
import { Fade } from "react-awesome-reveal";

import connectSrc from "../../../../assets/connect.jpg";
import "./Connect.scss";
type Props = {
	sectionRef: React.RefObject<HTMLDivElement>;
};

const Connect: FC<Props> = ({ sectionRef }) => {
	return (
		<section ref={sectionRef} className="connect">
			<Fade duration={1000} direction="down">
				<div style={{ left: 0, top: 0 }} className="blur__circle" />
				<div style={{ right: 0, top: "50%" }} className="blur__circle" />
				<div style={{ left: "10%", bottom: 0 }} className="blur__circle" />
				<div className="container">
					<span className="connect__title">Перейти к телеграм боту</span>

					<img src={connectSrc} alt="connect_img" />
					<button className="btn__primary">
						<span>Перейти по ссылке</span>
					</button>
				</div>
			</Fade>
		</section>
	);
};

export default Connect;
