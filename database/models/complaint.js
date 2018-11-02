const { Complaint } = require("objection");

class Complaint extends Model {

    static get tableName() {
        return "users";
    };
}


module.exports = { Complaint };