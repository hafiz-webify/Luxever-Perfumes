function Product(props) {
    return <>
    <div className="product-card">
    <p>Product title:{props.title}</p>
    <p>Price: ${props.price}</p>
    <p>Status:{props.inStock ? "In Stock" : "Out of Stock"}</p>
    <hr />
    </div>
    </>
}
export default Product