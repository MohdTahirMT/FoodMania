let Ingredient = [
  {
    id: '1',
    name: 'All',
    image: require('../images/Burger/bi-1.png'),
  },
  {
    id: '3',
    name: 'Spicy',
    image: require('../images/Burger/bi-3.png'),
  },
  {
    id: '4',
    name: 'Mixure',
    image: require('../images/Burger/bi-2.png'),
  },
]

const burgerData = [
  {
    id: '1',
    image: require('../images/Burger/burger-1.png'),
    title: 'Special Burger',
    weight: '900 gr',
    rating: '5.0',
    price: 17.99,
    sizeName: 'Extra Large',
    sizeNumber: 25,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: Ingredient
  },
  {
    id: '2',
    image: require('../images/Burger/burger-2.png'),
    title: 'Spicy Burger',
    weight: '850 gr',
    rating: '4.0',
    price: 14.99,
    sizeName: 'Large',
    sizeNumber: 22,
    crust: 'Thick Crust',
    deliveryTime: 30,
    ingredients: Ingredient
  },
  {
    id: '3',
    image: require('../images/Burger/burger-3.png'),
    title: 'Sweet Burger',
    weight: '800 gr',
    rating: '5.0',
    price: 11.99,
    sizeName: 'Medium',
    sizeNumber: 18,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: Ingredient
  },
  {
    id: '4',
    image: require('../images/Burger/burger-4.png'),
    title: 'Simple Burger',
    weight: '770 gr',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Small',
    sizeNumber: 15,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: Ingredient
  },
];

export default burgerData;
