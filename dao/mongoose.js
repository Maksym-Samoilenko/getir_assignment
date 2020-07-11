/**
 * @fileoverview Initializing mongo db database
 * @author maxsam125@google.com (Maksym Samoilenko)
 */
const mongoose = require('mongoose');
const db_string = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";
try {
   mongoose.connect(db_string, { useNewUrlParser: true, useUnifiedTopology: true });
   require('../model/record');
} catch (error) {
   console.error(error);
}


