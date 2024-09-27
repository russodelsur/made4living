import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import NavAll from './NavAll';
import NavHome from './NavHome';

const Header = () => {

  const [home, isHome] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
       isHome(false)
      } else {
        isHome(true)
      }
  }, [location])

  return (
    <>
    {
      home ?
      <NavAll/>
      :
      <NavHome/>
    }
  </>
  )
};

export default Header;