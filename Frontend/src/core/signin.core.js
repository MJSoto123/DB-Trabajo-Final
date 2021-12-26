import React, { useReducer, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { TYPES } from "../actions/signin.actions";
import { getAllCategories } from "../api/categories.api";
import { Header } from "../components/header.component";
import { SignInForm } from "../components/signinForm.component";
import { Alert, Row, Col } from 'reactstrap';
import { signin } from "../api/user.api";
import { signinInitialState, signinReducer } from "../reducers/signin.reducers";
import { authenticate, isAuthenticated } from "../functions/isAutenticated.function";

export const SignIn = () => {

  const [state, dispatch] = useReducer(signinReducer, signinInitialState);

  useEffect(()=>{
    getAllCategories().then(res => {
      console.log(res);
      dispatch({ type: TYPES.READ_CATEGORIES_DATA, payload: res})
    })
  },[]);

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    NavigateToReferrer: false
  });

  const {email, password, loading, error, NavigateToReferrer} = values;
  const {user} = isAuthenticated();
  
  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error: false, loading: true})
    signin({email, password})
      .then(data => {
        if (data.error) {
          setValues({...values, error: data.error, loading:false})
        } else {
          authenticate(
            data, () => {
              setValues({
                ...values,
                NavigateToReferrer: true
              })
            }
          )
        }
      })
  }

  const NavigateUser = () => {
    if(NavigateToReferrer) {
      if (user) {
        return <Navigate replace to={`/`} />
      }
    }
    if(isAuthenticated()) {
      if (user) {
        return <Navigate replace to={`/`} />
      }
    }
  }

  const showError = () => (
    error && (<div className="mt-4 text-center">
      <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Alert color="danger">
              {error}
            </Alert>
          </Col>
      </Row>
    </div>)
  )

  const showLoading = () => (
    loading && (
      <div className="alert alert-info text-center">
        <h2>Cargando...</h2>
      </div>
    )
  )


  return (
    <div>
      <Header/>
      <SignInForm
          onClick={clickSubmit}
          onChangeEmail={handleChange('email')}
          onChangePassword={handleChange('password')}
          email={email}
          password={password}
        />
        {showError()}
        {showLoading()}
        {NavigateUser()}
    </div>
  )
}