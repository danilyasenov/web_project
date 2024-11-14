import "./index.css";

export function ProductCard(props) {
    const {img,category,name,price} = props.data
    return (
        <div className="product-card">
            <img height="200" src={img} alt="" />
            <div>{category}</div>
            <h4>{name}</h4>
            <div>{price}</div>
        </div>
        )
}