import React from 'react';
import '../../css/Team.css';
import KD from '../../assets/images/KD1.jpg';

const Team = () => {
    return (
        <section className='teamContainer'>
            <div className='team-top'>
                <h1>Meet <span className='team-span gradient'>The</span> Team</h1>
                <p>The Developers of Dev.Fit</p>
            </div>
            <div className='team-content'>
                <div>
                    {/* <img src={KD} alt="Kenan" width='250px'/> */}
                    <h3>Kenan Dolic</h3>
                    <p>Role</p>
                    <a href='https://www.linkedin.com/in/kenan-dolic/' target='blank'><button className='team-btn'>Find Out More</button></a>
                </div>
                <div>
                    {/* <p>IMAGE HERE</p> */}
                    <h3>Daniel Wright</h3>
                    <p>Role</p>
                    <a href='https://www.linkedin.com/in/daniel-wright-1207/' target='blank'><button className='team-btn'>Find Out More</button></a>
                </div>
            </div>
        </section>
    )
}

export default Team
