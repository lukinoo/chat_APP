export interface Message {
  displayName: string;
  photoURL: string;
  sendAt: Date;
  text: string;
  uid: string;
}

export type Messages = Array<Message>;
