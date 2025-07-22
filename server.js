
const express = require('express');
const app = express();




const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}

app.get('/', (req, res) => {
  res.render('home.ejs', { restaurant: RESTAURANT });
})

app.get('/menu', (req, res) => {
  res.locals.menu = RESTAURANT.menu;
  res.render('menu.ejs', { menu: RESTAURANT.menu })
})

app.get('/menu/:category', (req, res) => {
  const foodCategory = req.params.category;
  console.log(foodCategory)
  let menuItems = RESTAURANT.menu.filter((menuItem) => {
    return menuItem.category === foodCategory;
  })
  console.log(menuItems)

  // console.log(RESTAURANT.menu[4].category)
  res.render('category.ejs', {
    category: foodCategory,
    items: menuItems,
  });

  // take in text from address bar for category'
  // loop through the menu to see which category matches address bar
  // send the matching menu items into category.ejs view

  // res.locals.category = RESTAURANT.menu[1].category;
  // res.render('menu/:category.ejs')
})

app.listen(3000, () => {
  console.log("I am listening at port 3000")
})
