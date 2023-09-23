/**
 * Route: /categories
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../../middlewares/validate-fields.middleware');
const { getCategories, createCategory, createSubcategories } = require('../controllers/categories.controller');

const router = Router();

router.get('/', getCategories);
router.post('/',
  [
    check('name', 'El nombre es obligatorio').notEmpty(),
    validateFields
  ],
  createCategory
);
router.post('/subcategories', 
  [
    check('name', 'El nombre es obligatorio').notEmpty(),
    validateFields
  ],
  createSubcategories
);

module.exports = router;