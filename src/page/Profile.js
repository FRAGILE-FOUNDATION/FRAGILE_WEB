import React, { Component } from "react";
import styled, { css } from "styled-components";

function Profile(props) {
  return (
    <>
      <Rect></Rect>
      <Fragile>Fragile</Fragile>
      <TextInput placeholder="Share Profile"></TextInput>
      <TextInput2 placeholder="View Last Drop"></TextInput2>
      <Image
        src={require("../assets/images/Screen_Shot_2022-08-08_at_01.17.39.png")}
      ></Image>
      <Image3
        src={require("../assets/images/Screen_Shot_2022-08-08_at_01.19.20.png")}
      ></Image3>
    </>
  );
}

const Rect = styled.div`
  width: 81px;
  height: 1px;
  background-color: #E6E6E6;
`;

const Fragile = styled.span`
  font-family: Roboto;
  top: 39px;
  left: 152px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 30px;
`;

const TextInput = styled.input`
  font-family: Helvetica;
  top: 33px;
  left: 1156px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  width: 109px;
  height: 30px;
  background-color: rgba(6,0,0,1);
  border-width: 0px;
  border-color: #000000;
  border-style: solid;
  border-radius: 51px;
  text-align: center;
  background: transparent;
`;

const TextInput2 = styled.input`
  font-family: Roboto;
  top: 40px;
  left: 1054px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 94px;
  height: 17px;
  border-width: 0px;
  border-color: #000000;
  border-radius: 57px;
  border-style: solid;
  background: transparent;
`;

const Image = styled.img`
  top: 139px;
  left: 256px;
  width: 303px;
  height: 118px;
  position: absolute;
  object-fit: contain;
`;

const Image3 = styled.img`
  top: 257px;
  left: 177px;
  width: 1045px;
  height: 483px;
  position: absolute;
  object-fit: contain;
`;

export default Profile;
