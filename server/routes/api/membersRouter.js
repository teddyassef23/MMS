const router = require('express').Router();
const { 
  getMembers,
  getSingleMember,
  createMember,
  addPayment,
} = require('../../controllers/membersController');

// /api/Members
router.route('/').get(getMembers).post(createMember);
router.route('/:memberId').put(addPayment);;

// /api/Members/:MemberId and and a new payments
router.route('/:memberId').get(getSingleMember).put(addPayment);;



module.exports = router;
