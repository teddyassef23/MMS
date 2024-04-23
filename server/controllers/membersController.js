const Member  = require('./../models/members');
const Payment  = require('./../models/payments');

module.exports = {
  async getMembers(req, res) {
   
      const members = await Member.find();
      res.json(members);   
  },
  
  
  async getSingleMember(req, res) {
    try {
      const members = await Member.findOne({ _id: req.params.memberId });
      res.json(members.payments);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createMember(req, res) {
    try {
      const member = await Member.create(req.body);
      res.json(member);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  async addPayment(req, res) {
   

    try {


      const member = await Member.updateOne({ _id: req.params.memberId },{$push :{'payments': req.body} },{upsert:true});
      res.json(member);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  






  async getPayments(req, res) {
    try{
      const payments = await Payment.find();
      res.json(payments);
    }
   catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
    
    
  },
  


}
