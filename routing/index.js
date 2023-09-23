const { Router } = require('express');
const { constants } = require('../core/constants');

const categoriesRouter = require('../core/routes/categories.routes');
const blogRouter = require('../core/routes/blog.routes');

function routerApi(app) {
  const router = Router();
  app.use(constants.BASE_URL, router);

  router.use(constants.BASE_ROUTES.CATEGORIES, categoriesRouter);
  router.use(constants.BASE_ROUTES.BLOG, blogRouter);
}

module.exports = routerApi;