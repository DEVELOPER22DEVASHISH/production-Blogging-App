
const express = require('express');

const { getAllBlogsController, updateBlogController, getBlogBYIdController, deleteBlogCntroller, createsBlogController, userBlogController } = require('../controllers/blogsController');
// router object
const router = express.Router();

// routes
// GET || all blogs
router.get('/all-blog', getAllBlogsController);

// POST || create blog
router.post('/create-blog', createsBlogController);

// PUT || update blog
router.put('/update-blog/:id', updateBlogController);

// GET || SINGLE Blog Details
router.get('/get-blog/:id', getBlogBYIdController);

// DELETE || delete blog
router.delete('/delete-blog/:id', deleteBlogCntroller);

router.get('/user-blg/:id', userBlogController);

module.exports = router