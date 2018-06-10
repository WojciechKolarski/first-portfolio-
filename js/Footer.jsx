import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div className='mainFooter'>
                    <div className='copyright'>copyright</div>
                    <div className='socialMedia'>
                        <a  href='https://github.com/'><img className='logo1' src="images/github6.png" /></a>
                        <a  href='https://www.linkedin.com/in/wojciech-kolarski-0b298a163/'><img className='logo' src="images/linkedin.png" /></a>
                        <a  href='https://www.facebook.com/'><img className='logo' src="images/fb.png" /></a>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;