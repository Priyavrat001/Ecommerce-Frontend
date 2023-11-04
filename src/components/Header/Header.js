import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";


const Header = () => {
  const options = {
    logo:"https://www.lunapic.com/editor/premade/transparent.gif",
    logoWidth:"50%",
    logoHoverColor:"crimson",
    burgerColorHover: "#eb4034",
    navColor1:"#fff5f5",
    burgerColorHover:"#900",
    link1Size:"1.2rem",
    link1Color:"#121212",
    link1Padding:"1vmax",
    link1ColorHover:"crimson",
    nav2justifyContent:"flex-end",
    link1Margin:"1vmax",
    link2Margin:"0",
    link3Margin:"0",
    link4Margin:"1vmax",
    nav3justifyContent:"flex-start",
    link1Text:"Home",
    link1Family:"sans-serif",
    link2Text:"Products",
    link3Text:"About Us",
    link4Text:"Contact Us",
    nav4justifyContent:"flex-start",
    profileIcon:true,
    profileIconColor: "rgba(35, 35, 35,0.8)",
    ProfileIconElement: MdAccountCircle, 
    searchIcon:true,
    searchIconColor: "rgba(35, 35, 35,0.8)",
    SearchIconElement:MdSearch,
    cartIcon:true,
    cartIconColor: "rgba(35, 35, 35,0.8)",
    CartIconElement:MdAddShoppingCart,
    searchIconMargin:"0.5vmax",
    cartIconMargin:"1vmax",
    profileIconMargin:"0.5vmax",
    searchIconColor:"#121212",
    cartIconColor:"#121212",
    profileIconColor:"#121212",
    searchIconColorHover:"crimson",
    cartIconColorHover:"crimson",
    profileIconColorHover:"crimson",
  }
  return (
    <>
    <ReactNavbar {...options}/>
    </>
  )
}

export default Header