const Payment  = require('./../models/payments');


module.exports = {
    async getPayments(req, res) {
     
        const payments = await Payment.find();
        res.json(payments);
      
      
    },
    
    
    async getSinglePayment(req, res) {
      try {
        const payments = await this.Payment.findOne({ _id: req.params.paymentsId });
        res.json(payments);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async createPayment(req, res) {
      try {
        const payment = await Payment.create(req.body);
        res.json(payment);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    }   
  
  
  }
  