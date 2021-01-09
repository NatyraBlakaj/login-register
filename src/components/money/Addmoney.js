import React, {Component} from 'react';
import firebase from "../../firebase";
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Consumer} from '../Context'
import './Addmoney.css';

class Addmoney extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    return <Formik
                        initialValues={{activeMoney: ''}}

                        onSubmit={formValues => {
                            const vleraAktiveMonedhave = value.money.activeMoney;
                            let shumaReEMonedhave = formValues.activeMoney;
                            const shumaTotale = parseInt(vleraAktiveMonedhave) + parseInt(shumaReEMonedhave);
                            const updateRef = firebase.firestore().collection('money').doc('o6gaS9eLygWxAZAJG05ZO');
                            updateRef.set({
                                activeMoney: shumaTotale
                            });
                            this.props.history.push('/Dashboard');
                        }}

                        validationSchema={Yup.object().shape({

                            activeMoney: Yup.string()
                                .required('Required')
                        })}>
                        {props => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            } = props;
                            return (
                                <div id="money-document">
                                    <div className="moneyform border p-0 col-lg-4 col-md-7 col-sm-10 col-xs-10 ml-auto mr-auto">
                                        <div className="card-header h3 addmoney-element">Add money</div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>

                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="activeMoney"
                                                        placeholder="Enter Money..."
                                                        value={values.activeMoney}
                                                        onBlur={handleBlur}
                                                        className=' form-control {errors.activeMoney && touched.activeMoney && "erros"}'
                                                        onChange={handleChange}/>
                                                </div>
                                                {errors.activeMoney && touched.activeMoney && (
                                                    <div className="input-feedback">{errors.activeMoney}</div>
                                                )}

                                                <input
                                                    type="submit"
                                                    value="Add money"
                                                    className="btn moneybtn btn-block"
                                                    disabled={isSubmitting}
                                                />
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        }
                    </Formik>
                }}
            </Consumer>
        )
    }
}

export default Addmoney;