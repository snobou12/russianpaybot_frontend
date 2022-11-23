/** @format */

import React, { FC, CSSProperties } from "react";
import MoonLoader from "react-spinners/MoonLoader";

type Props = {
	loading: boolean;
	size?: number;
};
const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
};
const Spinner: FC<Props> = ({ loading, size }) => {
	return (
		<MoonLoader
			color={"#DDE2FF"}
			loading={loading}
			size={size ? size : 150}
			cssOverride={override}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
};

export default Spinner;
