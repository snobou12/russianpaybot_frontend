/** @format */

import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FaUsersCog } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { SiDialogflow } from "react-icons/si";
import { TbArrowAutofitContent } from "react-icons/tb";
import { RiCoupon3Fill, RiListOrdered } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import { changeActiveNav } from "../../../../redux/reducers/apReducer/apReducer";
import apLogo from "../../assets/logo.png";
import "./Navigation.scss";
const Navigation: FC = () => {
	const dispatch = useAppDispatch();
	const { activeNav } = useAppSelector(state => state.apReducer);
	const navigationItems = [
		{
			id: 0,
			title: "Главная",
			path: "/admin-panel",
			icon: AiFillHome,
		},
		{
			id: 1,
			title: "Пользователи",
			path: "/admin-panel/users",
			icon: FaUsersCog,
		},
		{
			id: 2,
			title: "Диалоги",
			path: "/admin-panel/dialogs",
			icon: SiDialogflow,
		},
		{
			id: 3,
			title: "Цены в боте",
			path: "/admin-panel/prices",
			icon: IoIosPricetags,
		},
		{
			id: 4,
			title: "Промокоды",
			path: "/admin-panel/promocodes",
			icon: RiCoupon3Fill,
		},

		{
			id: 5,
			title: "Заказы",
			path: "/admin-panel/orders",
			icon: RiListOrdered,
		},

		{
			id: 6,
			title: "Рассылка",
			path: "/admin-panel/posting",
			icon: IoMailUnreadSharp,
		},

		{
			id: 7,
			title: "Контент на сайте",
			path: "/admin-panel/web-content",
			icon: TbArrowAutofitContent,
		},
	];
	const handleChangeActiveNav = (id: number) => {
		dispatch(changeActiveNav(id));
	};

	return (
		<div className="ap__navigation">
			<Link
				onClick={() => handleChangeActiveNav(0)}
				to="/admin-panel"
				className="ap__navigation_logo"
			>
				<img src={apLogo} alt="ap_logo" />
				<span>
					Russian Pay Bot <br /> Dashboard
				</span>
			</Link>
			<nav className="ap__navigation_nav">
				<ul className="ap__navigation_navigation">
					{navigationItems.map((navItem, idx) => (
						<li key={`${navItem.id}:${idx}`} className="ap__navigation_item">
							<Link
								onClick={() => handleChangeActiveNav(navItem.id)}
								to={navItem.path}
								className={classNames("ap__navigation_link", {
									"ap__navigation_link--active": navItem.id === activeNav,
								})}
							>
								<navItem.icon />
								<span>{navItem.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
