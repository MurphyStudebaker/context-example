/* TODO: style me! */
export default function ItemCard({ name, img, stock, price, add }) {
    return <article className="card">
        <div className="img-wrapper">
            <img src={img} alt={name} />
        </div>
        <div className="content">
        <h2 className="plant-name">{name}</h2>
        <p className="price">${price}</p>
        <button onClick={() => add(name)} className={stock <= 0 ? 'disabled' : ''}>Add to Cart</button>
        </div>
    </article>
}