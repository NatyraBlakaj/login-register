import React, {Component} from 'react';
import firebase from "../firebase";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        isLoggedIn: false,
        outlays: [],
        money: [],
    };

    componentDidMount() {
        let a = firebase.firestore().collection('outlays');
        a.onSnapshot((querySnapshot) => {
            let array = [];
            querySnapshot.forEach(item => {
                var object = {};
                object.id = item.id;
                object.name = item.data().name;
                object.price = item.data().price;
                array.push(object);
            })
            this.setState({outlays: array});
        })

        let b = firebase.firestore().collection('money');
        b.onSnapshot((querySnapshot) => {
            querySnapshot.forEach(items => {
                this.setState({money: items.data()});
            })

        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;