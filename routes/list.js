const { postList, putList, deleteList, getAllLists, getList } = require("../controllers/list");

const router = require("express").Router();

router.get("/list", getAllLists);
router.post("/list", postList);
router.put("/list/:id", putList);
router.delete("/list/:id", deleteList);
router.get("/list/:id", getList);
module.exports = router;
