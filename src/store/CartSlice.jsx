import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with quantity 1
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      }
    },
    
    // Remove item from cart
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    
    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.items = state.items.filter(item => item.id !== id);
        } else {
          // Update quantity
          existingItem.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
