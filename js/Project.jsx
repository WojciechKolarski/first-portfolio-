import React from 'react';

class Project extends React.Component {
    render () {
        return (
            <section id='project'>
            <div className='mainProject'>
                <div className='mainProjectHeader'>Projekty</div>
            </div>
            <div className='projectContainer'>

                <div className='container'>
                    <div className='test'>
                    <div className='test123'>Furry game 
                        <ul className='projectList'>
                        <li>Wykorzystane technologie:</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        </ul>
                    </div>
                   </div>
                </div>

                <div className='container1'>
                    <div className='test1'>
                    <div className='test123'> Sit on chair 
                        <ul className='projectList'>
                        <li>Wykorzystane technologie:</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        </ul>
                    </div>
                   </div>
                </div>
             

                <div className='container2'>
                    <div className='test2'>
                        <div className='inProgress'>In progress..</div>
                    </div>
                </div>
                
            </div>
            <div className='batony'>
                <button className='Code'><a href="https://github.com/CodersLab/KRA_FER_S_16_REACT_Furry_Game">Kod źródłowy</a></button>
                <button className='Code'><a href="#">Kod źródłowy</a></button>
                <button className='Code'><a href="#">Kod źródłowy</a></button>
            </div>
            </section>
        )
    }
}

export default Project;
