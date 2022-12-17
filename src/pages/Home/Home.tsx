/** @format */

import React, { FC } from "react";
import { Connect, Details, Enjoy, HIW, Services } from "./sections";
import "./Home.scss";
const Home: FC = () => {
	const [selectedNav, setSelectedNav] = React.useState<number>(0);
	const enjoyRef = React.useRef<HTMLDivElement>(null);
	const hiwRef = React.useRef<HTMLDivElement>(null);
	const servicesRef = React.useRef<HTMLDivElement>(null);
	const detailsRef = React.useRef<HTMLDivElement>(null);
	const connectRef = React.useRef<HTMLDivElement>(null);

	const smoothToSection = (section: string) => {
		let ref;
		switch (section) {
			case "hiw":
				ref = hiwRef;
				break;
			case "services":
				ref = servicesRef;
				break;
			case "details":
				ref = detailsRef;
				break;
			case "connect":
				ref = connectRef;
				break;
			default:
				ref = enjoyRef;
				break;
		}
		if (ref.current) ref.current.scrollIntoView();
	};

	return (
		<div className="home">
			<Enjoy smooth={smoothToSection} sectionRef={enjoyRef} />

			<Services
				setSelectedNav={setSelectedNav}
				smooth={smoothToSection}
				sectionRef={servicesRef}
			/>
			<HIW sectionRef={hiwRef} />
			<Details
				selectedNav={selectedNav}
				setSelectedNav={setSelectedNav}
				sectionRef={detailsRef}
			/>
			<Connect sectionRef={connectRef} />
		</div>
	);
};

export default Home;
