/** @format */

import classNames from "classnames";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./APPaginator.scss";

type Props = {
	previousPage: () => void;
	nextPage: () => void;
	page: number;
	handleChangePage: (page: number) => void;
	maxPage: number;
};
const APPaginator: FC<Props> = ({
	previousPage,
	nextPage,
	page,
	handleChangePage,
	maxPage,
}) => {
	return (
		<div className="ap__pagination">
			<div className="app__controllers">
				<div
					onClick={previousPage}
					className={classNames("app__controller", {
						"app__controller--disabled": page === 1,
					})}
				>
					{"<"}
				</div>
				<div
					onClick={nextPage}
					className={classNames("app__controller", {
						"app__controller--disabled": page === maxPage,
					})}
				>
					{">"}
				</div>
			</div>
			<div className="app__controller_pages">
				<Swiper slidesPerView={"auto"} spaceBetween={10}>
					{Array(maxPage)
						.fill(0)
						.map((_, idx) => (
							<SwiperSlide key={`${idx}`}>
								<div
									onClick={() => handleChangePage(idx + 1)}
									className={classNames(" app__controller_page", {
										"app__controller_page--selected": idx + 1 === page,
									})}
								>
									{idx + 1}
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

export default APPaginator;
