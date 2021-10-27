import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hotels: [],
    bookings: [],
}

const GlobalRedux = createSlice({
    name: "sliceName",
    initialState,
    reducers: {
        addHotel:(state, {payload}) => {
            state.hotels = payload
        },
        addBookings:(state, {payload}) => {
            const checker = state.bookings.findIndex((el) => el.id === payload.id)
            if(checker >= 0){
                state.bookings[checker].QTY += 1;
            }
            const addValue = {...payload, QTY: 1}
            state.bookings.push(addValue)
        },
        changeDays:(state, {payload}) => {
            const checker = state.bookings.findIndex((el) => el.id === payload.id)
            const daysValue = state.bookings[checker].QTY;
            if(checker > 1){
                daysValue -= 1;
            }else if(checker === 1)
            state.bookings = state.bookings.filter((fl) => fl.id !== payload.id)
            const addValue = {...payload, QTY: 1}
            state.bookings.push(addValue)
        },
        reduceDay:(state,{...payload}) => {
            state.bookings = state.bookings.filter((fl) => fl.id !== payload.id) 
        },
        reduceDay:(state,{...payload}) => {
            state.bookings = state.bookings.filter((fl) => fl.id !== payload.id) 
        },
        totalState: (state, { payload }) => {
            const { totalCost, totalDays } = state.bookings.reduce(
              (totalPrice, allBookings) => {
                const { price, QTY } = allBookings;
      
                const mainCost = price * QTY;
      
                totalPrice.totalDays += QTY;
                totalPrice.totalCost += mainCost;
      
                return totalPrice;
              },
              {
                totalCost: 0,
                totalDays: 0,
              },
            );
            state.tatalRoomCost = totalCost;
            state.totalRoomDays = totalDays;
          }
    }
});

export const { addHotel, addBookings, reduceDay, totalState} = GlobalRedux.actions
export default GlobalRedux.reducer