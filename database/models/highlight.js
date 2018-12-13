const { Model } = require("objection");

class Highlight extends Model {

    static get tableName() {
        return "highlights";
    };
}

module.exports = { Highlight };