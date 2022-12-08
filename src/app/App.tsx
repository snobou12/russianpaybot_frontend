/** @format */

import React, { FC } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { adminPaths } from "../const/adminPaths";

import { AdminPanel } from "../pages";
import {
	Auth,
	Charts,
	Dialog,
	Dialogs,
	Posting,
	Prices,
	Promocodes,
	Users,
	WebContent,
} from "../pages/admin-panel/pages";
import { useAppDispatch } from "../redux/hooks/redux";
import { checkAuth } from "../redux/reducers/apReducer/ActionApCreator";
import { checkNavigationPath } from "../redux/reducers/apReducer/apReducer";
import "./App.scss";

const App: FC = () => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	React.useEffect(() => {
		if (adminPaths.includes(location.pathname)) {
			if (localStorage.getItem("russianpaybot-token")) {
				dispatch(checkAuth());
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
		<div className="app">
			<div className="app__content">
				<Routes>
					<Route path="/admin-panel/" element={<AdminPanel />} />
					<Route path="/admin-panel/users" element={<Users />} />
					<Route path="/admin-panel/charts" element={<Charts />} />
					<Route path="/admin-panel/posting" element={<Posting />} />
					<Route path="/admin-panel/dialogs" element={<Dialogs />} />
					<Route path="/admin-panel/dialogs/:chatId" element={<Dialog />} />
					<Route path="/admin-panel/prices" element={<Prices />} />
					<Route path="/admin-panel/web-content" element={<WebContent />} />
					<Route path="/admin-panel/promocodes" element={<Promocodes />} />
					<Route path="/admin-panel/auth" element={<Auth />} />

					{/* <Route path="/successPayment/:billId" element={<AdminPanel />} /> */}
				</Routes>
			</div>
		</div>
	);
};

export default App;
