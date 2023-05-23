const router = require("express").Router();
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");
const ctrls = require("../controllers/blog");

router.get("/", ctrls.getBlogs);
router.post("/", [verifyAccessToken, isAdmin], ctrls.createNewBlog);
router.put("/like", verifyAccessToken, ctrls.likeBlog);
router.put("/dislike", verifyAccessToken, ctrls.disLikeBlog);

router.put("/:bid", [verifyAccessToken, isAdmin], ctrls.updateBlog);
module.exports = router;
