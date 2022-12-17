/** @format */

import React, { FC } from "react";
import flag from "../../assets/russian_flag.png";
import { navigationItems } from "../../static/navigation";
import "./Header.scss";
type Props = {
	smooth: (section: string) => void;
};

const Header: FC<Props> = ({ smooth }) => {
	return (
		<header className="header">
			<div onClick={() => smooth("enjoy")} className="header__logo">
				<img src={flag} alt="flag" />
				<span>Russian Pay Bot</span>
			</div>
			<ul className="header__navigation">
				{navigationItems.map((navItem, idx) => (
					<li
						onClick={() => smooth(navItem.section)}
						key={`${navItem.id}:${idx}`}
						className="header__navigation_item"
					>
						<span>{navItem.title}</span>
					</li>
				))}
			</ul>
			<div className="header__enjoy">
				<button onClick={() => smooth("connect")} className="btn__primary">
					<span>Присоединиться</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
