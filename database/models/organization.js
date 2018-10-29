const { Model } = require("objection");

class Organization extends Model {

    static get tableName() {
        return "organizations";
    };
}


module.exports = { Organization };