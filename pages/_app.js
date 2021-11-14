import '../styles/globals.css'
import { useState } from 'react'
import { UserContext } from '../context/UserContext'

function MyApp({ Component, pageProps }) {
  /** 
   * Set defaults for global state here,
   * at the top level of our component tree
   * (could fetch this data from external source
   * using getStaticProps(), getServerSideProps(),
   * or useEffect())
   */
  const [user, setUser] = useState({
    name: "Murphy",
    cart: []
  })
  const userValue = {
    user, setUser
  }

  /* TODO: create ItemContext and wrap below in provider */
  const [plants, setPlants] = useState([
    { 
      name: 'Snake Plant', 
      img: 'https://res.cloudinary.com/social-upload-prod-media-cld/image/upload/shopify/1/0207/8508/products/SnakePlant_3.jpg?v=1589545105',
      stock: 20,
      price: 60
    },
    { 
      name: 'Fiddle Leaf Fig', 
      img: 'https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/39b52c4cabb46819553175347e38b212/f/l/flowerbx-plants-product-fiddle-leaf-fig-tall-1000px-2.jpg',
      stock: 5,
      price: 85
    },
    { 
      name: 'Pothos', 
      img: 'https://pyxis.nymag.com/v1/imgs/db8/d42/9f4f96e410a2e722d730577f90aff42ac2-2-sill-pothos-1.rsquare.w700.jpg',
      stock: 10,
      price: 20
    },
    { 
      name: 'Monstera', 
      img: 'http://cdn.shopify.com/s/files/1/0541/7602/2711/products/1_f01dec7c-e0c9-40cf-989e-20aa5bd616b2.jpg?v=1623787048',
      stock: 0,
      price: 120
    }
  ])

  /* 
   * Wraps all components that consume the context in 
   * a provider, and passes in the default value. 
  */
  return <UserContext.Provider value={userValue}>
    <Component {...pageProps} />
  </UserContext.Provider>
}

export default MyApp
