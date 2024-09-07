import { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../StoreContext/StoreContext'
const FoodItem = ({ id, name, price, description, image }) => {

    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);
    console.log("Rendering FoodItem with id:", id);
    console.log("Cart Item Count for this id:", cartItem[id]);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
                {
                    !cartItem[id]
                        ? <img onClick={()=>addToCart(id)} src={assets.add_icon_black2} alt="" className="add" />
                        : <div className='food-item-counter'>
                            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} className='none' alt="" />
                            <p className='none'>{cartItem[id]}</p>
                            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} className='none' alt="" />
                        </div>

                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>

        </div>
    )
}

export default FoodItem