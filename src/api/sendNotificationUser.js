export const sendPushNotification = async (name,body) => {
    const expoPushToken = "ExponentPushToken[UXEbuMCPcK47Ocf9MA0dm5]";
    const message = {
      to: expoPushToken,
      sound: "default",
      title:name,
      body,
      data: { someData: "goes here" },
    };
  
    try {
      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-encoding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    } catch (err) {
      console.log("err:", err);
    }
  };