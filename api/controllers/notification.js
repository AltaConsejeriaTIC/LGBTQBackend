'use strict';
const serverKey ='AAAAo2sq-a0:APA91bHGdvVYMnXJf0EvTSdcmpJ0SwHPjc9u7asFN_1_d8eKY092PGJBEmRTOCn7y8z8w_3uvsMZ6z3zLVgdF07Mtib5tbJUcGMO2pMTmN8BEWqGah8Hml35nNhL9m94gHkKT-aei3gQ';
const FCM = require('fcm-node');
const { Token } = require("../../database/models/token");

module.exports = {
  addToken: addToken,
  send: send

};

function addToken(req, res) {
  const token = req.swagger.params.token;

  Token.query().insert({token:token.value})
    .then(response => {
      console.log("Token Registered"+ token );
      res.status(201).send({ token: token });
    })
    .catch(e => {
      console.error(e);
      res.json({token:'ERROR'});
    });
}

function send(req, res) {
  let fcm = new FCM(serverKey);
  Token.query().then((tokens) => {
    tokens.forEach(function (element) {
      const message = {
        to: element.token,
        notification: {
          title: req.body.title,
          body: req.body.body
        }
      };
      fcm.send(message, function (err) {
        if (err) {
          console.log("Error sending notification to ", element.id)
        } else {
          console.log("Success sending notification to ", element.id)
        }
      });
    });
  }).catch((e) => console.error(e));

  res.json({result: 'NOTIFICATION PROCESS HAS STARTED'});
}
