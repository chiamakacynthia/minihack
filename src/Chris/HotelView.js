import React from 'react'
import styled from "styled-components"

const HotelView = () => {
    return (
        <Container>
           <Wrapper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
           </Wrapper> 
        </Container>
    )
}

export default HotelView
const Card = styled.div`
  flex-wrap: wrap;
  width: 300px;
  min-height: 350px;
  padding-bottom: 20px;
  border-radius: 5px;
  margin: 10px;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  
  overflow: hidden;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.01);

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  min-height: 100vh;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;

`;

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
display: flex;
justify-content: center;
`