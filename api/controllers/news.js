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
    console.log(req.body)
    insert(req.body)
        .then( response => {
            console.log(response);
            res.status(200);
        })
        .catch(e => console.error(e));


}
const insert = (news) => News.query().insert(news);

module.exports = {
    getNews,
    getNewsId,
    postNews
};