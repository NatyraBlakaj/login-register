import React, {Component} from 'react';
import firebase from "../../firebase";
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import * as EmailValidator from 'email-validator';
import './Outlay.css';



class Outlay extends Component {

    render() {


        return (
            <Formik
                initialValues={{name: '', price: ''}}
                onSubmit={values => {

                    firebase.firestore().collection("outlays").add({
                        name: values.name,
                        price: parseInt(values.price),


                    })
                    this.props.history.push('/Dashboard');
                }}


                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('Required')
                        .min(3, 'Too Short!'),
                    price: Yup.string()
                        .required('Required')


                })}
            >
                {
                    props => {
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
                            <div id="outlay-document">
                                <div className="outlayform border p-0 col-lg-4 col-md-7 col-sm-10 col-xs-12 ml-auto mr-auto">
                                    <div className="card-header h3 add-element">Add shpenzimet</div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>

                                            <div className="form-group form-group-lg">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Name..."
                                                    value={values.name}
                                                    onBlur={handleBlur}
                                                    className=' form-control {errors.name && touched.name && "erros"}'
                                                    onChange={handleChange}/>
                                            </div>
                                            {errors.name && touched.name && (
                                                <div className="input-feedback">{errors.name}</div>
                                            )}

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="price"
                                                    placeholder="Enter Price..."
                                                    value={values.price}
                                                    onBlur={handleBlur}
                                                    className='form-control {errors.price && touched.price && "erros"}'
                                                    onChange={handleChange}/>

                                            </div>
                                            {errors.price && touched.price && (
                                                <div className="input-feedback">{errors.price}</div>
                                            )}

                                            <input
                                                type="submit"
                                                value="Add shpenzimet"
                                                className="btn addbtn btn-block"
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
        );
    }

}

export default Outlay;