import {productsService} from '../../services/productsService'

export function loadProducts() {
    return async dispatch => {
    //    getState().productModule
      try {
        const products = await productsService.query()
        dispatch({ type: 'SET_PRODUCTS', products })
      } catch (err) {
        console.log(err);
      }
    }
  }

