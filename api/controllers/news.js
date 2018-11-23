'use strict';

const { News } = require('../../database/models/news');
const  AdminHelper = require('../helpers/admin_helper');


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

const findNewsId = (id) => News.query().where('id', id).first();

function postNews(req, res) {

    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
        insert(req.body)
        .then(response => {
            res.status(201).send({ id: response.id });
        })
        .catch(e => console.error(e));
      }else{
        res.status(403).send({ message: 'Forbidden permissions' });
      }
    })
    .catch(e => console.error(e));

    
}
const insert = (news) => News.query().insert(news);

function updateNews(req, res) {

    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
        findNewsId(id)
        .then(news => {
            if (!news) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                newsUpdated(req.body, id)
                    .then(response => {
                        res.status(201).send({ id: response.id });
                    })
                    .catch((e) => console.error(e));
            }
        })
        .catch((e) => console.error(e));
      }else{
        res.status(403).send({ message: 'Forbidden permissions' });
      }
    })
    .catch(e => console.error(e));

    

}

const newsUpdated = (data, id) => News.query()
    .patchAndFetchById(id, {
        title: data.title,
        description: data.description,
        source: data.source,
        source_link: data.source_link,
        date: data.date,
        image_owner: data.image_owner,
        image: data.image,
        state: data.state,
        updated_at: new Date()
    });

function deleteNewsId(req, res) {
    const id = req.swagger.params.id.value;
    const token = req.headers.token;
    AdminHelper.isAuthenticate(token)
    .then( (dataAdmin)=>{
      if( dataAdmin.length === 1 ){
        findNewsId(id)
        .then(news => {
            if (!news) {
                res.status(400).send({ message: 'Invalid ID' });
            } else {
                newsDeleted(id)
                    .then(response => {
                        console.log('response', response);
                        res.status(200).send({ success: response, description: 'Success news deleted' });
                    })
                    .catch((e) => console.error(e));
            }
        })
        .catch((e) => console.error(e));
      }else{
        res.status(403).send({ message: 'Forbidden permissions' });
      }
    })
    .catch(e => console.error(e));

}


const newsDeleted = (id) => News.query()
    .deleteById(id)


module.exports = {
    getNews,
    getNewsId,
    postNews,
    updateNews,
    deleteNewsId
};