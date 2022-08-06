import React, { useEffect } from 'react';
import './App.css';
import { useMoralis } from "react-moralis";
import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import { Row, Col } from 'antd';
import './Home.css';
import NFT from './NFT';
import CampaigneProgressBar  from './CampaigneProgressBar';


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

    let X = Array();
    for (const x of Array(5).keys()) {
      X.push(x);
    }
    console.log(X)

    const NFTS = X.map( x => {
      const src = "https://picsum.photos/2000/300"+x+"/";
    return (<Col span={6} offset={1}>
      <NFT src={src} price={(x+1)/10}/>
    </Col>)})

  return (
    <div>
      <h1>Moralis Hello World!</h1>
      <Col span={6} offset={13}>
        <CampaigneProgressBar amount={2.01} goalAmount={10}/>
      </Col>
      {buttons}
      {(user) ? user.get("ethAddress") : ''}
      <Row style={{marginBottom:'20px'}}>
        {NFTS}
        
      </Row>
    </div>
  );
}

export default Home;