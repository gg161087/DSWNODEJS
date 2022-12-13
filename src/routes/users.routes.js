const router = require('express').Router();
const users_controller = require('../controllers/users.controller');
const validate = require('../middlewares/validate');
const user_scheme = require('../middlewares/schemes/user.scheme');
const global_constants = require('../const/globalConsts');
var multer = require('multer') 
var upload = multer({ 
    dest: 'uploads/files_users/', 
    limits: { fileSize: global_constants.MAX_FILE_SIZE } 
})

router.get('/', users_controller.getUsers);
router.get('/:id', users_controller.getUser);
router.post('/', users_controller.createUser);
router.put('/:id', users_controller.updateUser);
router.delete('/:id', users_controller.deleteUser);

module.exports = router