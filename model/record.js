/**
 * @fileoverview Define record model for mongo
 * @author maxsam125@google.com (Maksym Samoilenko)
 */
const mongoose = require('mongoose');
mongoose.model('Record', new mongoose.Schema({ key: String, value: String, createdAt: Date }));


