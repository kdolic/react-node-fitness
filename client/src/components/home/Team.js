import React from 'react'
import '../../css/Team.css'

const Team = () => {
    return (
        <section className='teamContainer'>
            <div className='team-top'>
                <h1>Meet <span className='team-span'>The</span> Team</h1>
                <p>The Creators of Dev.Fit</p>
            </div>
            <div className='team-content'>
                <div>
                    <p>IMAGE HERE</p>
                    <h3>Kenan Dolic</h3>
                    <p>Role</p>
                    <a href='https://www.linkedin.com/in/kenan-dolic/' target='blank'><button className='team-btn'>Find Out More</button></a>
                </div>
                <div>
                    <p>IMAGE HERE</p>
                    <h3>Daniel Wright</h3>
                    <p>Role</p>
                    <a href='https://www.linkedin.com/in/daniel-wright-1207/' target='blank'><button className='team-btn'>Find Out More</button></a>
                </div>
            </div>
        </section>
    )
}

export default Team
