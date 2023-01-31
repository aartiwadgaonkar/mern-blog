const Blog = require("./../models/BlogModel")
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All blog feched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `error ${error}`,
        })
    }
}
exports.addBlogs = async (req, res) => {
    try {
        console.log(req.body);
        await Blog.create(req.body)
        res.json({
            success: true,
            message: "All blog added",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `error ${error}`,
        })
    }
}
exports.removeBlogs = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: "All blog deleted",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `error ${error}`,
        })
    }
}
exports.updateBlogs = async (req, res) => {
    try {
        const { blogId } = req.params
        const result = await Blog.findByIdAndUpdate(blogId, req.body)
        res.json({
            success: true,
            message: "All blog updated",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `error ${error}`,
        })
    }
}