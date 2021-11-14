import Head from 'next/head'
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
      <main>
        <h1>{user.name}, let's checkout!</h1>
        <p>You have {user.cart.length} items in your cart.</p>
        {/* TODO: display items in cart and cart total */}
      </main>
    </div>
  )
}
