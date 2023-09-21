importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "AIzaSyBPx-gRUtvlaD-QT_5gBOU5T_1d0sNA9Eg",
  authDomain: "smart-restaurant-service-5c93b.firebaseapp.com",
  projectId: "smart-restaurant-service-5c93b",
  storageBucket: "smart-restaurant-service-5c93b.appspot.com",
  messagingSenderId: "686550577782",
  appId: "1:686550577782:web:52ca8be137b991a2806557",
  measurementId: "G-JG0HX6CBTM",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  //   return self.registration.showNotification(notificationTitle, notificationOptions)
});

// self.addEventListener('notificationclick', (event) => {
//   if (event.action) {
//     clients.openWindow(event.action)
//   }
//   event.notification.close()
// })
