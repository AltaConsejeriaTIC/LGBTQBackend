'use strict';
const serverKey ='AAAAo2sq-a0:APA91bHGdvVYMnXJf0EvTSdcmpJ0SwHPjc9u7asFN_1_d8eKY092PGJBEmRTOCn7y8z8w_3uvsMZ6z3zLVgdF07Mtib5tbJUcGMO2pMTmN8BEWqGah8Hml35nNhL9m94gHkKT-aei3gQ';
const FCM = require('fcm-node');

module.exports = {
  addToken: addToken,
  send: send

};

function addToken(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var token = req.swagger.params.token;
  console.log(token);
  // this sends back a JSON response which is a single string
  res.json({token:token.value});
}

function send(req, res) {
  let fcm = new FCM(serverKey);

  const message = {
    to: 'exbQVqmheIg:APA91bHeiqReYPy41pe5Q5SPUwOPxUX51vNUexLThVC5LrVyFSHgFDcjwWYJuK24sR9OUCISM0xcLtp5p64EsnxKKvsOFboWsp3_Wf5-NNuwVcO6kb5NbXIuXtXpvcWs-6utgKEvnPHM',
    notification: {
      title: req.body.title,
      body: req.body.body
    }
  };

  fcm.send(message, function(err){
    if (err) {
      res.json({result: 'ERROR'});
    } else {
      res.json({result:'OK'});
    }
  });

}
