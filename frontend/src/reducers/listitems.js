import { createSlice } from '@reduxjs/toolkit';

const listitems = createSlice({
    name: 'listitems',
    initialState: {
        items: [],
        errors: null
    },
    reducers: {
        setListitems: (store, action) => {
            store.items = action.payload;
        },
        setErrors: (store, action) => {
            store.errors = action.payload;
        }
    }
});

export default listitems;