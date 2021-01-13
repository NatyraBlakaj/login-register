import React, {Component} from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';
import {Consumer} from "../Context";
import firebase from "../../firebase";
import EditOutlays from "../edit/EditOutlays";

class Dashboard extends Component {


    render() {


        return (
            <Consumer>

                {value => {
                    return (
                        <div id="dashboard-document">
                            <nav
                                className="navbar navbar-expand-lg navbar-light navheader d-flex justify-content-between">
                                <a className="navbar-brand text-white" href="#">Login</a>
                                <a className="navbar-brand text-white" href="#" onClick={() => {
                                    localStorage.clear();
                                }}>Log out</a>
                            </nav>
                            <div>
                                <div className="container">
                                    <div className="moreinfo d-flex justify-content-end align-items-center mt-2 mb-5s">
                                        <Link to={'./Addmoney'} className="btn btnshtomonedha">Shto monedha</Link>
                                        <span
                                            className="totali font-weight-bold ml-2 h2">
                                        {value.outlays.reduce((a, v) => a = a + v.price, 0)}/{value.money.activeMoney}
                                    </span>
                                    </div>

                                    <div className='mb-4 d-flex justify-content-center'>
                                        <Link to={'./Outlay'} className='btn btnshtoshpenzim '>
                                            Shto shpenzime
                                        </Link>
                                    </div>

                                </div>
                                {value.outlays.map(item =>
                                    <div className="d-flex justify-content-center" key={item.id}>
                                        <div className="w-75 mb-2 card tasks">
                                            <div
                                                className="card-body d-flex justify-content-between align-items-center">
                                                <span>{item.name}</span>
                                                <span>{item.price} E</span>
                                                <div className="actions">
                                                    <Link className="btn mr-1" to={`/EditOutlays/${item.id}`}
                                                          onClick={() => {
                                                              localStorage.setItem('editElementName', item.name)
                                                              localStorage.setItem('editElementPrice', item.price)
                                                          }}>
                                                        <i className="far fa-edit"></i>
                                                    </Link>

                                                    <button onClick={this.deleteOutlay = () => {
                                                        firebase.firestore().collection(`outlays`).doc(item.id).delete();
                                                    }}
                                                            className="btn"><i className="fas fa-trash-alt"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }


}

export default Dashboard;