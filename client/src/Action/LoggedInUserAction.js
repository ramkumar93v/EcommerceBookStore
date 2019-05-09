import axios from 'axios';
import * as LoggedInUserConsts from '../ActionConsts/LoggedInUserConst'

   export const getCurrentUser = () => async dispatch=>{

      const data=axios.get(`/api/currentUser`)

       dispatch({ type:LoggedInUserConsts.CURRENT_USER, payload: data})

      }
