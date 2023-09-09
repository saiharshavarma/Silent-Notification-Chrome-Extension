function displayNotification() {
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();
  
    if (minutes === 0 || minutes === 30) {
      chrome.notifications.create({
        type: 'basic',
        title: 'Silent Notification',
        message: 'Hi! It is time for a break',
        iconUrl: 'icon.png',
        silent: true
      });
    }
  }
  
displayNotification();

setInterval(displayNotification, 60000);
  
