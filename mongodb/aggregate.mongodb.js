use("ecommerce");

db.products.aggregate([
    {
        $group:{
            _id: "$category",
            totalProducts: { $sum: 1 },
            averagePrice: { $avg: "$price" }
        }
    }
])