import React, {Component} from 'react';
import {Formik} from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import './Register.css';


class Register extends Component {


    render() {
        return (
            <Formik initialValues={{name: '', email: '', password: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                    }}

                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required('Required')
                            .min(2, 'Name is too short'),
                        email: Yup.string()
                            .email()
                            .required('Required'),
                        password: Yup.string()
                            .required('Required')
                            .min(8, 'Password is too short should be 8 character minimum')
                            .matches(/(?=.*[0-9])/, 'Password must contain number')

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
                        <div className="home-document-register">
                            <div className="formregister border p-0 col-lg-4 col-md-7 col-sm-10 col-xs-12 ml-auto mr-auto">
                                <div className="card-header h3 mb-3 register-element">Register</div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className="forma2">
                                        <div className="form-group">

                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Enter your name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className='form-control {errors.name && touched.name && "erros"}'
                                            />
                                        </div>
                                        {errors.name && touched.name && (
                                            <div className="input-feedback">{errors.name}</div>
                                        )}

                                        <div className="form-group">

                                            <input
                                                name="email"
                                                type="text"
                                                placeholder="Enter your email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className='form-control {errors.email && touched.email && "erros"}'
                                            />
                                        </div>
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}

                                        <div className="form-group">

                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className='form-control {errors.password && touched.password && "erros"}'
                                            />
                                        </div>
                                        {errors.password && touched.password && (
                                            <div className="input-feedback">{errors.password}</div>
                                        )}

                                        <button className="btn  btn-block registerbtn " type="submit"
                                                disabled={isSubmitting}>Register
                                        </button>

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

export default Register;