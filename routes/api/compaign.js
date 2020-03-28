const { Compaign, validate } = require("../../models/Compaign");
const {Area}= require("../../models/Area")
const express = require("express");
const router = express.Router();
const verifyToken = require("../../utils/verifyJwtToken");
const jwt = require("jsonwebtoken");

router.get("/all", async (req, res)=>{
  
  var id= req.query.id

  console.log(id)
  Compaign.find({'postedBy':id}, (err, responce) =>{
    if(err){
        res.status(400).json(err)
    }
    res.json(responce)
})
})





     

  //const _id = req.params.id;

  router.get("/alll", function(req,res) {
    Compaign.
  find({}).
  populate().
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is',story);
    // prints "The author is Ian Fleming"
  });
    
    
    
 
  });
  



       

router.post("/create",  async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let compaign = await Compaign.findOne({ url: req.body.url });
  console.log("compaign", compaign);
  if (compaign) { 
    return res.status(400).send({ message: "That compaign already exisits!" });
  } else { 
  //   return db.Product.findOneAndUpdate({ _id: req.params.id }, {$push: {reviews: dbReview._id}}, { new: true });
  // })
  // .then(function(dbProduct) {
  //   // If we were able to successfully update a Product, send it back to the client
  //   res.json(dbProduct);
  // })
  // .catch(function(err) {
  //   // If an error occurred, send it to the client
  //   res.json(err);
  // });
    console.log(req.query.id)
  const newCompaign = new Compaign({
    price: req.body.price,
    url: req.body.url,
    //price: req.body.price,
     postedBy:req.body.postedBy ,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
   area:req.body.area,
    numberOfCars: req.body.numberOfCars,
    CompaignName:req.body.numberOfCars,
    timage:req.body.timage 
  });

  try {
    const compaign = await newCompaign.save()
  return  res.status(200).send(res.send({ data: compaign }));
} catch (error) {
    res.status(400).send(res.json({ message: error }));
}


// var id= "5e7b103abee8d30024b68e1a";

//   Area.findById(id)        
//   .lean().exec(function (err, results) {
//   if (err) return console.error(err)
//   try { 
//       console.log(results)
//       var area=results ;
//       newCompaign = new Compaign({
//         price: req.body.price,
//         url: req.body.url,
//         //price: req.body.price,
//         // postedBy: req.customer.id,
//         startDate: req.body.startDate,
//         endDate: req.body.endDate,
//        area:new Area(area),
//         numberOfCars: req.body.numberOfCars
//       });
    
//       newCompaign.save();
//       //res.send("ok");
   
//       return res.json({
//         message: "compaign created...",
//         newCompaign,


//       });
           
//   } catch (error) { 
//       console.log("errror getting results")
//       console.log(error)
//   } }
//   )   




      
    


    // newCompaign = new Compaign({
    //   price: req.body.price,
    //   url: req.body.url,
    //   //price: req.body.price,
    //   // postedBy: req.customer.id,
    //   startDate: req.body.startDate,
    //   endDate: req.body.endDate,
    //  area:new Area( {"_id": "5e7b103abee8d30024b68e1a", "name": 'sampleareaa\n'," __v": "0" }),
    //   numberOfCars: req.body.numberOfCars
    // });

    //console.log(newCompaign);

    //jwt.verify(req.token, "secretkey", (err, authData) => {
      //if (err) {
        //res.sendStatus(403);
      //} else {
      //  return res.json({
      //     message: "compaign created...",
      //     newCompaign,


      //   });
      //}
    //});
    // await newCompaign.save();
    // res.send("ok");
  }
});

module.exports = router;
