import React from 'react';

class Skills extends React.Component {
    render () {
        return (
            <div id='skills' className='skills12'>
                <div className='background1'>
                    <div className='mainSkills'>
                        <div className='skillsHeader'>Umiejętności</div>
                        <p>Technologie z których korzystam przy projektach</p>
                    </div>
                    <div className='skills1'>
                        <div className='html'></div>
                        <div className='css'></div>
                        <div className='js'></div>
                    </div>
                    <div className='skills2'>
                        <div className='jquerry'></div>
                        <div className='es6'></div>
                        <div className='react'></div>
                    </div>
                    <div className='skills3'>
                        <div className='gulp'></div>
                        <div className='sass'></div>
                        <div className='rwd'></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Skills;