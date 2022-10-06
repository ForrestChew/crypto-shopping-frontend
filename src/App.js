import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import TopDeals from "./pages/TopDeals/TopDeals";
import Crypto from "./pages/Crypto/Crypto";
import Orders from "./pages/Orders/Orders";
import Form from "./components/Form/Form";
import { LOGIN_FORM_SPEC, CREATE_ACCOUNT_FORM_SPEC } from "./constants";
import { AuthedContext } from "./contexts/AuthedProvider";
import "./App.css";

function App() {
  const [isAuthed] = useContext(AuthedContext);
  return (
    <div className="App">
      <Navbar authStatus={isAuthed} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-deals" element={<TopDeals />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
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
