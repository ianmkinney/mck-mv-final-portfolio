import data from './products.json'
import { useState } from 'react'
import { Product } from './Product'
import ProductDetails from './ProductDetails'

function Home() {

  const [cart, setCart] = useState(data.cart)

  const addToCart = product => {
    if(cart.includes(product)) {
      var filtered = cart.filter(function(value, index, arr) {
        return value !== product;
      });
      setCart(filtered)
      product.addedToCart = false;
    } else {
      setCart([...cart, product])
      product.addedToCart = true;
    }
  }
  
  return (
    <div className="App" class="center">
      <div class="cart">Number of items in cart: {cart.length}</div>
      {data.products.map(product => <Product product={product} addToCart={addToCart} />)}
    </div>
  );
}

export default Home;