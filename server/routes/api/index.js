const router = require('express').Router();
const memberRoutes = require('./membersrouter');
const paymentRoutes = require('./paymentsRouter');
const memberFamilyRoutes = require('./memberFamilyRoutes');

router.use('/members', memberRoutes);
router.use('/payments', paymentRoutes);
router.use('/memberFamily', memberFamilyRoutes);

module.exports = router;
