const router = require('express').Router();
const { 
  getMemberFamilies,
    getSingleMemberFamily,
    createMemberFamily,
  } = require('../../controllers/memberFamilyRouter');
  

  // /api/Members
router.route('/').get(getMemberFamilies).post(createMemberFamily);

// /api/Members/:MemberId
router.route('/:MemberFamilyId').get(getSingleMemberFamily);

module.exports = router;