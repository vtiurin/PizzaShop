products = [
  {
    title: 'Hawaiian',
    description: 'Hawaiian pizza is a pizza topped with tomato sauce, cheese,' \
      ' pineapple, and back bacon or ham. Some versions may include peppers,' \
      ', mushrooms bacon or pepperoni.',
    price: 35,
    size: 40,
    is_spicy: false,
    is_veg: false,
    is_best_offer: true,
    path_to_image: '/images/hawaiian.jpeg'
  },
  {
    title: 'Peperoni',
    description: 'Pepperoni is an American variety of salami, made from cured' \
      'pork and beef mixed together and seasoned with paprika or other chili' \
      'pepper.',
    price: 30,
    size: 40,
    is_spicy: true,
    is_veg: false,
    is_best_offer: false,
    path_to_image: '/images/peperoni.jpeg'
  },
  {
    title: 'Vegetarian',
    description: 'The best and easiest vegan pizza with a garlic-herb crust,' \
      'simple tomato sauce, loads of sauteed veggies, and vegan parmesan cheese!',
    price: 40,
    size: 40,
    is_spicy: false,
    is_veg: true,
    is_best_offer: false,
    path_to_image: '/images/veg.jpeg'
  }
]

products.each { |p| Product.create(p) }
