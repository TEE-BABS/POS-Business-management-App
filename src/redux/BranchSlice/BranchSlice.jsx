import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shop1 : [
     { 
      id: 1,
      BranchName : "Bodija",
      BranchAddress : "Bodija Market",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop2 : [
     { 
      id: 2,
      BranchName : "Challege",
      BranchAddress : "Challenge Market",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop3 : [
     { 
      id: 3,
      BranchName : "Dugbe",
      BranchAddress : "Dugbe Market",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop4 : [
     { 
      id: 4,
      BranchName : "UI Gate",
      BranchAddress : "UI Junction",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop5 : [
     { 
      id: 5,
      BranchName : "Mokola",
      BranchAddress : "Mokola Market",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop6 : [
     { 
      id: 6,
      BranchName : "Ring Road",
      BranchAddress : "Ring Road Junction",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop7 : [
     { 
      id: 7,
      BranchName : "Sango",
      BranchAddress : "Sango Market",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop8 : [
     { 
      id: 8,
      BranchName : "Iwo Road",
      BranchAddress : "Iwo Market",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop9 : [
     { 
      id: 9,
      BranchName : "Apata",
      BranchAddress : "Apata Market",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ],

    shop10 : [
     { 
      id: 10,
      BranchName : "Orita Mefa",
      BranchAddress : "Orita Mefa Junction",
      AgentName : "Enter Agent Name",
      Address : "Enter Agent Address",
      PhoneNumber : "Enter Agent phone Number"
     }
  ]
}
const BranchSlice = createSlice({
name : "Branch Details",
initialState,
reducers : {}



})





export const { } = BranchSlice.actions;
export default BranchSlice.reducer;