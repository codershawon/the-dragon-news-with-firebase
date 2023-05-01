import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user,loading
    }=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
    if(loading){
        return  <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }

    if(user){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
}

export default PrivateRoutes;

/* ---------------
STEPS=>
1. check user logged in or not
2. If user logged in allow the user to visit the route
3. Else redirect user in login page
4. Setup private route
5. handle Loading
----------------------- */