import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import TopDeals from "./pages/TopDeals/TopDeals";
import Crypto from "./pages/Crypto/Crypto";
import Orders from "./pages/Orders/Orders";
import Form from "./components/Form/Form";
import Cart from "./pages/Cart/Cart";
import { LOGIN_FORM_SPEC, CREATE_ACCOUNT_FORM_SPEC } from "./constants";
import { UserContext } from "./contexts/UserProvider";
import "./App.css";

function App() {
  const [user] = useContext(UserContext);
  return (
    <div className="App">
      <Navbar authStatus={user.isAuthed} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-deals" element={<TopDeals />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/profile"
          element={
            user.isAuthed ? <Profile /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/cart"
          element={user.isAuthed ? <Cart /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Form formSpec={LOGIN_FORM_SPEC} />} />
        <Route
          path="/create-account"
          element={<Form formSpec={CREATE_ACCOUNT_FORM_SPEC} />}
        />
      </Routes>
    </div>
  );
}

export default App;
