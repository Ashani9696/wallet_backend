const mongoose = require('mongoose');
const userModel = require('../models/user.model');
const walletModel = require('../models/wallet.model');
const dotenv = require('dotenv')
dotenv.config()
const db = {};
const Mongo_URI = process.env.MONGOOSE_CONNECTION || "mongodb://localhost:27017/vallet"
const connectDatabase = async() => {
    return await mongoose.connect(Mongo_URI);
}

connectDatabase().then(connection => {
    db.user = userModel.UserSchema(connection)
    db.wallet = walletModel.WalletSchema(connection)
})

module.exports = db;