import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Plant data with at least 6 plants per category
  const plants = [
    // Indoor Plants
    { id: 1, name: 'Monstera Deliciosa', price: 29.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400' },
    { id: 2, name: 'Snake Plant', price: 19.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    { id: 3, name: 'Pothos Golden', price: 14.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    { id: 4, name: 'ZZ Plant', price: 24.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400' },
    { id: 5, name: 'Peace Lily', price: 22.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    { id: 6, name: 'Rubber Plant', price: 27.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    { id: 7, name: 'Fiddle Leaf Fig', price: 34.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400' },
    { id: 8, name: 'Spider Plant', price: 12.99, category: 'indoor', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    
    // Succulents
    { id: 9, name: 'Echeveria', price: 8.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    { id: 10, name: 'Aloe Vera', price: 11.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400' },
    { id: 11, name: 'Jade Plant', price: 15.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    { id: 12, name: 'Hens and Chicks', price: 9.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    { id: 13, name: 'String of Pearls', price: 16.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400' },
    { id: 14, name: 'Burro\'s Tail', price: 13.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    { id: 15, name: 'Haworthia', price: 10.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    { id: 16, name: 'Lithops', price: 12.99, category: 'succulents', image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400' },
    
    // Flowering Plants
    { id: 17, name: 'African Violet', price: 18.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    { id: 18, name: 'Orchid', price: 32.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    { id: 19, name: 'Begonia', price: 16.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400' },
    { id: 20, name: 'Geranium', price: 14.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    { id: 21, name: 'Kalanchoe', price: 19.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    { id: 22, name: 'Cyclamen', price: 21.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400' },
    { id: 23, name: 'Impatiens', price: 13.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1593691509544-8ce5e5e4b8a0?w=400' },
    { id: 24, name: 'Fuchsia', price: 17.99, category: 'flowering', image: 'https://images.unsplash.com/photo-1519336056116-9e35d5a4e5e6?w=400' },
  ];

  const categories = [
    { id: 'all', name: 'All Plants' },
    { id: 'indoor', name: 'Indoor Plants' },
    { id: 'succulents', name: 'Succulents' },
    { id: 'flowering', name: 'Flowering Plants' },
  ];

  const filteredPlants = selectedCategory === 'all' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Our Plant Collection</h1>
        <p>Discover beautiful plants for your home</p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="plants-grid">
        {filteredPlants.map(plant => {
          const inCart = isInCart(plant.id);
          return (
            <div key={plant.id} className="plant-card">
              <div className="plant-image">
                <img src={plant.image} alt={plant.name} />
              </div>
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
                <button
                  className={`add-to-cart-btn ${inCart ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={inCart}
                >
                  {inCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
