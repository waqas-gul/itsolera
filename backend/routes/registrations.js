const express = require('express');
const router = express.Router();
const {
    createRegistration,
    getAllRegistrations,
    getRegistration,
    updateRegistration,
    deleteRegistration
} = require('../controllers/registrationController');

router.post('/', createRegistration);
router.get('/', getAllRegistrations);
router.get('/:id', getRegistration);
router.put('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);

module.exports = router;