const express = require("express");
const { getDogs, addDog, deleteDog, updateDog } = require("../controllers/dogsController");
const { validateDog } = require("../schemas/dogsSchema");

const router = express.Router();

router.get("/", getDogs);
router.post("/", validateDog, addDog);
router.delete("/:id", deleteDog);
router.put("/:id", validateDog, updateDog);

module.exports = router;
