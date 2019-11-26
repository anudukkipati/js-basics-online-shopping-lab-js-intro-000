var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
   var price;
   price = Math.floor(Math.random() * 101) + 1;
   cart.push(Object.assign({itemName:item, itemPrice: price}));
   return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
        return "Your shopping cart is empty.";
     } else {
        var newCart = [];
        for (let i = 0; i < cart. length; i++) {
        newCart.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`);
       }
     }
        var result = `In your cart, you have `;
          if(cart.length === 1){
            result +=`${newCart.join()}.`;
          } else if(newCart.length === 2){
              result +=`${newCart.join(", and ")}.`;
          } else if (newCart.length > 2){
            var lastItem = newCart.pop();
            var firstFew = newCart;
            result += `${firstFew.join(", ")}, and ${lastItem}.`;
          }
        return result;
}

function total() {
  // write your code here
  let currentTotal = 0;
 for (let i = 0; i < cart.length; i++) {
   currentTotal += cart[i]["itemPrice"];
 }
 return currentTotal;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if(item === cart[i]["itemName"]) {
      cart.splice(cart.indexOf(cart[i]), 1);
    } else  {
      console.log(`That item is not in your cart.`);
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
