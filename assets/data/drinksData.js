let J_Ingredient = [
  {
    id: '1',
    name: 'All-1',
    image: require('../images/Drinks/Juice/ji-1.jpg'),
  },
  {
    id: '2',
    name: 'All-2',
    image: require('../images/Drinks/Juice/ji-2.jpg'),
  },
  {
    id: '3',
    name: 'ALL-3',
    image: require('../images/Drinks/Juice/ji-3.jpg'),
  },
  {
    id: '4',
    name: 'All-4',
    image: require('../images/Drinks/Juice/ji-4.jpg'),
  },
]

let T_Ingredient = [
  {
    id: '1',
    name: 'Milk',
    image: require('../images/Drinks/Tea/ti-1.jpg'),
  },
  {
    id: '2',
    name: 'Tea-Leaf',
    image: require('../images/Drinks/Tea/ti-2.jpg'),
  },
  {
    id: '3',
    name: 'Water',
    image: require('../images/Drinks/Tea/ti-3.jpg'),
  },
  {
    id: '4',
    name: 'Ginger',
    image: require('../images/Drinks/Tea/ti-4.png'),
  },
]

let C_Ingredient = [
  {
    id: '1',
    name: 'Milk & ACAI',
    image: require('../images/Drinks/Coffee/ci-1.jpg'),
  },
  {
    id: '2',
    name: 'All-2',
    image: require('../images/Drinks/Coffee/ci-2.jpg'),
  },
  {
    id: '3',
    name: 'All-3',
    image: require('../images/Drinks/Coffee/ci-3.jpg'),
  },
]

const drinksData = [
  {
    id: '1',
    image: require('../images/Drinks/Juice/juice.png'),
    title: 'Juice',
    weight: '500 ml',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: J_Ingredient
  },
  {
    id: '2',
    image: require('../images/Drinks/Tea/tea.png'),
    title: 'Tea',
    weight: '500 ,l',
    rating: '4.0',
    price: 5.99,
    sizeName: 'Small',
    sizeNumber: 10,
    crust: 'Thick Crust',
    deliveryTime: 15,
    ingredients: T_Ingredient
  },
  {
    id: '3',
    image: require('../images/Drinks/Coffee/coffee.png'),
    title: 'Coffee',
    weight: '800 ml',
    rating: '5.0',
    price: 8.99,
    sizeName: 'Large',
    sizeNumber: 18,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: C_Ingredient
  },
];

export default drinksData;
