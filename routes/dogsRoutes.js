const express = require("express");
const router = express.Router();
const { validateDog } = require("../schemas/dogsSchema");
const { getDogs, addDog, deleteDog, updateDog } = require("../controllers/dogsController");

// GET 요청 처리
router.get("/", getDogs);

// POST 요청 처리
router.post("/", validateDog, addDog);

// DELETE 요청 처리
router.delete("/:id", deleteDog);

// PUT 요청 처리
router.put("/:id", validateDog, updateDog);

module.exports = router;
