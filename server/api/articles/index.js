'use strict';

const express = require('express');
const controller = require('./articles.controller');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'public/images/' });

router.post('/', upload.single('image'), controller.createArticle);
router.get('/', controller.getArticles);
router.get('/:id', controller.getArticle);
router.put('/:id', upload.single('image'), controller.updateArticle);
router.delete('/:id', controller.deleteArticle);

module.exports = router;
