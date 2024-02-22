"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Collapse, Fade, FormControlLabel, Slide, Switch, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
const pages = ['home', 'about', 'shop', 'contact'];

export default function Navbar() {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isCart, setCartOpen] = useState(false);
  
    const handleClick = () => {
      setAnchorEl((prev) => !prev);
      setIsDropDownOpen(!isDropDownOpen); // Toggle the dropdown state
    };
    const openCart = () => {
        setAnchorEl((prev) => !prev);
        setCartOpen(!isCart); // Toggle the dropdown state
        setIsDropDownOpen(false); // Toggle the dropdown state
      };
    
    const cart = (
            <div className={`${styles.cartOpen}`}>
                <div className={`${styles.cartOpenTitle}`}>
                    <h1>your cart</h1>
                    <div onClick={openCart}>
                    <Slide in={isCart} direction="right" mountOnEnter ><IconButton size="large" edge="start" color="inherit" aria-label="menu" >
                            <CloseIcon/>
                        </IconButton></Slide>
                        
                    </div>
                </div>
                <div className={`${styles.cartContent}`}>
                    <h1>No items found.</h1>
                </div>
            </div>
    )
    const bgOverride = (
            <div className={`${styles.cartOpenbg}`}></div>
    )
    const dropDown = (
        <div className={styles.dropDownNav}>
        {pages.map((item) => (
          <Link key={item} href={`/${item}`}>
            {item}
          </Link>
        ))}
      </div>
    )
    const containerRef = React.useRef(null);
    
    return (
      <div>
        <div>
            <Fade in={isCart}>{bgOverride}</Fade>
            <Slide direction="right" in={isCart}>{cart}</Slide>
        </div>
        <nav className={styles.navStyle}>
          <div className={styles.navHeader}>
            <Link href="/home">
              Pompeo
            </Link>
          </div>
          <div className={`${styles.navLinks} ${styles.nonDrop}`}>
            {pages.map((item) => (
              <Link key={item} href={`/${item}`}>
                {item}
              </Link>
            ))}
          </div>
          <div className={styles.dropDownNav2}>
          <Collapse in={isDropDownOpen} unmountOnExit>
            {dropDown}
          </Collapse>
        </div>
          <div className={styles.navCart} >
            <div>
                <button onClick={openCart}>
                    <ShoppingCartOutlinedIcon />
                    Cart
                </button>
            </div>
            <div className={styles.navDrop}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            </div>

          </div>
        </nav>


      </div>
    );
  };
  