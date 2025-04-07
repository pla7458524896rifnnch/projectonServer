 
class SocketManager {
  constructor(url, roomName, username) {
    this.url = url;
    this.roomName = roomName;
    this.username = username;
    this.socket = null;
    this.messageHandlers = [];
  }

  connect() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) return;

    this.socket = new WebSocket(`${this.url}/ws/chat/${this.roomName}/${this.username}/`);
    
    this.socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      this.messageHandlers.forEach(handler => handler(data));
    };

    this.socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    this.socket.onclose = () => {
      console.log("Disconnected from WebSocket");
      this.socket = null;
    };
  }

  onMessage(handler) {
    this.messageHandlers.push(handler);
  }

  sendMessage(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.messageHandlers = [];
    }
  }
}

export default SocketManager;