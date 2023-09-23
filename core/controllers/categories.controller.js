const { Types } = require('mongoose');
const { serverError, successResponse } = require('../../helpers/responses');
const Category = require('../models/category.model');
const Subcategory = require('../models/subcategory.model');

const getCategories = async (req, res) => {
  const categories = await Category.find().populate('subcategories', '_id name');
  successResponse(res, categories)
}

const createCategory = async (req, res) => {
  const { name, subcategories } = req.body;
  const category = new Category({ name });
  for (const subcategory of subcategories) {
    category.subcategories.push(new Types.ObjectId(subcategory));
  }
  try {
    const categoryDb = await category.save();
    successResponse(res, categoryDb);
  } catch (error) {
    serverError(error, res);
  }
}

const createSubcategories = async (req, res) => {
  const { subcategories } = req.body;
  const subcategoriesAdded = [];
  try {
    for (const subcategory of subcategories) {
      const newSubcategory = new Subcategory({ name: subcategory });
      const subcategoryDb = await newSubcategory.save();
      subcategoriesAdded.push(subcategoryDb);
    }
    successResponse(res, subcategoriesAdded);
  } catch (error) {
    serverError(error, res);
  }
}

module.exports = {
  getCategories,
  createCategory,
  createSubcategories
}