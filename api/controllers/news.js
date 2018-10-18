'use strict';

const { News } = require('../../database/models/news');


function getNews(req, res) {
    findNews()
        .then((news) => {
            res.status(200).send(news);
        })
        .catch((e) => console.error(e));
}

const findNews = () => News.query();

function getNewsId(req, res) {
    const id = req.swagger.params.id.value;

    findNewsId(id)
        .then(news => {
            if (!news) {                
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                res.status(200).send(news);
            }
        })
        .catch((e) => console.error(e));
}

const findNewsId = (id) =>  News.query().where('id', id).first();

function postNews(req, res) {
    insert(req.body)
        .then( response => {
            res.status(201).send({id: response.id});
        })
        .catch(e => console.error(e));


}
const insert = (news) => News.query().insert(news);

function updateNews(req, res){

  const id = req.swagger.params.id.value;

  findNewsId(id)
      .then(news => {
          if (!news) {                
              res.status(400).send({ message: 'Invalid ID' });
          } else {
              newsUpdated(req.body , id)
                .then( response => {
                    res.status(201).send( {id: response.id} );
                })
                .catch((e) => console.error(e));

          }
      })
      .catch((e) => console.error(e));

}

const newsUpdated = (data,id) => News.query()
  .patchAndFetchById(id, {
    title: data.title,
    description: data.description,
    source: data.source,
    source_link: data.source_link,
    date: data.date,
    image_owner: data.image_owner,
    image: data.image,
    state: data.state,
    created_at: data.created_at
  });

  

module.exports = {
    getNews,
    getNewsId,
    postNews,
    updateNews
};