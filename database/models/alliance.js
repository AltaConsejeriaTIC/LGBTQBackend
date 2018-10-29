const { Model } = require("objection");

class Alliance extends Model {

    static get tableName() {
        return "alliances";
    };
}


module.exports = { Alliance };