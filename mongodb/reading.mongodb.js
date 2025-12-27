use("ecommerce");

// db.products.find({
//     name:"Laptop"
// });


db.products.find({
    category:"Electronics"
});

db.products.find({
    price: { $lt: 500 }
});

//$lte, $gt, $gte, $ne, $in, $nin, $and, $or

// db.products.find({
//     $or:[
//         {
//             price: { $lt: 200 }
//         },
//         {
//             ratings: { $gt: 4.6}
//         }
//     ]
// })



// db.products.find({}, {
//     name: 1,
//     price: 1,
//     _id: 0
// });

db.products.find().limit(1).skip(1);