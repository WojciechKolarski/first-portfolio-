import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';
import MainSite from './MainSite.jsx';
import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Project from './Project.jsx';
import Kontakt from './Kontakt.jsx';
import Footer from './Footer.jsx';


document.addEventListener('DOMContentLoaded', function(){





  class App extends React.Component {
    render() {
      return (
        <div>
        <Header/>
        <MainSite/>
        <AboutMe/>
        <Skills/>
        <Project/>
        <Kontakt/>
        <Footer/>
        </div>
      )
    }
  }

   
       ReactDOM.render(
         <App/>,
         document.getElementById('app')
       );
});