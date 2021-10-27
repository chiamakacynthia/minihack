import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import img1 from "./2.png";
import { app } from "../base";
import firebase from "firebase";

const Register = () => {
  const [hotelReg, setHotelReg] = useState(true);
  const [roomReg, setRoomReg] = useState(false);
  const [percent, setPercent] = useState(0);
  const [image, setImage] = useState(img1);
  const [avatar, setAvatar] = useState("");

  const regHotel = () => {
    setHotelReg(true);
    setRoomReg(false);
  };
  const regRoom = () => {
    setHotelReg(false);
    setRoomReg(true);
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);

    const fileRef = await app.storage().ref();
    const storeRef = fileRef.child("avatar/" + file.name).put(file);

    storeRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapShot) => {
        const counter = (snapShot.bytesTransferred / snapShot.totalBytes) * 100;

        setPercent(counter);
        console.log(counter);
      },
      (err) => console.log(err.message),
      () => {
        storeRef.snapshot.ref.getDownloadURL().then((URL) => {
          setAvatar(URL);
          console.log(URL);
        });
      }
    );
  };

  return (
    <Container id="/register">
      <Wrapper>
        <ButtonHolder>
          <Button1 onClick={regHotel}>Register An Hotel</Button1>
          <Button1 onClick={regRoom}>Create a new Room</Button1>
        </ButtonHolder>
        {hotelReg ? (
          <CardHolder>
            <Image src={image} />
            <HoldLabel>
              <Input type="file" id="up" onChange={uploadImage} />
            </HoldLabel>
            <Label htmlFor="up">Upload Image</Label>
            <Input placeholder="Enter Hotel Name" />
            <Input placeholder="Enter Hotel's Description " />
            <Input placeholder="Enter your Full Address" />
            <HoldOption>
              <select>
                <option>Please Choose a Location</option>
                <option>Ajegunle</option>
                <option>Apapa</option>
                <option>Festac</option>
              </select>
            </HoldOption>
            <Button1>Register</Button1>
          </CardHolder>
        ) : (
          <CardHolder>
            <Image src={image} />
            <HoldLabel>
              <Input type="file" id="up" onChange={uploadImage} />
            </HoldLabel>
            <Label htmlFor="up">Upload Room Image</Label>
            <Input placeholder="Enter Room Number" />
            <Input placeholder="Enter Room's Description " />
            <Input placeholder="Enter Price " />
            <Input placeholder="Enter your Max no of persons" />
            <HoldOption>
              <select>
                <option>Please Choose a Category</option>
                <option>Regular</option>
                <option>Standard</option>
                <option>Luxury</option>
              </select>
            </HoldOption>
            <Button1>Register</Button1>
          </CardHolder>
        )}
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 700px;
  min-height: 600px;
  height: 100%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 100%;
    min-height: 500px;
    flex-wrap: wrap;
  }
`;

const ButtonHolder = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Button1 = styled.div`
  font-weight: bold;
  height: 40px;
  width: 200px;
  background-color: #004080;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transition: all 350ms;
  cursor: pointer;
  margin: 5px;
  &:hover {
    transform: scale(0.99);
  }
`;
const Image = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  /* border-radius: 10px; */
  margin: 5px 0px;
  border: 1px solid #004080;
`;
const CardHolder = styled.div`
  width: 280px;
  display: flex;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;

  height: 100%;
  flex-direction: column;
  Input {
    margin: 10px 0px;
  }
  Button {
    width: 100%;
    background-color: ${({ clr }) => (clr ? "red" : "#004080")};
  }
  div {
    font-weight: bold;
    margin: 5px 0px;
  }
`;

const HoldLabel = styled.div`
  display: none;
`;
const Label = styled.label`
  padding: 10px;
  background-color: #004080;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  margin: 5px 0px;
`;

const Text = styled.div`
  margin: 5px 0px;
  align-items: center;
  display: flex;
  div {
    margin-left: 5px;
    color: #004080;
    cursor: pointer;
    font-weight: bold;
  }
`;

const HoldOption = styled.div`
  width: 100%;
`;
