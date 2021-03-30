const express = require("express");
const router = express.Router();
const Blog = require("./model.js");

/* GET home page. */
router.get("/get-blogs", function (req, res, next) {
  Blog.find({})
    .then((blogs) => {
      return res.status(200).json(blogs);
    })
    .catch((err) => res.status(400).json({ message: "Error" }));
});

router.post("/post-blog", (req, res, next) => {
  try {
    const { user, title, text, tags } = req.body;
    console.log(tags);
    // store in db
    const newBlog = new Blog();
    newBlog.title = title;
    newBlog.author = user;
    newBlog.body = text;
    newBlog.tags = tags;

    newBlog
      .save()
      .then((blog) => {
        return res
          .status(200)
          .json({ message: "Blog added to DB", movie: blog.title });
      })
      .catch((err) => {
        return res.status(500).json({ message: "Blog wasn't added", err });
      });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
