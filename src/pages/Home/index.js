import React, {Fragment} from 'react'
import GeneralInformation from './components/GeneralInformation';
import Polygons from './components/Polygons';
import './style.css';
import './polygon.css';

const Home = () =>{
    return(
        <Fragment>
            <div id="home" className="home-container">
                <div className="el general-information"><GeneralInformation/></div> 
                <div className='el polygons'> <Polygons/></div>
            </div>
        </Fragment>
    )
}

export default Home;