import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../Context';



class Contact extends Component {
    state={
        showComponents: false
    }

    onDeleteClick=(id,dispatch) =>{
        dispatch({type:'DELETE CONTACT', payload: id});
    };



    render() {
        const {id, name, email, tel} = this.props.contact;
        const{showComponents}= this.state;
        
        return (
            <Consumer>
                {
                value=>{
                    return(
                         <div>
                <h4>{name}
                <i className="fas fa-caret-down" onClick=
                {()=> 
                this.setState({showComponents: !showComponents})}></i>
                
                </h4>
                {
                    showComponents && (<ul >
                <li>Email: {email}</li>
                <li>Phone: {tel}</li>
                </ul> )
                }
                
                

                
            </div>

                    )
                }
                }
                
            </Consumer>
           
        )
    }
}

Contact.propTypes={
    contact: PropTypes.object.isRequired
}

export default Contact;

