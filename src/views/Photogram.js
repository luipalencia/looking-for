import './Photogram.css'
import { Fragment } from 'react-is';
import { Link } from 'react-router-dom';
import censura from "../assets/censura.jpg"
import lies from "../assets/lies.jpeg"

const Photogram = () => {
    return ( 
        <Fragment>
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <ul className="nav nav-pills">
  <li className="nav-item">
    <h4 className="nav-link text-dark">blanca_yañez ▼</h4>
  </li>

</ul>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
  </div>
  <hr style={{marginTop: 0}}/>
</nav>
<hr style={{marginTop: 0}} />
<p className="nav-item text-center text-primary">Ver panel de notificaciones </p>
<hr />

<section className="d-flex">
<div className=""> 
  <img src={censura}  className="rounded-circle float-left img-profile m-1" alt="" />
</div>
<div className="d-flex m-2"> 
<div className="">
<p className="nav-item text-center m-0">9</p>
<p className="nav-item m-1">Publicación</p>
</div>
<div>
<p className="nav-item text-center m-0">9</p>
<p className="nav-item m-1">Seguidores</p>
</div>
<div>
<p className="nav-item text-center m-0">9</p>
<p className="nav-item m-1">Seguidos </p>
</div>
</div>
</section>
<section className="title-section">
<h6 className="nav-link text-dark m-0 p-0 px-3 pt-3">Blanca Yañez</h6>
<p className="nav-link text-secondary m-0 p-0 px-3">Figura pública</p>
<div class="d-grid gap-2">
  <button class="btn btn-outline-secondary mx-3 my-3 mb-2" type="button">Edita tu perfil</button>
</div>
<div className="text-center">
<button type="button" className="btn btn-outline-secondary mx-2">Contacto</button>
  <button type="button" className="btn btn-outline-secondary mx-2">Estadistica</button>
  <button type="button" className="btn btn-outline-secondary mx-2">Promocion</button>
</div>
<section className="images-section mt-4">
  <div className="d-flex justify-content-evenly">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-border-all" viewBox="0 0 16 16">
  <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gainsboro" className="bi bi-person-square" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg>
  </div>
  <hr width="50%" className="mb-1"/>
{/* AQUI VAN LAS IMAGENES */}
<div className="images-sec d-flex flex-wrap bd-highlight mb-3 mt-0">
  <img src={censura} /* className="d-none" */ width="120" height="120" alt=""/>
  <img src={lies} width="120" height="120" alt="" data-bs-toggle="modal" data-bs-target="#exampleModal1"/>
  <img src={censura} width="120" height="120" alt=""/>
  <img src={lies} width="120" height="120" alt="" />
  <img src={censura} width="120" height="120" alt="" />
  <img src={lies} width="120" height="120" alt="" />
  <img src={censura} width="120" height="120" alt="" />
</div>

<div className="modal fade exampleModal1" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog m-4 mt-6">
    <div className="modal-content">
    <button type="button" className="btn btn-outline-danger mx-2 mt-4">Eliminar</button>
  <button type="button" className="btn btn-outline-light text-dark mx-2 mt-2">Archivar</button>
  <button type="button" className="btn btn-outline-light text-dark mx-2 mt-2">Ocultar</button>
  <button type="button" className="btn btn-outline-light text-dark mx-2 mt-2">Editar</button>
  <button type="button" className="btn btn-outline-light text-dark mx-2 mt-2">Compartir</button>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
  </div>
</div>
</div>
</div>

</section>
<section className="footer-section">
  <div className="icons d-flex justify-content-evenly">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>
  </div>

</section>
</section>
</Fragment>
     );
}
 
export default Photogram;