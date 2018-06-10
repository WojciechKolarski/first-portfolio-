import React from 'react';




    class MainSite extends React.Component {
        render () {
            return (
                <div id='stronaglowna' className='background'>
                    <span>
                        <h2>Wojciech Kolarski</h2>
                        <p>Junior front-end developer</p>
                    </span>
                </div>
            )
        }
    }

export default MainSite;


// import React from 'react';


// document.addEventListener('DOMContentLoaded', function(){

//     class TextTyper extends React.Component {
//         constructor(props) {
//             super(props);

//             this.state = {
//                 sec: 0,
//             }
//         }

//         render() {
//             return (
//                 <div className='background'>
//                 <span>
//                     <h2>{this.state.sec}s. { this.props.text.substr(0, this.state.sec +1) }</h2>
//                     <p>Junior front-end developer</p>
//                 </span>
//             </div>
//             ) 
        
//         }

//         componentDidMount() {

//             this.id = setInterval( () => {
//                 this.setState({
//                     sec: this.state.sec +1,
//                 }, () => {
//                     if(this.state.sec === this.props.text.length -1) {
//                         clearInterval(this.id);
//                     }
//                 });



//             }, 100);
//         }

//         componentWillUnmount() {
//             clearInterval(this.id);
//         }
//     }

//     ReactDOM.render(
//         <TextTyper text="Wojciech Kolarski!"/>,
//     );
// });

// export default MainSite;
  
