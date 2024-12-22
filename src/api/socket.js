class SocketManager {
  constructor(serverUrl, roomName, username) {
    if (!serverUrl) throw new Error("Server URL is required.");
    if (!roomName) throw new Error("Room name is required.");
    if (!username) throw new Error("Username is required.");

    // ساخت URL با استفاده از roomName و username
    this.fullUrl = `${serverUrl}/ws/chat/${roomName}/${username}/`;
    this.socket = null;
  }

  // اتصال به سرور
  connect() {
    this.socket = new WebSocket(this.fullUrl);
    this.socket.onopen = () => console.log("WebSocket connection opened.");
    this.socket.onclose = () => console.log("WebSocket connection closed.");
    this.socket.onerror = (error) => console.error("WebSocket error:", error);
  }
  // ارسال پیام به سرور
  sendMessage(data) {
    if (!data) throw new Error("Message data is required.");
    if (this.socket) {
      this.socket.send(JSON.stringify(data));
    }
     else {
      console.error("WebSocket is not open. Cannot send message.");
    }
  }
  // دریافت پیام‌ها از سرور
  onMessage(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback function is required.");
    }
    if (this.socket) {
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("Message received:", data);
        callback(data);
      };
    } else {
      console.error("WebSocket is not initialized.");
    }
  }
  // قطع ارتباط
  disconnect() {
    if (this.socket) {
      this.socket.close();
      console.log("WebSocket connection closed.");
    } else {
      console.error("WebSocket is not initialized.");
    }
  }
}

export default SocketManager;
