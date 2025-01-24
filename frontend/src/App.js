import React, { useContext } from "react";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/LoginScreen";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactScreen from "./pages/ContactScreen";
import Register from "./pages/RegisterScreen";
import { Context } from "./context/Context";
import Homepage from "./pages/HomePage";
import Single from "./pages/SinglePage";
import Write from "./pages/Write";

const App = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <BrowserRouter>
        <header className="sticky inset-0 z-10">
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={user ? <HomePage /> : <Login />} />
            <Route
              path="/register"
              element={user ? <HomePage /> : <Register />}
            />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/" element={<Landing />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
