const Insta = require('instamojo-nodejs');
const key = require('../../config/key');
Insta.setKeys(key.privateAPIKey, key.privateAuthToken);
Insta.isSandboxMode(true);




let BookCategories ={


  makePayment : (req,res) => {

    var data = new Insta.PaymentData();

    data.purpose = "Test";            // REQUIRED
    data.amount = 9;                  // REQUIRED
    data.setRedirectUrl(`http://localhost:4000/api/payment/callback/usedId=1`);

    Insta.createPayment(data, function(error, response) {
      if (error) {
        // some error
      } else {
        // Payment redirection link at response.payment_request.longurl

        const resData =JSON.parse(response)

       res.send(resData.payment_request.longurl)
      }
    });

  }

}

module.exports  = BookCategories
