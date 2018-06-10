import React from 'react';

class Header extends React.Component {

    handleClick = () => {
      
  }
  
    render () {
    
      return (
            <section id='block'className='mainHeader'>
                <div className='header'>
                <h1>WK</h1>
                {/* <button className="hamburger"></button> */}
                <ul className='menu'>
                    <li><a href="#stronaglowna">Strona główna</a></li>
                    <li><a href="#aboutme">O mnie</a></li>
                    <li><a href='#skills'>Umiejętności</a></li>
                    <li><a href='#project'>Projekty</a></li>
                    <li><a href='#kontakt'>Kontakt</a></li>
                </ul>
                </div>
            </section>
      )
    }
  }
  

export default Header;

  