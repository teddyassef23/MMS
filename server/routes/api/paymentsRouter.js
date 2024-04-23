const router = require('express').Router();
const { 
    getPayments,
    getSinglePayment,
    createPayment,
  } = require('../../controllers/paymentsController');
  

  // /api/Members
router.route('/').get(getPayments).post(createPayment);

// /api/Members/:MemberId
router.route('/:PaymentId').get(getSinglePayment);

module.exports = router;