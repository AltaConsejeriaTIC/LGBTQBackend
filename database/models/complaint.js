const { Model } = require("objection");

class Complaint extends Model {

    static get tableName() {
        return "complaints";
    };
}

module.exports = { Complaint };