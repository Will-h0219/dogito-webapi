const { Types } = require('mongoose');
const { serverError, successResponse } = require('../../helpers/responses');
const BlogEntry = require('../models/blogEntry.model');

const getBlogEntries = async (req, res) => {
  const entries = await BlogEntry.find()
    .populate('category', 'name')
    .populate('subcategory', 'name');
  successResponse(res, entries);
}

const createBlogEntry = async (req, res) => {
  const { body } = req;
  try {
    const newEntry = new BlogEntry({
      ...body,
      category: new Types.ObjectId(body.category),
      subcategory: new Types.ObjectId(body.subcategory)
    });
    const entryDb = await newEntry.save();
    successResponse(res, entryDb);
  } catch (error) {
    serverError(error, res);
  }
}

module.exports = {
  getBlogEntries,
  createBlogEntry
}