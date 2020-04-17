import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Login from './Login'
import auth from '../firebase';
import Editwork from './EditWork';
const Admin = () => {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };
  return (
    <div>
      {session.isLoggedIn ? (
        <div>
          <Navbar />
          <div className="container-fluid">
            <h3>Hello Admin: {session.currentUser && session.currentUser.email}
              <button style={{ marginLeft: "8px" }} className="btn btn-danger btn-sm"
                onClick={handleLogout}>logout</button> </h3>
            <diV  className="container-fluid" >
            <div class="row">
              <div class="col-sm-6">
              <Form />
            
              </div>
              <div class="col-sm-6">
              <Editwork />
              </div>
            </div>
          </diV>    
          </div>
          
        </div>

      ) : (
          <Login setSession={setSession} />

        )}

    </div>
  )
}
export default Admin