const { getAllBlogs, addBlogs, removeBlogs, updateBlogs } = require("../controllers/blogControllers")

const router = require("express").Router()

router
    .get("/", getAllBlogs)
    .post("/add", addBlogs)
    .put("/update/:blogId", updateBlogs)
    .delete("/:blogId", removeBlogs)

module.exports = router