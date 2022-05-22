let Ingredient = [
  {
    id: '1',
    name: 'All-1',
    image: require('../images/Pizza/pi-1.jpg'),
  },
  {
    id: '2',
    name: 'All-2',
    image: require('../images/Pizza/pi-2.jpg'),
  },
  {
    id: '3',
    name: 'Spicy',
    image: require('../images/Pizza/pi-3.jpg'),
  },
  {
    id: '4',
    name: 'Mixure',
    image: require('../images/Pizza/pi-4.jpg'),
  },
]

const pizzaData = [
  {
    id: '1',
    image: require('../images/Pizza/pizza-1.png'),
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: 3.99,
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: Ingredient
  },
  {
    id: '2',
    image: require('../images/Pizza/pizza-2.png'),
    title: 'Vegetarian Pizza',
    weight: '450 gr',
    rating: '4.0',
    price: 5.99,
    sizeName: 'Small',
    sizeNumber: 10,
    crust: 'Thick Crust',
    deliveryTime: 40,
    ingredients: Ingredient
  },
  {
    id: '3',
    image: require('../images/Pizza/pizza-3.png'),
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Large',
    sizeNumber: 18,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: Ingredient
  },
  {
    id: '4',
    image: require('../images/Pizza/pizza-4.png'),
    title: 'Spicy Pizza',
    weight: '770 gr',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Large',
    sizeNumber: 20,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: Ingredient
  },
];

export default pizzaData;
