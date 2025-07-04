const express=require('express');
const { addUser, getUserById, getAllUsers, deleteUser, updateUserById, loginUser } = require('../controllers/userController');
const router = express.Router();
const storage = require('node-persist');


router.get('/',getAllUsers)//Get all users
router.get('/:id',getUserById)//Get single user by ID
router.post('/',addUser)//Post new user
router.delete('/:id',deleteUser)//Delete user by id
router.put('/:id',updateUserById)//Update user by id
router.post('/login',loginUser)//Login user

module.exports = router //export the router to use in app.js