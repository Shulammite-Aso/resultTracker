var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User"},
    resultsData: {type: Object, required: true}
});
module.exports = mongoose.model('Result', schema);