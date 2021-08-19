import './Network.css'
import { Fragment } from 'react-is';
import { Link } from 'react-router-dom';
import google from "../assets/google.png"
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Network = () => {
  const items = [
    {
      id: 0,
      name: "Blanquita, ver video porno",
    },
    {
      id: 1,
      name: "Video íntimo de Blanca Yañez",
    },
    {
      id: 2,
      name: "Mentiras de Blanca Yañez",
    },
    {
      id: 3,
      name: "Blanca Yañez fraude",
    },
  ];

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

    return ( 
    <Fragment>
       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul className="nav nav-pills">
  <li className="nav-item">
    <Link to="" className="nav-link">TODO</Link>
  </li>
  <li className="nav-item">
    <Link to="" className="nav-link">IMÁGENES</Link>
  </li>
  <li className="nav-item ">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gray" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
</li>
</ul>
  </div>
</nav>

<section className="search-section">
<img src={google} alt="icons set" className="logo-icon"/>
<form className="d-flex m-3">
<div style={{ width: 400, margin: 20 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            styling={{ zIndex: 2 }} 
            autoFocus
          />
        
       <Link to="/News" className="btn bg-primary text-white mt-3" type="submit">Buscar</Link>
        </div>
      </form>
</section>

<section className="navbar navbar-expand-lg navbar-light bg-light d-flex">
<ul className="nav nav-pills">
  <li className="nav-item">
    <Link to="" className="nav-link">Privacidad</Link>
  </li>
</ul>  
</section>
<section className="navbar navbar-expand-lg navbar-light bg-light d-flex ">
   <ul className="nav nav-pills">
  <li className="nav-item">
    <Link to="" className="nav-link">Publicidades</Link>
  </li>
  <li className="nav-item">
    <Link to="" className="nav-link">Negocios</Link>
    </li>
    <li className="nav-item">
    <Link to="" className="nav-link">Búsquedas</Link>
  </li>
</ul> 
</section>
    </Fragment> );
}
 
export default Network;