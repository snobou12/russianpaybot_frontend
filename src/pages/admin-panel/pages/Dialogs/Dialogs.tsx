/** @format */

import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../../../components";
import { getBotActions } from "../../../../helps/getBotActions";
import { getFormatTime } from "../../../../helps/getTime";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import { getConversations } from "../../../../redux/reducers/apReducer/ActionApCreator";
import { APHeader, APPaginator, Header, Navigation } from "../../components";
import "./Dialogs.scss";
const Dialogs: FC = () => {
	const dispatch = useAppDispatch();
	const { isLoadingConversations, conversations } = useAppSelector(
		state => state.apReducer
	);

	const [page, setPage] = React.useState<number>(1);

	const nextPage = () => {
		if (page < conversations.maxPage) {
			setPage(page + 1);
		}
	};
	const previousPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};
	const handleChangePage = (selectedPage: number) => {
		setPage(selectedPage);
	};

	const handleReloadConversations = () => {
		dispatch(getConversations(page));
	};

	React.useEffect(() => {
		dispatch(getConversations(page));
	}, [page]);
	return (
		<div className="ap__dialogs ap__page">
			<Header />
			<Navigation />
			<div className="ap__page_content">
				<div className="ap__page_inner">
					<APHeader
						title="Диалоги"
						handleClickReload={handleReloadConversations}
					/>
					<APPaginator
						previousPage={previousPage}
						nextPage={nextPage}
						page={page}
						handleChangePage={handleChangePage}
						maxPage={conversations.maxPage}
					/>

					{isLoadingConversations ? (
						<Spinner loading={isLoadingConversations} />
					) : (
						<table>
							<tbody>
								<tr>
									<th style={{ width: "10%" }}>Имя пользователя / никнейм</th>
									<th style={{ width: "10%" }}>Чат ID</th>
									<th style={{ width: "30%" }}>Последнее сообщение</th>
								</tr>
								{conversations.conversations.length > 0 &&
									conversations.conversations.map((conversation, idx) => (
										<tr key={`${conversation.chatId}:${idx}`}>
											<td>
												<span>
													{conversation.firstname} <br />
													{`${
														conversation.username !== "anon"
															? `@${conversation.username}`
															: "-"
													} `}
												</span>
											</td>
											<td>
												<span>{conversation.chatId}</span>
											</td>
											<td className="ap__dialogs_dialog">
												<Link
													to={`/admin-panel/dialogs/${conversation.chatId}`}
												>
													<span>
														{getBotActions(conversation.lastMessage.message)}
													</span>
													<span>
														{getFormatTime(
															conversation.lastMessage.createdAt,
															"",
															false
														)}
													</span>
												</Link>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
