import axios from 'axios';
import * as AddressConst from '../ActionConsts/AddressConst'

   export const addNewAddress = (address) => async dispatch=>{
debugger;
      const addressNew=axios.post(`/address/add`,address)

       dispatch({ type:AddressConst.NEW_ADDRESS, payload: addressNew})

  }

  export const getAddress=()=> async dispatch=>{

    const data=axios.get(`/address/getAddress`)

     dispatch({ type:AddressConst.GET_ADDRESS, payload: data})

  }
