import { Img } from './Img'
import { useState } from 'react'

function ProductDetails (props) {
    const {
        name,
        description,
        images: [
            {
                title,
                imageSrc
            }
        ],
        price,
        addedToCart
    } = product
    return (
        <div class="product-details">
            <div class="product-details__main">
                <img src={imageSrc} alt={title} />
            </div>
            <aside>
            <h3>{name}</h3>
            <p>
                {description}
            </p>
            <p>
                &pound;{price}
            </p>
            <button onClick={() => props.addToCart(props.product)}>{addedToCart ? 'Remove from' : 'Add to'} cart</button>
            </aside>
      </div>
    )
}

export const Product = (props) => {
    const {
        name,
        images,
        description,
        price,
        addedToCart
    } = props.product

    const [cart, setCart] = useState("Add to Cart")

    const setMsg = () => {
        if(addedToCart === true) {
            setCart("Add to Cart")
        } else {
            setCart("Remove from cart")
        }
    }
    
    return (
        <article class="center" className="product">
                <div class="center">
                    <h3>{name}</h3>
                    <Img props={images}/>
                    {ProductDetails(props)}
                    <p>&pound;{price}</p>
                    <div className="promo-blocks__actions">
                        {<button onClick={()=>{
                            props.addToCart(props.product)
                            setMsg()
                            }}>{cart}</button>}
                </div> 
            </div>            
        </article>
    )
}

