import React from 'react';

class ContactForm extends React.Component {
    
        state = {
            nameVal: '',
            email: '',
            message: '',
            userMessage: '',
            department: 'BOK',
            h2Style: ''
        }
    
        handleNameChange = (e) => {
            this.setState({nameVal: e.target.value })
        }
    
        handleEmailChange = (e) => {
            this.setState({email: e.target.value })
        }
    
        handleMessageChange = (e) => {
            this.setState({message: e.target.value })
        }
    
        handleDepartmentChange = (e) => {
            this.setState({department: e.target.value })
        }
    
    
    
        handleSubmit = (event) => {
            event.preventDefault();
    
            if(this.state.nameVal == '') {
                this.setState({userMessage: "Pole imię musi zostać uzupełnione"});
            } else if (this.state.email.indexOf('@') == -1) {
                this.setState({userMessage: "Pole email musi zostać uzupełnione i posiadać znak @"});
            } else if (this.state.message == "") {
                this.setState({userMessage: "Pole wiadomość musi zostać uzupełnione"});
            } else {
                this.setState({userMessage: `Dziękujemy za wiadomość. Wysłano do wydziału: ${this.state.department}`, h2Style: 'green'});
            }
        }
    
        render() {
    
            const style = {
                color: this.state.h2Style
            }
    
            return (
                <div id='kontakt' className='contact'>
                 <div className='kontaktHeader'>Kontakt</div>
                    <form className='contactForm' onSubmit={ this.handleSubmit }>
                            <input type='text' name='name' placeholder='Imię' onChange={this.handleNameChange} value={this.state.nameVal}/>
                            <input type="email" name='email' placeholder='email' onChange={this.handleEmailChange} value={this.state.email} />
                            <textarea name='massage' rows='8' cols='40' placeholder="Wpisz wiadomość" onChange={this.handleMessageChange} value={this.state.message} />
                            <input className='contactButton' type="submit" value="Wyślij" />
                    </form>
                </div>
            )
        }
    }


export default ContactForm;




// class Kontakt extends React.Component {
//     render () {
//         return (
//             <section id='kontakt' className='contact'>
//                 <div className='kontaktHeader'>Kontakt</div>
//                 <form className="contactForm" action="index.html" method="post">
//                     <input type="text" name="name" value="" placeholder="Imię"/>
//                     <input type="email" name="email" value="" placeholder="email"/>
//                     <textarea name="message" rows="8" cols="40" placeholder="Wiadomość"></textarea>
//                 </form>
//                 <button class="contactButton">Wyślij</button>
    
//             </section>
//         )
//     }
// }