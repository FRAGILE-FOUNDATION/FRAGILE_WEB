import React, { useEffect } from 'react';
import './App.css';
import { useMoralis } from "react-moralis";

const Home = () => {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            if(user){
              console.log(user.get("ethAddress"));
            }
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

    let buttons = (<button onClick={logOut} disabled={isAuthenticating}>Logout</button>);
    if(!user){
      buttons = (<button onClick={login}>Moralis Metamask Login</button>);
    }

  return (
    <div>
      <h1>Moralis Hello World!</h1>
      {buttons}
    </div>
  );
}

export default Home;