import './Home.css'
import { Fragment } from 'react-is';
import icons from "../assets/icons.png"
import icons2 from "../assets/icons2.png"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
    <Fragment>
        <section className="background-android">
            <h1 className="display-1 text-hour">21:30 </h1>
           {/*  <Link to="/News">{<img src={icons2} alt="icons set two" className="img-icons" />}</Link>  */}  
        <Link to="/Network">{<img src={icons} alt="icons set" className="img-icons" />}</Link> 
        </section>
    </Fragment> );
}
 
export default Home;