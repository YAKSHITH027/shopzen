import './App.css'
import Home from './pages/home/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Profile from './pages/profile/Profile'
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/Checkout/Checkout"

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <Profile /> */}
      {/*<Cart/>*/}
      <Checkout/>

    </div>
  )
}

export default App
