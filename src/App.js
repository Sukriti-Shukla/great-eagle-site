import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Honours from "./components/pages/Honours";
import Seminars from "./components/pages/Seminars";
import Store from "./components/store/Store";
import StoreCart from "./components/store/StoreCart";
function App() {
  return (
    <div>
      <div className={classes.body}>
        <Header />
        <main className={classes.main} id="idMain">
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/honours" element={<Honours />}></Route>
            <Route path="/seminars" element={<Seminars />}></Route>
            <Route path="store/*" element={<Store />}></Route>
            <Route path="/store/cart" element={<StoreCart />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
