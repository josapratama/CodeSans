import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  isOpen: { [id: string | number]: boolean };
}

const initialState: IInitialState = {
  isOpen: {},
};

const questionFeatures = createSlice({
  name: "Question Features",
  initialState,
  reducers: {
    handleIsOpen: (state, action: PayloadAction<string | number>) => {
      const id = action.payload;

      state.isOpen[id] = !state.isOpen[id];
    },
  },
});

export const {handleIsOpen} = questionFeatures.actions
export default questionFeatures.reducer