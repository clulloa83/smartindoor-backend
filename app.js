const Server = require('./server');
const server = new Server();

server.listen();

module.exports = server;


// se genera llave publica sólo una vez, se almacena en vapid.json
// const fs = require('fs');
// const webpush = require('web-push');
// require('dotenv').config();
// const data = webpush.generateVAPIDKeys();
// console.log('data', data);
// fs.writeFileSync('vapid.json', JSON.stringify(data));
// // webpush.setVapidDetails(`mailto:${ process.env.CORREO }`, data.publicKey, data.privateKey);

// webpush.setVapidDetails(`mailto:clulloa83@gmail.com`, data.publicKey, data.privateKey);


// const webpush = require('web-push');
// console.log(webpush.generateVAPIDKeys());
// webpush.setVapidDetails('mailto:clulloa83@gmail.com', 'BCSPJBLBtJz1VGtiDVJKt46vNwkB9F6IGhaYKnbw18aTHmU8c2ec3luMh-0gGnllOqmH_OxboHiH916Vq4FQZQ8', 'Hs6vbIviEWgMSAPOkivh8gNuhZezhk2m9oznCAFJUjY');

// const sub = {
//     endpoint: 'https://fcm.googleapis.com/fcm/send/c-MzlFaygGI:APA91bHqx_1euUHq9M512c26bC6-2oo-7Hr3EqTUwEaaIFwwbAAjfJELfBSmIl3DYnymNCPLRKQ9-J9Awmt_d1ViT7Hu_oE4P1d7LuLAxKvKb4QQNxDhHT2fVc9Vj_2fuJcYIOxicykC',
//     expirationTime: null,
//     keys: {
//       p256dh: 'BCzVyPZXuYwD9Lq7xJJAW6qaD7xRZUGrvNcJJe6GfP8tfCXGvi68tyS8hUlX1knIpAikhTJ-_i9N2nGOvJ96Dk4',
//       auth: 'jmN-slTbb9yFs1xWLk3piw'
//     }
// };

// const payLoad = {
//     notification: {
//       data: { url: 'http://www.youtube.com/funofheuristic' },
//       title: 'Fun Of Heuristic',
//       vibrate: [100, 50, 100],
//     },
//   };

// webpush.sendNotification(sub, JSON.stringify(payLoad));