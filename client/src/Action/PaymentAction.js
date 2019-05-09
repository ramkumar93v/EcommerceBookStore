import axios from 'axios';
import * as PaymentConst from '../ActionConsts/PaymentActionConst'

   export const paymentAction = () =>  dispatch=>{


       dispatch({ type:PaymentConst.PAYMENT, payload: ''})

      }
