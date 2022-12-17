/** @format */

import classNames from "classnames";
import React, { FC } from "react";
import { Fade, Zoom, Hinge } from "react-awesome-reveal";
import spotifySrc from "../../../../assets/services/spotify.jpg";
import psSrc from "../../../../assets/services/ps.jpg";
import steamSrc from "../../../../assets/services/steam.jpg";
import epicSrc from "../../../../assets/services/epic.jpg";
import appleSrc from "../../../../assets/services/apple.jpg";
import discordSrc from "../../../../assets/services/discord.jpg";
import faceitSrc from "../../../../assets/services/faceit.jpg";

import "./Details.scss";

type Props = {
	sectionRef: React.RefObject<HTMLDivElement>;
	selectedNav: number;
	setSelectedNav: (id: number) => void;
};

const Details: FC<Props> = ({ sectionRef, selectedNav, setSelectedNav }) => {
	const navs = [
		{ id: 0, title: "Spotify" },
		{ id: 1, title: "Playstation" },
		{ id: 2, title: "Steam" },
		{ id: 3, title: "Apple ID" },
		{ id: 4, title: "Epic Games" },
		{ id: 5, title: "Discord Nitro" },
		{ id: 6, title: "CS-GO Faceit" },
	];

	const details = [
		{
			id: 0,
			title: "Spotify",
			src: spotifySrc,
			details: [
				{
					id: 0,
					title:
						"Перед началом покупки, удостоверьтесь, что у вас загружено приложение Spotify. Если у вас его нет, обратитесь в техподдержку в телеграм боте, она отправит вам установочные файлы на Windows, Android, Mac. На iPhone отправит инструкцию по загрузке.",
				},
				{
					id: 1,
					title:
						"Также, после оплаты, вам нужно будет отправить данные от спотифай аккаунта. Если их нет, мы создадим для вас новый на вашу электронную почту. В случае, если ваш прошлый аккаунт отключен (мы это проверим), а это частый случай, мы также создадим для вас новый аккаунт спотифай на вашу электронную почту.",
				},
				{
					id: 2,
					title:
						"Spotify с нашей подпиской будет работать во всех приложениях Spotify без VPN. В веб версии, а т.е. на сайте, VPN все же требуется.",
				},
			],
		},
		{
			id: 1,
			title: "Playstation",
			src: psSrc,
			details: [
				{
					id: 0,
					title:
						"Оформление подписок и покупка игр происходит на турецкий аккаунт. Если у вас нет турецкого аккаунта, мы отправим вам новый, либо отправим инструкцию по созданию.",
				},
				{
					id: 1,
					title:
						"Выданный аккаунт вы сможете перепривязать на свою почту ради общей безопасности.",
				},

				{
					id: 2,
					title:
						"Если вы только создали турецкий аккаунт, нужно подождать 5-6 дней с того момента, как создали, чтобы приобрести игры. На подписки данное правило не распространяется.",
				},
				{
					id: 3,
					title:
						"Онлайн, игры, игры с подписок распространяются на ваш личный аккаунт. Поэтому, после покупки, вы сможете играть со своего аккаунта.",
				},
			],
		},
		{
			id: 2,
			title: "Steam",
			src: steamSrc,
			details: [
				{
					id: 0,
					title:
						"Пополнение кошелька происходит на любой аккаунт. Покупка игр происходит только на турецкий аккаунт. Если у вас его нет, мы вам отправим новый.",
				},
				{
					id: 1,
					title:
						"Выданный аккаунт вы сможете перепривязать на свою почту ради общей безопасности.",
				},
				{
					id: 2,
					title:
						"Играть в игры с турецкого аккаунта вы сможете со своего личного.",
				},
			],
		},
		{
			id: 3,
			title: "Apple пополнение",
			src: appleSrc,
			details: [
				{
					id: 0,
					title:
						"Пополнение кошелька происходит на турецкий Apple ID. Если у вас его нет, мы отправим вам инструкцию по созданию.",
				},
				{
					id: 1,
					title:
						"На турецком Apple ID вы сможете приобрести любую игру, игровую валюту и др. После успешных покупок вы можете обратно перейти на ваш Apple ID",
				},
			],
		},

		{
			id: 4,
			title: "Epic Games",
			src: epicSrc,
			details: [
				{
					id: 0,
					title:
						"Покупка игровых валют, сезонных сетов и др. происходит путем смены вашего региона Epic Games.",
				},
				{
					id: 1,
					title:
						"Регион никак не влияет на ваш аккаунт, игровой процесс и прочее.",
				},
				{
					id: 2,
					title:
						"Если вы уже меняли регион, сообщите сразу об этом техподдержке, прежде, чем приобрести какой-либо продукт.",
				},
			],
		},
		{
			id: 5,
			title: "Discord Nitro",
			src: discordSrc,
			details: [
				{
					id: 0,
					title: "От вас лишь требуется данные от аккаунта Discord",
				},
				{
					id: 1,
					title: "Мы зайдем и оформим подписку Nitro",
				},
			],
		},
		{
			id: 6,
			title: "CS-GO Faceit",
			src: faceitSrc,
			details: [
				{
					id: 0,
					title: "От вас лишь требуется данные от аккаунта CS-GO Faceit",
				},
				{
					id: 1,
					title: "Мы зайдем и оформим подписку Premium",
				},
			],
		},
	];

	return (
		<section ref={sectionRef} className="details">
			<div style={{ left: 0, top: 0 }} className="blur__circle" />
			<div style={{ right: 0, top: "50%" }} className="blur__circle" />
			<div style={{ left: "10%", bottom: 0 }} className="blur__circle" />
			<div className="container">
				<span className="details__title">Условия при покупке</span>
				<ul className="details__navigation">
					{navs.map((nav, idx) => (
						<li
							onClick={() => setSelectedNav(nav.id)}
							key={`${nav.id}:${idx}`}
							className={classNames("details__navigation_item", {
								"details__navigation_item--active": nav.id == selectedNav,
							})}
						>
							{nav.title}
						</li>
					))}
				</ul>
				{details.map((detail, idx) => {
					if (detail.id === selectedNav)
						return (
							<div key={`${detail.id}:${idx}`} className="details__content">
								<div className="details__content_image">
									<Zoom duration={700} direction="down">
										<img src={details[selectedNav].src} alt="detail_img" />
									</Zoom>
								</div>
								<ul className="details__content_details">
									<Fade cascade damping={0.3} direction="down">
										{details[selectedNav].details.map((detail, idx) => (
											<li
												className="details__content_details-item"
												key={`${selectedNav}:${detail.id}:${idx}`}
											>
												<span>{detail.title}</span>
											</li>
										))}
									</Fade>
								</ul>
							</div>
						);
				})}
			</div>
		</section>
	);
};

export default Details;
