var express = require('express');
const EMI = require('emi-calc');
var router = express.Router();

router.get("/", (req, res) => {
  let loanAmount = req.query.loanAmount, numberOfMonths = req.query.numberOfMonths, rateOfInterest = req.query.rateOfInterest, Response = [];
  if (loanAmount && numberOfMonths && rateOfInterest)
    Response = EMI(loanAmount, numberOfMonths, rateOfInterest)
  res.json({ "StatusCode": 200, "Message": "Success", "Response": Response });
  res.end();
});



module.exports = router;
