import React from 'react'

const Team = () => {
    return (
        <section className='teamContainer'>
            <div className='team-top'>
                <h1>Meet <span>The</span> Team</h1>
                <p>The Creators of Dev.Fit</p>
            </div>
            <div className='team-content'>
                <div>
                    <p>IMAGE HERE</p>
                    <h3>Kenan Dolic</h3>
                    <p>Role</p>
                    <button className='team-btn'>Find Out More</button>
                </div>
                <div>
                    <p>IMAGE HERE</p>
                    <h3>Daniel Wright</h3>
                    <p>Role</p>
                    <button className='team-btn'>Find Out More</button>
                </div>
            </div>
        </section>
    )
}

export default Team
