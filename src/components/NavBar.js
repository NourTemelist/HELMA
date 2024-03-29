import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import logoNavBar from './../assets/logoNavBar.png';
import menuToggle from './../assets/menuToggle.png';
import { useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { products } from '../data/data.js';



export default function NavBar() {
  let location = useLocation();
  let navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('');
  const [tab, setTab] = useState(products);

  // toggle Menu
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  // search bar
  const [displayInput, setDisplayInput] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 840px)');
    const handleMediaQueryChange = (e) => {
      setDisplayInput(false);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setTab(filteredProducts)
  }, [searchValue]);

  function handleclick() {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const queryParams = new URLSearchParams();
    queryParams.append('tab', JSON.stringify(filteredProducts));

    navigate(`/shop?${queryParams.toString()}`);
  }

  function handleloop(){
    
    setDisplayInput(true);
    handleclick()
  }
  return (
    <div className="allNavBar">
      <img className="logoNB" src={logoNavBar} />
      <nav className="navBar-container">
        {(toggleMenu || screenWidth > 300) && (
          <div className="hbc">
            <div className="elem elemi">
              <a href="/home">ACCUEIL</a>
            </div>
            <div className="aaaa"></div>
            <div className="elem elemi">
              <a href="/shop">BOUTIQUE</a>
            </div>
            <div className="aaaa"></div>
            <div className="elemi elemi3">
              <a href="/contacts">CONTACTS</a>
            </div>
          </div>
        )}
        <div className="searchbar">
          <input
            type="text"
            className="inputText"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="loopBtn" type="submit" onClick={handleclick}>
            <AiOutlineSearch className="searchloop" color="#fff" size={25} />
          </button>
        </div>
      </nav>

      <div className="respNavBar">
        <div className="firstPart">
          <div className="searchbar bar2">
            {displayInput && (
              <input
                type="text"
                className="inputText"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
            <button
              className="loopBtn"
              type="submit"
              onClick={handleloop}
            >
              <AiOutlineSearch className="searchloop" color="#fff" size={25} />
            </button>
          </div>

          {toggleMenu && (
            <div className="secondPart">
              <div className="elemm1">
                <a className="elemm" href="/home">
                ACCUEIL
                </a>
                <hr></hr>
              </div>
              <div className="elemm1 elemm2">
                <a className="elemm" href="/shop">
                BOUTIQUE
                </a>
                <hr></hr>
              </div>
              <div className="last">
                <a className="elemm" href="/contacts">
                  CONTACTS
                </a>
              </div>
            </div>
          )}
          <div>
            <img src={menuToggle} className="btnMenu" onClick={toggleNav} />
          </div>
        </div>
      </div>
    </div>
  );
}


