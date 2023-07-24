const foodItem= [
,
{
    id: 1,
    name: 'Hyderabadi Biryani',
    category : 'biryani',
    rating : 5.0,
    price: 15,
    img: 'images/biryani/Chicken-Biryani-hyd.jpg',
    quantity: 1
},
{
    id: 2,
    name: 'Egg Biryani',
    category : 'biryani',
    rating : 3.5,
    price: 18,
    img: 'images/biryani/egg-biryani.jpeg',
    quantity: 1
},

{
    id: 3,
    name: 'Mutton Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 10,
    img: 'images/biryani/hyd-Mutton-Biryani.jpg',
    quantity: 1
},
{
    id: 4,
    name: 'Kashmiri Biryani',
    category : 'biryani',
    rating : 4.2,
    price: 13,
    img: 'images/biryani/kashmiri.pulao.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Mughlai Biryani',
    category : 'biryani',
    rating : 4.1,
    price: 15,
    img: 'images/biryani/mughlai-biryani.jpg',
    quantity: 1
},
{
    id: 6,
    name: 'Chicken Roast',
    category : 'chicken',
    rating : 4.9,
    price: 11,
    img: 'images/chicken/Chicken_roast.jpg',
    quantity: 1
},
{
    id: 7,
    name: 'Chicken Curry',
    category : 'chicken',
    rating : 4.6,
    price: 10,
    img: 'images/chicken/Chicken-Curry.jpg',
    quantity: 1
},
{
    id: 8,
    name: 'Chicken Do Pyaza',
    category : 'chicken',
    rating : 4.7,
    price: 14,
    img: 'images/chicken/Chicken-do-Pyaza.jpg',
    quantity: 1
},
{
    id: 9,
    name: 'Chicken Masala',
    category : 'chicken',
    rating : 5.0,
    price: 12,
    img: 'images/chicken/Chicken-Masala.jpeg',
    quantity: 1
},
{
    id: 10,
    name: 'Matar Paneer',
    category : 'paneer',
    rating : 4.2,
    price: 15,
    img: 'images/paneer/Matar-Paneer.jpg',
    quantity: 1

},
{
    id: 11,
    name: 'Paneer Butter Masala',
    category : 'paneer',
    rating : 4.5,
    price: 15,
    img: 'images/paneer/paneer-butter-masala.jpg',
    quantity: 1

},
{
    id: 12,
    name: 'Hyderabadi Paneer',
    category : 'paneer',
    rating : 3.8,
    price: 8,
    img: 'images/paneer/Paneer-Hyderabadi.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Paneer Lababdar',
    category : 'paneer',
    rating : 4.3,
    price: 7,
    img: 'images/paneer/paneer-lababdar.jpg',
    quantity: 1
},
{
    id: 14,
    name: 'Shahi Paneer',
    age: '32',
    category : 'paneer',
    rating : 4.2,
    price: 5,
    img: 'images/paneer/shahi-paneer.jpg',
    quantity: 1
},
{
    id: 15,
    name: 'Veg Biryani',
    category : 'vegetable',
    rating : 3.0,
    price: 5,
    img: 'images/vegetable/vegetable-biryani.jpg',
    quantity: 1
},
{
    id: 16,
    name: 'Veg Curry',
    category : 'vegetable',
    rating : 2.1,
    price: 7,
    img: 'images/vegetable/vegetable-curry.jpeg',
    quantity: 1
},
{
    id: 17,
    name: 'Veg Masala',
    category : 'vegetable',
    rating : 1.2,
    price: 4,
    img: 'images/vegetable/vegetable-masala.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Veg Pakora',
    category : 'vegetable',
    rating : 1.0,
    price: 4,
    img: 'images/vegetable/vegetable-pakora.jpg',
    quantity: 1
},
{
    id: 19,
    name: 'Momos',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'images/chinese/cabbage-momos-.jpg',
    quantity: 1
},
{
    id: 20,
    name: 'Chicken Manchurian',
    category : 'chinese',
    rating : 4.8,
    price: 7,
    img: 'images/chinese/ChickenManchurian.jpg',
    quantity: 1
},
{
    id: 21,
    name: 'Chili Chicken',
    category : 'chinese',
    rating : 5.0,
    price: 5,
    img: 'images/chinese/Chili-Chicken.jpg',
    quantity: 1
},
{
    id: 22,
    name: 'Chowmein',
    category : 'chinese',
    rating : 3.7,
    price: 16,
    img: 'images/chinese/chowmin.jpg',
    quantity: 1
},
{
    id: 23,
    name: 'Spring Roll',
    category : 'chinese',
    rating : 4.8,
    price: 14,
    img: 'images/chinese/spring-rolls.jpg',
    quantity: 1
},
{
    id: 24,
    name: 'Szechuan Chicken',
    category : 'chinese',
    rating : 4.7,
    price: 10,
    img: 'images/chinese/szechuan-chicken.jpg',
    quantity: 1
},
{
    id: 25,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 3.9,
    price: 8,
    img: 'images/chinese/veg-fried-rice.jpg',
    quantity: 1
},
{
    id: 26,
    name: 'Idli',
    category : 'south indian',
    rating : 4.3,
    price: 20,
    img: 'images/south indian/idli-with-rice-flour.jpg',
    quantity: 1
},
{
    id: 27,
    name: 'Masala Dosa',
    category : 'south indian',
    rating : 4.5,
    price: 12,
    img: 'images/south indian/masala-dosa.jpg',
    quantity: 1
},
{
    id: 28,
    name: 'Onion Uttapam',
    category : 'south indian',
    rating : 2.0,
    price: 15,
    img: 'images/south indian/onion-uttapam.jpg',
    quantity: 1
},
{
    id: 29,
    name: 'Plain Dosa',
    category : 'south indian',
    rating : 3.9,
    price: 40,
    img: 'images/south indian/plain-dosa.jpeg',
    quantity: 1
},
{
    id: 30,
    name: 'Sambhar Vada',
    category : 'south indian',
    rating : 4.0,
    price: 34,
    img: 'images/south indian/sambhar-vada.jpg',
    quantity: 1
},
]

export {foodItem};