const express = require('express');
const router = express.Router();

const{addHexBolt, getOneHexBolt, getPaginatedSearchhexBolt, gethexBolt, updatehexBolt} = require('../controllers/jobeeTrans');


router.post('/admin/add/transaction', addHexBolt);
router.get('/admin/get/transaction', gethexBolt);
router.get('/admin/get/pagination/trans', getPaginatedSearchhexBolt);
router.get('/admin/get/one/transaction/:slug', getOneHexBolt);
router.put('/admin/update/transaction/:slug', updatehexBolt);

module.exports = router;
