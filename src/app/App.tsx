/** @format */

import React, { FC } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { adminPaths } from "../const/adminPaths";

import { AdminPanel, Home } from "../pages";
import {
	Auth,
	Dialog,
	Dialogs,
	Orders,
	Posting,
	Prices,
	Promocodes,
	Users,
	WebContent,
} from "../pages/admin-panel/pages";
import { useAppDispatch } from "../redux/hooks/redux";
import { checkAuth } from "../redux/reducers/apReducer/ActionApCreator";
import { checkNavigationPath } from "../redux/reducers/apReducer/apReducer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App: FC = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	React.useEffect(() => {
		if (adminPaths.includes(location.pathname)) {
			if (localStorage.getItem("russianpaybot-token")) {
				// dispatch(checkAuth());
			} else {
				navigate("/admin-panel/auth");
			}
		}
	}, [location.pathname]);

	React.useEffect(() => {
		if (location.pathname) {
			if (adminPaths.includes(location.pathname)) {
				dispatch(checkNavigationPath(location.pathname));
			}
		}
	}, [location.pathname]);
	return (
		<>
			<div className="app">
				<div className="app__content">
					<Routes>
						{/* Admin panel */}
						<Route path="/admin-panel/" element={<AdminPanel />} />
						<Route path="/admin-panel/users" element={<Users />} />
						<Route path="/admin-panel/posting" element={<Posting />} />
						<Route path="/admin-panel/dialogs" element={<Dialogs />} />
						<Route path="/admin-panel/dialogs/:chatId" element={<Dialog />} />
						<Route path="/admin-panel/prices" element={<Prices />} />
						<Route path="/admin-panel/web-content" element={<WebContent />} />
						<Route path="/admin-panel/promocodes" element={<Promocodes />} />
						<Route path="/admin-panel/auth" element={<Auth />} />
						<Route path="/admin-panel/orders" element={<Orders />} />
						{/*  */}
						{/* <Route path="/successPayment/:billId" element={<AdminPanel />} /> */}
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default App;
