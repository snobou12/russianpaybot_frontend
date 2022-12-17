/** @format */

import React, { FC } from "react";
import { Fade, JackInTheBox } from "react-awesome-reveal";

import spotifyImg from "../../../../assets/services/spotify.jpg";
import psImg from "../../../../assets/services/ps.jpg";
import epicImg from "../../../../assets/services/epic.jpg";
import steamImg from "../../../../assets/services/steam.jpg";

import { Header } from "../../../../components";
import "./Enjoy.scss";
type Props = {
	sectionRef: React.RefObject<HTMLDivElement>;
	smooth: (secton: string) => void;
};
const Enjoy: FC<Props> = ({ sectionRef, smooth }) => {
	const [isActiveCard, setIsActiveCard] = React.useState<number | null>(null);

	const serviceCards = [
		{ id: 0, title: "Spotify Premium подписки", src: spotifyImg },
		{ id: 1, title: "Epic Games Валюта", src: epicImg },
		{ id: 2, title: "Steam Пополнения, Игры", src: steamImg },
		{ id: 3, title: "Playstation Игры, Подписки", src: psImg },
	];

	return (
		<section ref={sectionRef} className="enjoy">
			<div className="container">
				<Header smooth={smooth} />
				<div className="enjoy__content">
					<Fade duration={1000} direction="left">
						<div className="enjoy__content_left-side">
							<span className="enjoy__title">
								Russian Pay Bot
								<br />
								Ваш личный помощник
							</span>

							<span className="enjoy__description">
								Поможет Вам приобрести цифровые товары, недоступные на
								территории России
							</span>
							<div className="enjoy__pre_description">
								Несмотря на то, что многие коммерческие отношения с Россией ушли
								на второй план, благодаря мне, вы сможете приобрести все, что
								пожелаете.
							</div>
							<div className="enjoy__features">
								<button
									onClick={() => smooth("connect")}
									className="btn__primary"
								>
									<span>Присоединиться </span>
								</button>
							</div>
						</div>
					</Fade>
					<JackInTheBox duration={1000}>
						<div className="enjoy__content_right-side">
							<ul className="enjoy__cards">
								{serviceCards.map((card, idx) => (
									<li
										onMouseEnter={() => setIsActiveCard(card.id)}
										onMouseLeave={() => setIsActiveCard(null)}
										key={`${card.id}:${idx}`}
										style={isActiveCard === card.id ? { zIndex: 4 } : {}}
										className={"enjoy__cards_card"}
									>
										<img src={card.src} alt="card_img" />
										<span>{card.title}</span>
									</li>
								))}
							</ul>
						</div>
					</JackInTheBox>
				</div>
			</div>
		</section>
	);
};

export default Enjoy;
