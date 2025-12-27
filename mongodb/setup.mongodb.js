use("ecommerce");

db.dropDatabase();

db.products.insertMany([
    {
        name:"Laptop",
        price:1200,
        category:"Electronics",
        stock:30,
        tags:["computer", "portable", "technology"],
        ratings:4.5,
        createdAt:new Date()
    },
    {
        name:"Smartphone",
        price:800,
        category:"Electronics",
        stock:50,
        tags:["phone", "mobile", "technology"],
        ratings:4.7,
        createdAt:new Date()
    },
    {
        name:"Headphones",
        price:150,
        category:"Electronics",
        stock:100,
        tags:["audio", "music", "technology"],
        ratings:4.3,
        createdAt:new Date()
    }
]);


db.contacts.insertMany([
    {
        firstName:"John",
        lastName:"Doe",
        email:"john.doe@example.com"
    },
    {
        firstName:"Jane",
        lastName:"Smith",
        email:"jane.smith@example.com"
    }
]);