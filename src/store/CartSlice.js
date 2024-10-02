import { createSlice } from '@reduxjs/toolkit';

const initialState=[];

const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state ,action){
            
            const product = action.payload;
      const existItem = state.find((x) => x.id === product.id);
            
      if (existItem) {
   
        existItem.quantity += 1;
 
      } else {
     
        state.push({ ...product, quantity: 1 });
        
      }
  
        },
        remove(state,action) {
        
            const productId = action.payload;
      const item = state.find((x) => x.id === productId);

      if (item) {
        if (item.quantity > 1) {
       
          item.quantity -= 1;
        } else {
          
        return state.filter(item=>item.id !== action.payload);
        }
      }
        },
       removeproduct(state,action) {
        
        return state.filter(item=>item.id !== action.payload);
       }
    },
})
export const selectTotalPrice = (state) => {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
};


export const {add,remove,removeproduct}=cartSlice.actions;
export default cartSlice.reducer;