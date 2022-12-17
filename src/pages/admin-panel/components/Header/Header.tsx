/** @format */

import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import { logout } from "../../../../redux/reducers/apReducer/ActionApCreator";
import apLogo from "../../assets/logo.png";

import "./Header.scss";
const Header: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { admin } = useAppSelector(state => state.apReducer);
	const handleLogout = () => {
		dispatch(logout()).then(() => {
			navigate("/admin-panel/auth");
		});
	};
	return (
		<header className="ap__header">
			<div className="ap__header_admin">
				<div>
					<span>{admin.login}</span>
					{/* <span>{admin.id}</span> */}
				</div>
				<img src={apLogo} alt="ap_logo" />
				<div className="ap__header_logout">
					<button onClick={handleLogout} className="btn btn--inverted">
						Выход
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
