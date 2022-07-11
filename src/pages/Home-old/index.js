import React, {Fragment} from 'react'
import './style.css';

const Home = () =>{

    return(
        <Fragment>
            <div className="home-container">
                <div className="el general-information"> Part1</div>
                <div className='el polygons'> POlygonss</div>
            </div>
            <div className="grid-container">
                <div className="grid1"> Grid 1 2</div>
                <div className='grid2'> Grid 1 valueee</div>
                <div className='grid3'> Grid 3 value</div>
                <div className='grid4'> Grid 4 value</div>


            </div>
        </Fragment>
    )
}

export default Home;