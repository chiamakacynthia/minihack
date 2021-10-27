import React from 'react'
import styled from "styled-components"
import {TiTick} from "react-icons/ti"
import img from "./img.jpg"
import img1 from "./img1.jpg"

const Booking = () => {
    return (
        <Container id="/Booking">
            <Wrapper>
                <Avialable>Avialable room From: 08/14/2019 To: 08/15/2019 | Standard Room</Avialable>
                <CardHolders>
                    <Cards>
                        <Pictures src={img}/>
                            <CardItems>
                            <Title>Wing A Standard Room</Title>
                        <TV>without TV</TV>
                        <TicksDetailsHolders>
                        <TickAndDetails>
                            <TickIcon>
                                <Circle>
                                    <Tick>
                                   <TiTick/>
                                   </Tick>
                                </Circle>
                            </TickIcon>
                            <Details>Number of Person -1</Details>
                        </TickAndDetails>
                        <TickAndDetails>
                            <TickIcon>
                                <Circle>
                                    <Tick>
                                   <TiTick/>
                                   </Tick>
                                </Circle>
                            </TickIcon>
                            <Details>Remaining-rooms: 1</Details>
                        </TickAndDetails>
                        </TicksDetailsHolders>

                        <TheDays>
                            <Days>10/</Days>
                            <Night>Night</Night>
                        </TheDays>
                        <BookButton>Book Now!</BookButton>
                            </CardItems>
                     </Cards>
                    <Cards>
                        <Pictures src={img1}/>
                            <CardItems>
                            <Title>Wing B and Ground Floor Standard Room</Title>
                        <TV>without TV</TV>
                        <TicksDetailsHolders>
                        <TickAndDetails>
                            <TickIcon>
                                <Circle>
                                    <Tick>
                                   <TiTick/>
                                   </Tick>
                                </Circle>
                            </TickIcon>
                            <Details>Number of Person -1</Details>
                        </TickAndDetails>
                        <TickAndDetails>
                            <TickIcon>
                                <Circle>
                                    <Tick>
                                   <TiTick/>
                                   </Tick>
                                </Circle>
                            </TickIcon>
                            <Details>Remaining Rooms: -1</Details>
                        </TickAndDetails>
                        </TicksDetailsHolders>

                        <TheDays>
                            <Days>725/</Days>
                            <Night>Night</Night>
                        </TheDays>
                        <BookButton>Book Now!</BookButton>
                            </CardItems>
                     </Cards>
                </CardHolders>
            </Wrapper>
        </Container>
    )
}

export default Booking

const BookButton = styled.div`
width: 200px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: #FF9200;
color: black;
font-size: 16px;
letter-spacing: 0.5px;
transform: scale(1);
transition: all 350ms;
cursor: pointer;
:hover{
    transform: scale(1.03);
    border: solid 3px #FF9200;
    background-color: white;
    font-size: 17px;
}
`


const Night = styled.div`
color: gray;
font-weight: bold;
font-size: 14px;
display: flex;
align-items: center;
justify-content: flex-end;
padding-bottom: 8px;
`

const Days = styled.div`
font-size: 30px;
color: #FF9200;
font-weight: bold;
margin-right: 3px;
`

const TheDays = styled.div`
display: flex;
align-items: center;
align-items: flex-end;
margin-bottom: 30px;
`

const Details = styled.div`
font-size: 16px;
color: gray;
`

const Tick = styled(TiTick)`
        color: #FF9200;
        font-size: 14px;
        width: 28px;
        height: 28px;
`
const Circle = styled.div`
width: 23px;
height: 23px;
border-radius: 50%;
border: solid 3px #FF9200;
display: flex;
justify-content: center;
align-items: center;

`

const TickIcon = styled.div`
display: flex;
margin-right: 20px;
`

const TickAndDetails = styled.div`
display: flex;
align-items: center;
margin: 10px 0; 
`

const TicksDetailsHolders = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
`

const TV = styled.div`
font-size: 17px;
letter-spacing: 0.7px;
margin-bottom: 15px;
color: gray;
`

const Title = styled.div`
font-size: 32px;
margin-bottom: 20px;
color: gray;
font-weight: 1000px;
font-family: arial;
letter-spacing: 0.7px;
line-height: 40px;
`

const CardItems = styled.div`
display: flex;
flex-direction: column;
width: 93%;
`

const Pictures = styled.img`
width: 100%;
height: 35%;
object-fit: cover;
background-color: gray;
margin-bottom: 20px;



`
const Cards = styled.div`
display: flex;
flex-direction: column;
border: solid 2px lightgray;
height: 650px;
width: 360px;
background-color: white;
align-items: flex-end;
box-shadow: lightgray 2px 6px 4px;
border-radius: 8px;
overflow: hidden;
margin-right: 30px;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
`

const CardHolders = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
`
const Avialable = styled.div`
width: 100%;
color: gray;
font-size: 18px;
margin-bottom: 10px;
display: flex;
flex-wrap: wrap;
@media screen and (max-width: 320px){
    text-align: center;
}
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top: 50px;


`

const Wrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
flex-direction: column;
`