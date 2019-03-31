export interface Message {
  message: string;
}

export interface MessageResolved {
  message: Message;
  error?: any;
}
