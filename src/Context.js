import React, {Component} from 'react';

const Context = React.createContext;
const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !==action.payload
                )
            };
            default:
                return state;

    }
       
}

export class Provider extends Component{

        state = {
        contacts: [
            {
                id: 1,
                name: "Ebenezer Anertey",
                email: "eabbey@russolution.com",
                tel: "+23354788003"
            },
            {
                id: 2,
                name: "Beatrice Anertey",
                email: "bea@russolution.com",
                tel: "+23354788003"
            },
            {
                id: 3,
                name: "Sarah Anertey",
                email: "sarah@russolution.com",
                tel: "+23354788003"
            }
        ],
        dispatch: action=> this.setState(state=>
            reducer(state, action))
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>

        )
    }
}

export const Consumer = Context.Consumer;


