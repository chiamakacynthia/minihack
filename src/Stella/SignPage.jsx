import React, { useState } from "react";
import styled from "styled-components";
import img1 from "./2.png";
import { Button, Input } from "antd";
import { app } from "../base";
import firebase from "firebase";
import { useHistory, Link } from "react-router-dom";

const SignPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(img1);
  const [avatar, setAvatar] = useState("");
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
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

  const signUp = async () => {
    const saveUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (saveUser) {
      await app.firestore().collection("allUser").doc(saveUser.user.uid).set({
        avatar,
        name,
        email,
        password,
        createdBy: saveUser.user.uid,
      });
      history.push("/register");
    }
  };

  const GoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const saveUser = await app.auth().signInWithPopup(provider);

    if (saveUser) {
      await app.firestore().collection("users").doc(saveUser.user.uid).set({
        avatar: saveUser.user.photoURL,
        name: saveUser.user.displayName,
        email: saveUser.user.email,
        password,
        createdBy: saveUser.user.uid,
      });
      history.push("/");
    }
  };

  const Login = async () => {
    const saveUser = await app
      .auth()
      .signInWithEmailAndPassword(email, password);

    history.push("/");
  };

  return (
    <Container id="/SignPage">
      {show ? (
        <Wrapper>
          <CardHolder>
            <HoldLabel>
              <Input type="file" id="up" onChange={uploadImage} />
            </HoldLabel>
            <Label htmlFor="up">Upload Image</Label>
            <Input
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button onClick={signUp}>Sign Up</Button>
            <div>Or</div>
            <Button onClick={GoogleSignIn} style={{ backgroundColor: "red" }}>
              Sign Up With Google
            </Button>
            <Text>
              Already have an account? <div onClick={toggle}>Log in</div>
            </Text>
          </CardHolder>
          <Image src={image} />
        </Wrapper>
      ) : (
        <Wrapper>
          <CardHolder>
            <Input
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button onClick={signUp}>Log In</Button>

            <Text>
              Don't have an account? <div onClick={toggle}>Sign Up</div>
            </Text>
          </CardHolder>
          {/* <h1>Login</h1> */}
        </Wrapper>
      )}
    </Container>
  );
};

export default SignPage;

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
  height: 500px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 100%;
    min-height: 500px;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 50%;

  /* margin: 10px 10px; */
  border-radius: 10px;
  border: 1px solid #004080;
  @media screen and (max-width: 768px) {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
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
