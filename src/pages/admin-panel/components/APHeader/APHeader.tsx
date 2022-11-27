/** @format */

import React, { FC } from "react";
import { TfiReload } from "react-icons/tfi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import "./APHeader.scss";
import { useNavigate } from "react-router-dom";
type Props = {
	title: string;
	handleClickReload: () => void;
};
const APHeader: FC<Props> = ({ title, handleClickReload }) => {
	const navigate = useNavigate();
	const handleClickBack = () => {
		navigate(-1);
	};
	return (
		<div className="ap__page_header">
			<div>
				<IoArrowBackCircleSharp onClick={handleClickBack} />
				<h2 className="ap__title">{title} 1</h2>
			</div>

			<TfiReload onClick={handleClickReload} />
		</div>
	);
};

export default APHeader;
