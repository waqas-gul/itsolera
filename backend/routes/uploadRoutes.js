const express = require("express");
const router = express.Router();
const { uploadCSV, getAllData, updateData, deleteData, verifyUser, upload } = require("../controllers/uploadController");

router.post("/", upload.single("file"), uploadCSV);
router.get("/", getAllData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);
router.get("/verify", verifyUser);

module.exports = router;




