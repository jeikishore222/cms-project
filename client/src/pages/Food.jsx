
import React, { useState } from 'react';
import Dashboard from './DashboardWithStyle';

const foodList = [
  {
    name: "Pizza",
    price: 200,
    img: "https://content.jdmagicbox.com/comp/coimbatore/r6/0422px422.x422.230301183651.e8r6/catalogue/pizza-kadai-hopes-coimbatore-pizza-outlets-xzq5l41lxw.jpg"
  },
  {
    name: "Burger",
    price: 120,
    img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
  },
  {
    name: "Pasta",
    price: 150,
    img: "https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp"
  },
  {
    name: "Sandwich",
    price: 100,
    img: "https://static.toiimg.com/thumb/83740315.cms?width=1200&height=900"
  },
  {
    name: "Fries",
    price: 80,
    img: "https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries.jpg"
  },
  {
    name: "Biryani",
    price: 250,
    img: "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"
  },
];

const Food = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (food) => {
    setCart((prev) => [...prev, food]);
    setTotal((prev) => prev + food.price);
  };

  const handleRemoveFromCart = (index) => {
    setTotal((prev) => prev - cart[index].price);
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Split foodList into chunks of 3
  const chunkedFoodList = [];
  for (let i = 0; i < foodList.length; i += 3) {
    chunkedFoodList.push(foodList.slice(i, i + 3));
  }

  return (
    <div className="flex">
      {/* Dashboard sidebar */}
      <div className="min-w-[260px] mr-8">
        <Dashboard />
      </div>
      {/* Food content */}
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Food Menu</h2>
        <div className="mb-6 flex flex-col gap-6">
          {chunkedFoodList.map((row, rowIdx) => (
            <ul
              key={rowIdx}
              className="flex gap-8 list-none p-0"
              style={{ maxWidth: "100%" }}
            >
              {row.map((food, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-center min-w-[280px] bg-white rounded-2xl shadow-lg p-4"
                >
                  <img
                    src={food.img}
                    alt={food.name}
                    className="w-[250px] h-[180px] object-cover rounded-2xl mb-4"
                  />
                  <div className="font-bold text-2xl mb-2">{food.name}</div>
                  <div className="text-xl mb-3">₹{food.price}</div>
                  <button
                    onClick={() => handleAddToCart(food)}
                    className="px-7 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-2">Cart</h3>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cart.map((item, idx) => (
              <li key={idx} className="text-lg flex items-center gap-4">
                {item.name} - ₹{item.price}
                <button
                  onClick={() => handleRemoveFromCart(idx)}
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 font-bold text-xl">
          Total: ₹{total}
        </div>
      </div>
    </div>
  );
};

export default Food;
