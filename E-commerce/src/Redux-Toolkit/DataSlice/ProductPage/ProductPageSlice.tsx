import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Product details
  id: "mens-stripe-shirt-123",
  name: "Men's Stripe Shirt",
  price: 99.0,
  originalPrice: 150.0,
  rating: 4, // out of 5
  reviewCount: 21,
  description:
    "Beautifully tailored men's stripe shirt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et consectetur semper vitae enim duis.",
  images: [
    "https://example.com/images/mens-stripe-shirt/main.jpg",
    "https://example.com/images/mens-stripe-shirt/thumb1.jpg",
    "https://example.com/images/mens-stripe-shirt/thumb2.jpg",
    "https://example.com/images/mens-stripe-shirt/thumb3.jpg",
    "https://example.com/images/mens-stripe-shirt/thumb4.jpg",
    "https://example.com/images/mens-stripe-shirt/thumb5.jpg",
  ],

  // Product options (based on the image)
  size: "M",
  availableSizes: ["S", "M", "L", "XL"],
  quantity: 1,

  // Additional information sections
  information: {
    fit: "Regular fit",
    sleeve: "Short sleeve",
    pockets: "Chest patch pocket",
    model: '6"1 in Wearing Size M',
  },
  fabric: "100% Cotton",

  // You may also like & Recently viewed products
  youMayAlsoLike: [
    {
      id: "related-product-1",
      name: "Product 1",
      price: 50.0,
      imageUrl: "https://example.com/images/related-product-1.jpg",
    },
    {
      id: "related-product-2",
      name: "Product 2",
      price: 65.0,
      imageUrl: "https://example.com/images/related-product-2.jpg",
    },
    {
      id: "related-product-3",
      name: "Product 3",
      price: 75.0,
      imageUrl: "https://example.com/images/related-product-3.jpg",
    },
  ],
  recentlyViewed: [
    {
      id: "viewed-product-1",
      name: "Product 1",
      price: 50.0,
      imageUrl: "https://example.com/images/viewed-product-1.jpg",
    },
    {
      id: "viewed-product-2",
      name: "Product 2",
      price: 65.0,
      imageUrl: "https://example.com/images/viewed-product-2.jpg",
    },
    {
      id: "viewed-product-3",
      name: "Product 3",
      price: 75.0,
      imageUrl: "https://example.com/images/viewed-product-3.jpg",
    },
    {
      id: "viewed-product-4",
      name: "Product 4",
      price: 90.0,
      imageUrl: "https://example.com/images/viewed-product-4.jpg",
    },
  ],

  // UI state
  loading: false,
  error: null,
};

const productPageSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    // Action to set a new size
    setSize: (state, action) => {
      state.size = action.payload;
    },

    // Action to increase the quantity
    incrementQuantity: (state) => {
      state.quantity += 1;
    },

    // Action to decrease the quantity, ensuring it doesn't go below 1
    decrementQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },

    // Action to set a specific quantity
    setQuantity: (state, action) => {
      const newQuantity = parseInt(action.payload, 10);
      if (!isNaN(newQuantity) && newQuantity >= 1) {
        state.quantity = newQuantity;
      }
    },

    // Action to reset the state for a new product, useful if you're fetching data dynamically
    resetProductState: (state) => {
      // You might want to keep some of the UI state, but reset product-specific info
      return { ...initialState, loading: false, error: null };
    },

    // Example of a thunk-like action for fetching product details
    // This is more complex and would typically be handled by createAsyncThunk,
    // but this shows the basic state transitions.
    fetchProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      Object.assign(state, action.payload);
    },
    fetchProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setSize,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  resetProductState,
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure,
} = productPageSlice.actions;

const productPageReducer = productPageSlice.reducer;
export default productPageReducer;
