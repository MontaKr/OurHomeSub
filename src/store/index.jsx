import create from 'zustand';

export const useStore = create((set) => ({

  cartItems: [],

  addToCart: (item) => set((state) => {
    const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = state.cartItems.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return { cartItems: updatedCartItems };
    } else {
      return { cartItems: [...state.cartItems, { ...item, quantity: 1, isChecked: true }] };
    }
  }),

  removeFromCart: (index) => set((state) => ({
    cartItems: state.cartItems.filter((_, i) => i !== index)
  })),

  increaseQuantity: (index) => set((state) => ({
    cartItems: state.cartItems.map((item, i) => 
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    ),
  })),

  decreaseQuantity: (index) => set((state) => ({
    cartItems: state.cartItems.map((item, i) => 
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ),
  })),

  toggleItemChecked: (index) => set((state) => ({
    cartItems: state.cartItems.map((item, i) => 
      i === index ? { ...item, isChecked: !item.isChecked } : item
    ),
  })),
}));
