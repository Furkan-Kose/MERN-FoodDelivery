const express = require('express');
const { getAllFoods, getFoodById, createFood, updateFood, deleteFood } = require('../controllers/food');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get("/foods", getAllFoods);
router.get("/food/:id", getFoodById);
router.post("/food", createFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);

module.exports = router;



