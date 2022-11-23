/** @format */

import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../../../../components";
import { getBotActions } from "../../../../helps/getBotActions";
import { getFormatTime } from "../../../../helps/getTime";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import { getConversations } from "../../../../redux/reducers/apReducer/ActionApCreator";
import { APHeader, Header, Navigation } from "../../components";
import "./Dialogs.scss";
const Dialogs: FC = () => {
	const dispatch = useAppDispatch();
	const { isLoadingConversations, conversations } = useAppSelector(
		state => state.apReducer
	);
	React.useEffect(() => {
		dispatch(getConversations());
	}, []);
	const handleReloadConversations = () => {
		dispatch(getConversations());
	};
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
								{conversations.length > 0 &&
									conversations.map((conversation, idx) => (
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
														{getFormatTime(conversation.lastMessage.createdAt)}
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
