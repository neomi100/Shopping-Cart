import { useSelector, useDispatch } from "react-redux";
import CartList from "../cmps/CartList";
import {useEffect } from "react";
import {productsService} from '../services/productsService'
import { setCartToShow } from "../store/cartStore/cartAction";
export default function MyCart() {
  const { cartToShow, cart } = useSelector((state) => state.cartModule);
  // const blabla = useSelector((state) => console.log('state', state));
  const dispatch = useDispatch();
  // const {productsIds} = cart
useEffect(()=>{
console.log('productsIds', cart)
  getProducts()
},[cart])

const getProducts= async ()=>{
     if (cart.length) {
      const productsToShow = await productsService.getProductsByIds(cart)
      dispatch(setCartToShow(productsToShow))
}}

  if (!cart.length)
    return (
      <div className="empty-cart">
        ARE YOU KIDDING ME? WHY AM I STILL EMPTY?
      </div>
    );
  return (
    <div>
      <div className="page">
        <CartList products={cartToShow} />
      </div>
    </div>
  );
}

// useEffect(()=>{

//   getProducts()
// },[])

// const getProducts= async ()=>{
//    if (products.length) {
//     //  console.log('cart', cart)
//    const productsToShow = await productsService.getProductsByIds(products)
//     //  console.log('cartToShoew', productsToShow)
//     //  const productsToShow =  products.map(p=>{
//     //    ...p,
//     //    amonut: cart.find(prod=>prod._id === p._id).amount
//     //  })
//      dispatch(setCartToShow(productsToShow))
//   //  let products = await productsService.getProductsByIds(cart)
//   //    console.log('cartToShoew', products)
//   //   //  const productsToShow =  products.map(p=>{
//   //   //    ...p,
//   //   //    amonut: cart.find(prod=>prod._id === p._id).amount
//   //   //  })
//   //    dispatch(setCartToShow(productsToShow))
//   console.log(productsToShow, 'geett products');
//    }
//  }

// const { loggedinUser } = useSelector((state) => state.userModule);
// console.log('cartToShow, cart', cartToShow, cart.productsIds)
// if (loggedinUser&&loggedinUser.productsInCart.length === 0)
