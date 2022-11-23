type lastMessageType={
    message:string,
    sender:string,
    createdAt:number,
}

export interface IAllConversation {
    chatId:string;
    lastMessage:lastMessageType;
    firstname:string;
    username:string;
  }