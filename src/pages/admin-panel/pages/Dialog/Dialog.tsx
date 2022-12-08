/** @format */

import React, { FC } from "react";
import { APHeader, Header, Navigation } from "../../components";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/redux";
import {
	getConversation,
	sendMessage,
} from "../../../../redux/reducers/apReducer/ActionApCreator";
import logo from "../../assets/logo2.png";
import { Spinner } from "../../../../components";
import { formatStyleType, getFormatTime } from "../../../../helps/getTime";
import { messageType } from "../../../../models/IConversation";
import { getBotActions } from "../../../../helps/getBotActions";
import "./Dialog.scss";

const Dialog: FC = () => {
	const messagesRef = React.useRef<HTMLDivElement>(null);
	const chatRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {}, []);
	const dispatch = useAppDispatch();
	const {
		conversation,
		isLoadingConversation,
		conversationErrorMessage,
		isLoadingSending,
	} = useAppSelector(state => state.apReducer);
	const [messageInput, setMessageInput] = React.useState<string>("");
	const { chatId } = useParams();
	const handleReloadConversation = () => {
		if (chatId) {
			dispatch(getConversation(chatId));
		}
		setTimeout(() => {
			if (messagesRef.current) {
				messagesRef.current.scrollTo({ top: 9999999, behavior: "smooth" });
			}
		}, 500);
	};

	const handleSendMessage = () => {
		if (messageInput.length !== 0 && chatId) {
			const message: messageType = {
				message: messageInput,
				sender: "bot",
				createdAt: Date.now(),
			};
			dispatch(sendMessage([chatId, message]));
		}
	};

	function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === "Enter") {
			handleSendMessage();
		}
	}

	React.useEffect(() => {
		if (chatId) {
			dispatch(getConversation(chatId));
		}
	}, [chatId]);
	React.useEffect(() => {
		if (!isLoadingConversation) {
			setTimeout(() => {
				if (messagesRef.current) {
					messagesRef.current.scrollTo({ top: 9999999, behavior: "smooth" });
				}
			}, 100);
		}
	}, [isLoadingConversation]);

	React.useEffect(() => {
		if (!isLoadingSending) {
			setTimeout(() => {
				if (messagesRef.current) {
					messagesRef.current.scrollTo({ top: 9999999, behavior: "smooth" });
				}
				setMessageInput("");
			}, 0);
		}
	}, [isLoadingSending]);
	return (
		<div onKeyDown={handleKeyDown} className="ap__dialog ap__page">
			<Header />
			<Navigation />
			<div className="ap__page_content">
				<div className="ap__page_inner">
					{isLoadingConversation ? (
						<Spinner size={50} loading={isLoadingConversation} />
					) : (
						<APHeader
							title={`Диалог c ${
								conversation?.user?.firstname
									? conversation.user.firstname
									: "кем-либо не найден"
							} ${
								conversation?.user?.lastname ? conversation.user.lastname : ""
							}`}
							handleClickReload={handleReloadConversation}
						/>
					)}
					{isLoadingConversation ? (
						<Spinner loading={isLoadingConversation} />
					) : conversationErrorMessage.length > 0 ? (
						<h2 className="ap__dialog__error">{conversationErrorMessage}</h2>
					) : (
						<div ref={chatRef} className="ap__dialog_chat">
							<div className="dialog_chat__header">
								<span>Поиск сообщений</span>
								<input className="inpt" />
							</div>
							<div ref={messagesRef} className="dialog_chat__messages">
								{conversation.conversation?.messages.length > 0 &&
									conversation.conversation?.messages.map((msg, idx) => {
										if (msg.sender === "bot") {
											return (
												<div
													key={`${msg.createdAt}:${idx}`}
													className="dialog_chat__messages_item dialog_chat__messages_item--bot"
												>
													<img src={logo} alt="bot_logo" />
													<span>{getBotActions(msg.message)}</span>
													<span className="dialog_chat__messages_item-date">
														{getFormatTime(
															msg.createdAt,
															formatStyleType.SHORT
														)}
													</span>
												</div>
											);
										} else {
											return (
												<div
													key={`${msg.createdAt}:${idx}`}
													className="dialog_chat__messages_item dialog_chat__messages_item--user"
												>
													<span>{msg.message}</span>
													<span className="dialog_chat__messages_item-date">
														{getFormatTime(
															msg.createdAt,
															formatStyleType.SHORT
														)}
													</span>
												</div>
											);
										}
									})}
							</div>

							<div className="dialog_chat__footer">
								<input
									placeholder="Введите сообщение"
									value={messageInput}
									onChange={e => setMessageInput(e.target.value)}
									className="inpt"
								/>
								<button onClick={handleSendMessage} className="btn">
									Отправить
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dialog;
