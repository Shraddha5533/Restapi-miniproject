import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
