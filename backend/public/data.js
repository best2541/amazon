const { static } = require("express")

const data = {
    products:[
       
        {
            _id:'1',
            name:'Nike Slim Shrit',
            category:'Shirt',
            image:'/images/p1.jpg',
            price:100,
            countInStock:0,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            _id:'2',
            name:'adidas Slim Shrit',
            category:'Shirt',
            image:'/images/p2.jpg',
            price:120,
            countInStock:104,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            _id:'3',
            name:'lacosta Slim Shrit',
            category:'Shirt',
            image:'/images/p3.jpg',
            price:1020,
            countInStock:0,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            _id:'4',
            name:'Nike Slim pant',
            category:'pant',
            image:'/images/p4.jpg',
            price:130,
            countInStock:10,
            brand:'Nike',
            rating:3,
            numReviews:10,
            description:'high quality product',
        },
        {
            _id:'5',
            name:'puma Slim pant',
            category:'pant',
            image:'/images/p5.jpg',
            price:120,
            countInStock:15,
            brand:'Nike',
            rating:1,
            numReviews:10,
            description:'high quality product',
        },
        {
            _id:'6',
            name:'6 Slim Shrit',
            category:'Shirt',
            image:'/images/p6.jpg',
            price:120,
            countInStock:1,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
    ]
}
module.exports = data