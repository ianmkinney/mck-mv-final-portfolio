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

export default ProductDetails