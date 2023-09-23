/**
 * Route: /blog
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../../middlewares/validate-fields.middleware');
const { createBlogEntry, getBlogEntries } = require('../controllers/blog.controller');

const router = Router();

router.get('/', getBlogEntries);
router.post('/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('body', 'El body es obligatorio').not().isEmpty(),
    check('category', 'La categoria es obligatoria').not().isEmpty(),
    check('subcategory', 'La subcategoria es obligatoria').not().isEmpty(),
    validateFields
  ],
  createBlogEntry
);

module.exports = router;