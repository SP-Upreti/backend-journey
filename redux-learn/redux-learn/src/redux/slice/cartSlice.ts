import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
    reducers: {
        addItem:(state) => {
            state.value += 1;
            toast.success("Item added to cart!", {
                description: `You have ${state.value} items in your cart.`,
            });
        },
        removeItem:(state) => {
            state.value !== 0 && (state.value -= 1);
            toast.error("Item removed from cart!", {
                description: `You have ${state.value} items in your cart.`,
            });
        },
        clearAll:(state) => {
            state.value = 0;
            toast("All items cleared from cart!", {
                description: `Your cart is now empty.`,
            });
        }
    },
});

export const { addItem, removeItem, clearAll } = cartSlice.actions;
export default cartSlice.reducer;