// Core module for Open Chat App Qaud
export class ChatCore {
  constructor() {
    this.messages = [];
  }
  
  sendMessage(message) {
    this.messages.push(message);
    return message;
  }
  
  getMessages() {
    return this.messages;
  }
}
