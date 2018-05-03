const { Schema } = require('mongoose');

const siteSchema = new Schema({
  _id: {
    domain: { type: String, required: true },
    collectionPrefix: { type: String, required: true }
  },
  title: String,
  description: String,
  categories: []
});

const userSchema = new Schema({
  email: String,
  username: String,
  hash: String,
  role: { type: String, default: 'subscriber' },
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }
});

const unverifiedSchema = new Schema({
  email: { type: String, required: true },
  code: { type: String, required: true },
  expires: { type: Date, required: true }
});

const postSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  content: { type: String, required: true },
  categories: [],
  date: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now },
  status: { type: String, default: 'publish' }
});

module.exports = {
  siteSchema,
  userSchema,
  unverifiedSchema,
  postSchema
};
