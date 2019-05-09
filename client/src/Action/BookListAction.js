import axios from 'axios';
import * as BookConsts from '../ActionConsts/BookListActionConst'

   export const getBookListbyCategory = () => async dispatch=>{

      const data=axios.get(`/BookCategories`)

       dispatch({ type:BookConsts.BOOK_LIST, payload: data})

      }
