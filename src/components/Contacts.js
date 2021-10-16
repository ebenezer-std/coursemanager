import React, { Component, Fragment } from 'react';
import Contact from './Contact.js';
import {Consumer} from '../Context';


class Contacts extends Component {


    render() {
        return(
            <Consumer >
                {value => ( 
                     <React.Fragment>
               { value.contacts.map((contacts) =>
                <Contact 
                key= {contacts.id}
                contact = {contacts} />
                )  
                }

            </React.Fragment >)}
            </Consumer>
        )
    }
}

export default Contacts;
