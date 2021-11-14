/* TODO: style me! */
export default function ItemCard({ name, img, stock, price }) {
    return <article className="card">
        <div className="img-wrapper">
            <img src={img} alt={name} />
        </div>
        <h2 className="plant-name">{name}</h2>
        <p className="price">{price}</p>
        <button className={stock <= 0 ? 'disabled' : ''}>Add to Cart</button>
    </article>
}