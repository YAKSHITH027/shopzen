import './App.css'
import Home from './pages/home/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Profile from './pages/profile/Profile'
import Cart from './pages/cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Allrouter from './pages/Allrouter'

import Product from './pages/Product/Product'

import Topbar from './Adminside/scene/global/Topbar'
import { Box, Flex } from '@chakra-ui/layout'
import Sidebar from './Adminside/scene/global/Sidebar'
import Dashboard from './Adminside/scene/Dashboard'
import Search from './components/home/Search'

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Product /> */}
      <Allrouter />
      {/* <Search /> */}
      {/*<Cart/>*/}
      {/*<Checkout/>*/}
      {/*<Allrouter />*/}
    </div>
  )
}

export default App
