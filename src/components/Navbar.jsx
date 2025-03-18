import React, { useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false); // State untuk visibilitas navbar

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex h-screen fixed">
      <div className="absolute left-0 z-10 top-1">
        {/* Tombol untuk toggle navbar */}
        <button
          onClick={toggleNavbar}
          className="p-2 bg-[#98D8EF] text-white rounded-md mb-4"
        >
          <img
            className="w-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACSklEQVR4nO3Yz4tOURzH8dcIpUaKwSRbJCErlCyYlYVCVjZiQxYspyyMUkT5lcgfYKVkp1hQHiHk55CSUjRGlEho8OjWV13T3PtcZnKfq/uu7+acO/d8Pvd8v+d7nqGmphWTcBdP0ItZKkovmqn4jkvYiIkqwji8DQMHcBZfU6be4AjmqoCR6yE6Sa1udGEn7qcMDaoA03AvBPdjLXqwHGdi/KKK0IUHw2olHatViAsh+k4Ue5Jyt3FChZgTp9UnTFVhjsdunFZhOvE+jCxSYXaEiSsqzsMwskGF6QkTLzFBGzMFR/E6riIN7Me8mD8fRnaX0YX3Rjp8xC0cxOIRnl2CZzlN7hq+4QtmjJXA8biZs+iv+JEz9wh7sABb8DnGk8a2EJOxEodjh1qt1QxNibbCbC/44makw9JIm1U4Fpe6kZ49mXEVT36D7ErdfPMi0Vb4HB8o8MIklTbn7OiauOS9wgtsKrB2d6pOsmIgNLakr4CJp3GNGA1JbT0P8Wk6CmhI5nPpji+d95KkoKcXFJXHIbzD7Iz5bS2yIXetUy1MXM7Y1laiWpnNmtuXoyXROiLJWT7U4sRITpq/Jc9s1lwHzmXoGUr1n9/I+oMkHkfPKIOZYXIkXYnm31iW0xM+YL5y2ZrzkVekH2zEYNLAqkJfaL4RKWh9DAyOsgb+NZ2pfrdO/KeiWfHo1wYixiqULaA24n/dkUYbiBhtXC33AK3Jp7K1MZyyBdVG6h1Rfjo16xpR/pdv1juiojvSaANRzT+M+o5VU6MYPwGX4AFoyyspxwAAAABJRU5ErkJggg=="
            alt="sandbox2"
          />
        </button>
      </div>
      <div
        className={`w-64 relative bg-[#98D8EF] text-black flex flex-col transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <div className="text-center items-center text-2xl font-bold border-b border-blue-500 p-2 ">
          Navigation
        </div>
        <nav className="flex-1/4 p-2 font-semibold">
          <ul>
            <li>
              <a
                href="#"
                className="mb-2 block p-2 rounded-md hover:bg-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mb-2 block p-2 rounded-md hover:bg-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mb-2 block p-2 rounded-md hover:bg-blue-500"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mb-2 block p-2 rounded-md hover:bg-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 mb-15 font-bold border-t border-blue-500 flex justify-center">
          <button className="bg-blue-500 p-2 rounded-md">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
