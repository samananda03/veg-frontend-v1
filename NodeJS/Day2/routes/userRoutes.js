const express= require('express')
const {
    getUsers,
    createdUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/userController')

const router = express.Router();
router.route('/')
    .get(getUsers)
    .post(createdUser)

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;
