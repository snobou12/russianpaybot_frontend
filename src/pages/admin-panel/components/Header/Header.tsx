/** @format */

import React, { FC } from "react";
import { useAppSelector } from "../../../../redux/hooks/redux";
import apLogo from "../../assets/logo2.png";

import "./Header.scss";
const Header: FC = () => {
	const { admin } = useAppSelector(state => state.apReducer);
	return (
		<header className="ap__header">
			<div className="ap__header_admin">
				<div>
					<span>{admin.login}</span>
					{/* <span>{admin.id}</span> */}
				</div>
				<img src={apLogo} alt="ap_logo" />
			</div>
		</header>
	);
};

export default Header;
