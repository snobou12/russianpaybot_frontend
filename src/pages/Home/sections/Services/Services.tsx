/** @format */

import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

import spotifySrc from "../../../../assets/services/spotify.jpg";
import psSrc from "../../../../assets/services/ps.jpg";
import steamSrc from "../../../../assets/services/steam.jpg";
import epicSrc from "../../../../assets/services/epic.jpg";
import appleSrc from "../../../../assets/services/apple.jpg";
import discordSrc from "../../../../assets/services/discord.jpg";
import faceitSrc from "../../../../assets/services/faceit.jpg";

import "./Services.scss";
type Props = {
	sectionRef: React.RefObject<HTMLDivElement>;
	setSelectedNav: (id: number) => void;
	smooth: (section: string) => void;
};
const Services: FC<Props> = ({ sectionRef, smooth, setSelectedNav }) => {
	const services = [
		{
			id: 0,
			title: "Spotify",
			imgSrc: spotifySrc,
			features: [
				{
					id: 0,
					title: "Индивидуальная Premium подписка на 1 месяц",
				},
				{ id: 1, title: "Индивидуальные Premium подписка на 3 месяца" },
				{
					id: 2,
					title: "Индивидуальные Premium подписка на 6 месяцев",
				},
				{
					id: 3,
					title: "Индивидуальные Premium подписка на 12 месяцев",
				},
			],
		},
		{
			id: 1,
			title: "Playstation",
			imgSrc: psSrc,
			features: [
				{
					id: 0,
					title: "Покупка игр",
				},
				{
					id: 1,
					title: "Essential подписка на 1, 3, 12 месяцев",
				},
				{ id: 2, title: "Extra подписка на 1, 3, 12 месяцев" },
				{
					id: 3,
					title: "Deluxe подписка на 1, 3, 12 месяцев",
				},
				{
					id: 4,
					title: "EA Play подписка на 1, 12 месяцев",
				},
			],
		},
		{
			id: 2,
			title: "Steam",
			imgSrc: steamSrc,
			features: [
				{
					id: 0,
					title: "Пополнение русских и турецких аккаунтов",
				},
				{ id: 1, title: "Покупка игр на турецкие аккаунты" },
			],
		},
		{
			id: 3,
			title: "Apple ID",
			imgSrc: appleSrc,
			features: [
				{
					id: 0,
					title: "Пополнение Apple ID на турецкий аккаунт",
				},
			],
		},

		{
			id: 4,
			title: "Epic Games",
			imgSrc: epicSrc,
			features: [
				{
					id: 0,
					title: "Fall Guys шмяксы, сеты сезонов и др.",
				},
				{ id: 1, title: "Fortnite B-баксы, сезонные штуки и др." },
			],
		},
		{
			id: 5,
			title: "Discord Nitro",
			imgSrc: discordSrc,
			features: [
				{
					id: 0,
					title: "Discord Nitro на 1 месяц",
				},
				{ id: 1, title: "Discord Nitro на 12 месяцев" },
			],
		},
		{
			id: 6,
			title: "CS-GO Faceit",
			imgSrc: faceitSrc,
			features: [
				{
					id: 0,
					title: "Faceit Premium на 1 месяц",
				},
			],
		},
	];

	const handleClickMore = (serviceId: number) => {
		setSelectedNav(serviceId);
		smooth("details");
	};
	return (
		<section ref={sectionRef} className="services">
			<div style={{ left: "10%", top: "20%" }} className="blur__circle" />
			<div style={{ right: "0", bottom: "30%" }} className="blur__circle" />
			<Fade duration={1500} direction="down">
				<div className="container">
					<span className="services__title">Весь каталог товаров</span>
					<div className="services__content">
						<Swiper slidesPerView={2.5} spaceBetween={20}>
							<nav>
								<ul>
									{services.map((service, idx) => (
										<SwiperSlide key={`${service.id}:${idx}`}>
											<li className="service__item">
												<img
													src={service.imgSrc}
													alt={`${service.title}_img`}
												/>
												<span className="service__item_title">
													{service.title}
												</span>
												<ul className="service__item_features">
													{service.features.map((fea, idx) => (
														<li
															key={`${service.id}:${fea.id}:${idx}`}
															className="service__item_feature"
														>
															<span>{fea.title}</span>
														</li>
													))}
												</ul>
												<button
													onClick={() => handleClickMore(service.id)}
													className="btn__primary"
												>
													<span>Подробнее о покупке</span>
												</button>
											</li>
										</SwiperSlide>
									))}
								</ul>
							</nav>
						</Swiper>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default Services;
