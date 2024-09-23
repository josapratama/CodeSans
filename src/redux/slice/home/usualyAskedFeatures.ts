import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IInitialState {
    isOpen: {[id: string | number]: boolean}
}

const initialState: IInitialState = {
    isOpen: {}
}
    
const usualyAskedFeatures = createSlice({
    name: "Usualy asked ",
    initialState,
    reducers: {
        handleIsOpen: (state, action: PayloadAction<string | number>) => {
            const id = action.payload
            state.isOpen[id] = !state.isOpen[id]
        }
    }
})

export const {handleIsOpen} = usualyAskedFeatures.actions
export default usualyAskedFeatures.reducer