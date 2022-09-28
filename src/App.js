import { useState } from "react";
import SignUp from "./components/sign-up";
import { AuthContextProvider } from "./context/auth-context";
import { Routes, Route } from "react-router-dom";
import Booking from "./components/booking";
import HotelList from "./components/hotel-list";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  

  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<SignUp 
        // isOpen={isOpen} setIsOpen={setIsOpen}
         />} />
        <Route path='/booking' element={<Booking
        //  isOpen={isOpen} setIsOpen={setIsOpen}
          />} />
        <Route path='/hotel-list' element={<HotelList
        //  isOpen={isOpen} setIsOpen={setIsOpen}
          />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
