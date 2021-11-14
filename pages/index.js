import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'

export default function Home() {
  /* Get access to the User Context 
   * In this case, we don't need the u
   */
  const { user, setUser } = useUser()

  /* TODO: import your useItems context
   * and map through all of the items
   * to create a gallery of ItemCard components
  */

  const addToCart = (itemID) => {
    /* TODO: Write function that updates the
     * user context object's cart 
     * to include the added item
    */
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hey there, {user.name}</h1>
        <div>
          {/* TODO: Map through the items in context 
          * to display an ItemCard with the data for each
          */}
          <ItemCard />
        </div>
      </main>
    </div>
  )
}
