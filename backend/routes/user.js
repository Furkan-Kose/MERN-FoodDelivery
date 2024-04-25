const express = require('express');

const { register, login, getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user');

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user",  createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
