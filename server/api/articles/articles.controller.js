const Article = require('../../models/article.model');

exports.createArticle = (req, res, next) => {
  const { file } = req;
  const {title, description, publish_date} = req.body;
  console.log(file);
  return new Article({title, description, publish_date, image: `images/${file.filename}` })
    .save()
    .then(article => res.json(article))
    .catch(err => {
      res.json(err);
    });
};

exports.updateArticle = (req, res, next) => {
  const { file } = req;
  const { _id, title, description, publish_date } = req.body;
  return Article.findOneAndUpdate({ _id }, {title, description, publish_date })
    .then(article => {
      if (file) {
        return article
          .update({image: `images/${file.filename}`})
          .then(article => res.json(article));
      }
      res.json(article);
    })
    .catch(err => {
      res.json(err);
    });
};

exports.getArticles = (req, res, next) => {
  return Article.find({}).then(articles => res.json(articles));
};

exports.getArticle = (req, res, next) => {
  const { id } = req.params;
  return Article.findOne({ _id: id })
    .then(article => res.json(article))
    .catch(err => res.json(err));
};

exports.deleteArticle = (req, res, next) => {
  const { id } = req.params;
  return Article.findOneAndDelete({ _id: id })
    .then(() => res.json({success: true}))
    .catch(err => res.json(err));
};
