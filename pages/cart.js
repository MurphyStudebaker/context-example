import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'

export default function Checkout() {
  const { user, setUser } = useUser()

  /**
   * TODO: use the item context you created to 
   * display which items are in the user's cart
   * and the total price to checkout. 
   */

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="checkout">
        <h1>{user.name}, let's checkout!</h1>
        <p className="subtitle">You have {user.cart.length} items in your cart.</p>
        <div>
          {/* TODO: Style the checkout page so the cart maps through
            * to a component for each item in the cart
          */}
          {
            user.cart.map(item =>
              <article className="record">
                <div className="img-wrapper">
                  <img src={item.img} alt={item.name} />
                </div>
                <div>
                  <h2 className="name">{item.name}</h2>
                  <p className="price">${item.price}</p>
                </div>
              </article>
            )
          }
        </div>
        <h2 className="total">Total: ${user.cart.reduce((a, i) => a + i.price, 0)}</h2>
      </main>
    </div>
  )
}
