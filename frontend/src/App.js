import "./App.css";
import Product from "./pages/Product";
import { extendTheme } from '@chakra-ui/react'
import { LoadingPosts } from "./components/products/LoadingPost";

const breackpoints = {
  base: "420px",
  sm: "550px",
  md: "700px",
  lg: "850px",
  xl: "950px",
  "2xl": "1200px"
}
const theme = extendTheme({ breackpoints })
function App() {
  return <div className="App">
    <Product/>
    {/* <LoadingPosts/> */}
    </div>;
}

export default App;
