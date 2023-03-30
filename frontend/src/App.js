import './App.css'
import Home from './pages/home/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Profile from './pages/profile/Profile'
import Allrouter from './pages/Allrouter'
import Topbar from './Adminside/scene/global/Topbar'
import { Box, Flex } from '@chakra-ui/layout'
import Sidebar from './Adminside/scene/global/Sidebar'
import Dashboard from './Adminside/scene/Dashboard'
function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <Profile /> */}
      <Allrouter />
    </div>
  )
}

export default App
