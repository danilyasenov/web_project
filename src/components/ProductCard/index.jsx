import "./index.css";

export function ProductCard(props) {
    const { image, category, title, price } = props.data
    return (
        <div className="product-card">
            <img height="200" src={image} alt="" />
            <div class="category">{category}</div>
            <p>{title}</p>
            <div class="bottom">
                <div>
                    <b>{price}$</b>
                </div> 
                <button>Add me</button>
            </div>
        </div>
    )
}