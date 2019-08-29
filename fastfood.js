/* Fast Food Ordering*/

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
      this.orders.push(meal)
    },
    getAllOrders: function () {
     return this.orders;
   }
}

const chickenComboMeal = {
  sandwichType:'chicken',
  fries: true,
  drinkSize: 'medium'
}

const beefComboMeal = {
  sandwichType:'beef',
  fries: true,
  drinkSize: 'large'
}

const fishComboMeal = {
  sandwichType:'fish',
  fries: true,
  drinkSize: 'small'
}


// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(beefComboMeal);
restaurant.placeOrder(fishComboMeal);

// Invoke the function to return the list of all orders
restaurant.getAllOrders();

// Output all orders to the console using console.table()
console.table(restaurant.getAllOrders())


