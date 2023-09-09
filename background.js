function displayNotification() {
    const currentTime = new Date();
    const minutes = currentTime.getMinutes();
  
    if (minutes === 0 || minutes === 30 || minutes === 1 || minutes === 2 || minutes === 3 || minutes === 4 || minutes === 5 || minutes === 6 || minutes === 7 || minutes === 8 || minutes === 9 || minutes === 10 || minutes === 11 || minutes === 12 || minutes === 12 || minutes === 13 || minutes === 14 || minutes === 15) {
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
  