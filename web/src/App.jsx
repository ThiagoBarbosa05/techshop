import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./routes/Home";
import Product from "./components/products/Product";
import Login from "./routes/login";
import { isLogged } from "./middlewares/Auth";
import Profile from "./routes/profile";

function App() {
  console.log(isLogged())
  return (
    <div className="h-[100%]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
