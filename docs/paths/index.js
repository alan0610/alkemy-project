const user = require('./user');
const category = require('./category');
const testimonial = require('./testimonial');
const news = require('./new');
const member = require('./member');
const auth = require('./auth');
module.exports = {
  paths: {
    ...auth,
    ...testimonial,
    ...user,
    ...category,
    ...news,
    ...member
  }
};
