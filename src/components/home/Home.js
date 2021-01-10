import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import {Form} from 'formik';
import * as Yup from 'yup';
import './Home.css';
import Auth from '../../services/auth';

class Home extends Component {

    render() {
        return (
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    if (Auth.login(values.email, values.password)) {
                        this.props.history.push('/Dashboard');
                    } else {
                        alert('Kredencialet jane te gabuara')
                    }
                    //localStorage.setItem('loggedIn', 'true');
                    //this.props.history.push('/Dashboard');


                }}

                validationSchema={Yup.object().shape({
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
                        <div id='home-document'>
                            <div className="forma border col-lg-4 col-md-7 col-sm-10 col-xs-12 p-0 ml-auto mr-auto">
                                <div className="card-header h3 mb-3 login-element w-100">Login</div>
                                <div className="card-body">
                                    <Form onSubmit={handleSubmit}>

                                        <div className="form-group form-group-lg">
                                            <input
                                                name="email"
                                                type="text"
                                                placeholder="Enter Email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className='form-control {errors.email && touched.email && "erros"}'
                                            />

                                        </div>
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}

                                        <div className="form-group col-xs-4">
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className='form-control input-lg{errors.password && touched.password && "erros"}'

                                            />
                                        </div>
                                        {errors.password && touched.password && (
                                            <div className="input-feedback">{errors.password}</div>
                                        )}

                                        <button className="btn  btn-block loginbtn" type="submit"
                                                disabled={isSubmitting}>Login
                                        </button>


                                        <br/>
                                        <Link to={'./Register'}>Create new account</Link>

                                    </Form>
                                </div>

                            </div>
                        </div>

                    )
                }
                }
            </Formik>
        )
    };
}

export default Home;