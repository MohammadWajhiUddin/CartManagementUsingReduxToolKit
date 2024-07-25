import Navbar from '../Navbar';
import { useSelector,useDispatch } from 'react-redux';
import {removeSingleProductToCart,removeAllProductFromCart,addNewProductToCart,decreaseQty} from '../../Store/Slices/AddProductSlice'
const CartData = () => {

    const dispatch = useDispatch();
const cart = useSelector((state)=>state.ProductSliceInStore.ProductArray)


    const ShowProducts = () => {
        return (
            <>

                {cart.map((product) => {
                    return (
                        <div className="card mb-3" key={product.id}>
                            <div className="row g-2">
                                <div className="col-md-4 p-2">
                                    <img src={product.image} className="img-fluid rounded-start" width="250px" alt="sdf" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <h5>Price: $ {product.price}</h5>
                                        <div className="qty-wrapper d-flex flex-row align-items-center gap-2 my-3">
                                            <button className="btn btn-outline-dark" onClick={() => dispatch(decreaseQty(product))}>-</button>
                                            <span className="fw-bolder">{product.qty}</span>
                                            <button className="btn btn-outline-dark" onClick={() => dispatch(addNewProductToCart(product))}>+</button>

                                           
                                        </div>
                                            <button className="btn btn-outline-dark" onClick={() => dispatch(removeSingleProductToCart(product))}>Remove</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }


    return (
        <>
                                                  <Navbar/>

        <div className="container mt-5">

            <div className="row">
                <div className="col-12">
                    <h1 className="display-6 fw-bolder text-center">Your Cart
                    </h1>
                    <hr />
                </div>
                <h3 className="text-end mb-4">Total Cart Value: $ {cart.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)}</h3>
            </div>

            <div className="row justify-content-center">
                <ShowProducts />
            </div>

            <div className="row justify-content-center">
                 <button className="btn btn-outline-dark" onClick={() => dispatch(removeAllProductFromCart())}>Remove</button>
            </div>
        </div>
        </>

    )
}

export default CartData
