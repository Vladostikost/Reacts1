import React from 'react'
import Foto from '../../foto/Rectangle 24.jpg'
import Foto2 from '../../foto/Rectangle 25.jpg'
import './SecondBlock.css'

const SecondBlock = () => {
    return (
        <div className='secondBlock'>
            <div className='container'>
                <div className='inner'>
                    <div className='left'>
                        <h1>50+ Beautiful rooms inspiration</h1>
                        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        <button className='baton'><p className='texts'>Explore More</p></button>
                    </div>
                    <div className='right'>
                    <img src={Foto} alt="" className='Foto' />
                    <img src={Foto2} alt="" className='Foto2' />
                    </div>
                    
                </div>
            </div>


        </div>

    )
}

export default SecondBlock