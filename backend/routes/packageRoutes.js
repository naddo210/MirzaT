const express = require('express');
const router = express.Router();
const {
  getAllPackages,
  createPackage,
  updatePackage,
  deletePackage
} = require('../controllers/packageController');


router.get('/', getAllPackages);
router.post('/', createPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;
