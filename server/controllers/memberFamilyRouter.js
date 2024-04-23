const MemberFamily  = require('./../models/memberFamily');


module.exports = {
    async getMemberFamilies(req, res) {
     
        const memberFamily = await MemberFamily.find();
        res.json(memberFamily);
      
      
    },
    
    
    async getSingleMemberFamily(req, res) {
      try {
        const memberFamily = await this.MemberFamily.findOne({ _id: req.params.memberFamilysId });
        res.json(memberFamily);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async createMemberFamily(req, res) {
      try {
        const memberFamily = await MemberFamily.create(req.body);
        res.json(memberFamily);
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    }   
  
  
  }
  