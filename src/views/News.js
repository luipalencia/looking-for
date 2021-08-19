import { Fragment } from 'react-is';
import { Link } from 'react-router-dom';
import lies from "../assets/lies.jpeg"
import censura from "../assets/censura.jpg"
import './News.css'

const News = () => {
    return ( 
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
   <div className="container-fluid">
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="..." aria-label="Search"/>
    </form>
     <ul className="nav nav-pills">
   <li className="nav-item ">
   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="gray" className="bi bi-person-circle" viewBox="0 0 16 16">
   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
   <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
 </svg>
 </li>
 </ul>
   </div>
   <section className="navbar navbar-expand-lg w-100 navbar-light bg-light d-flex justify-content-around">
   <ul className="nav nav-pills">
  <li className="nav-item">
    <Link to="" className="nav-link text-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> TODO</Link>
  </li>
  <li className="nav-item">
    <Link to="" className="nav-link text-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg> IMÁGENES</Link>
    </li>
    <li className="nav-item">
    <Link to="" className="nav-link text-secondary"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg> NOTICIAS</Link>
  </li>
</ul> 
</section>
 </nav>
 <p className="font-weight-light m-2">Se encontraron cerca de 25,000,000 resultados para su búsqueda </p>

 <section className="news-section m-2">

 <div className="card p-1 mb-3 m-1">
  <div className="card-body">
    <h5 className="card-title text-primary"> BLANQUITA YAÑEZ, SE REVELAN INCONSISTENCIA EN SU RELATO</h5>
    <p>www.tunoticialdia.com</p>
    <p className="card-text">El proceso más incendiario que se tramita en Tribunales amenaza con recargarse…</p>
  </div>
</div>

<div className="card p-1 mb-3 m-1">
  <div className="card-body">
    <h5 className="card-title text-primary">SENADOR VASQUEZ DESESTIMA VERSIÓN DE BLANQUITA YAÑEZ</h5>
    <p>www.tunoticialdia.com</p>
    <p className="card-text">La principal acusadora del senador mantiene sus dichos mientras su relato pierde…</p>
  </div>
</div>

<h2 className="font-weight-light m-2">NOTICIAS DESTACADAS</h2>
<div className="card p-1 mb-3 m-1">
  <div className="card-body">
  <img class="card-img-top" src={lies} alt="Card cap"/>
  <p>www.tunoticialdia.com</p>
    <h5 className="card-title text-primary">LAS MENTIRAS DE BLANQUITA UNA POR UNA </h5>
    <p className="card-text">Detalles perversos de la red de mentiras en que Blanquita metió a…</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  Ver noticia
</button>

<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img class="card-img-top" src={lies} alt="Card cap"/>
      <h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>

<blockquote class="blockquote text-center">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

<p>
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur"    </p> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

<div className="card p-1 mb-3 m-1">
  <div className="card-body">
    <h5 className="card-title text-primary">BLANQUITA, EL FRAUDE CON CARA DE NIÑA</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content</p>
    <p>www.tunoticialdia.com</p>
  </div>
</div>

<div className="card p-1 mb-3 m-1">
  <div className="card-body">
  <img class="card-img-top" src={censura} alt="Card cap"/>
  <p>www.tunoticialdia.com</p>
   <h5 className="card-title text-primary">VIDEO INTIMO DE BLANCA YAÑEZ ES OBJETO DE MORBO EN INTERNET </h5>
    <p className="card-text">El proceso más incendiario que se tramita en Tribunales amenaza con recargarse…</p>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  Ver noticia
</button>
<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img className="card-img-top" src={censura} alt="Card cap"/>
      <h3>
  Fancy display heading
  <small className="text-muted">With faded secondary text</small>
</h3>
<p>
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur"
    </p> 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

  </div>
</div>


 </section>
 </Fragment>
  );
}
 
export default News;