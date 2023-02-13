const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = new Schema({
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    images: [{
        imageID: {
            type: String,
        },
        date: {
            type: Date,
        }
    }]
});

module.exports = Progress = mongoose.model("Progress", progressSchema);