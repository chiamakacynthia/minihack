import React from 'react'
import styled from 'styled-components'
import BackgroundImg from "./hotelimages/Header.jpg"
import {Link} from "react-router-dom"

const Landing = () => {
    return (
        <Container>
            <Wrapper>
                <Header>
                   <Content>
                 
                   <Title>Book Your Stay</Title>
                    <span>Fusce erat dui, venenatis et erat in, 
                        vulputate dignissim lacus. Donec vitae
                        tempus dolor, sit amet elementum lorem.
                        Ut cursus tempor turpis.
                    </span>
                  <Link to="/Booking">  <Button >Book Now</Button> </Link>

                    <BookContainer>
                            <BookContant>
                                <select>
                                    <option>Check in</option>
                                    <option>Check in</option>
                                </select>
                                <select>
                                    <option>Check out</option>
                                </select>
                                <select>
                                    <option>Person</option>
                                </select>
                                <select>
                                    <option>Accomodation</option>
                                </select>
                                <button>Book Now</button>
                            </BookContant>
                    </BookContainer>
                   </Content>
                </Header>
            </Wrapper>
        </Container>
    )
}

export default Landing
const BookContant = styled.div`
    width: 95%;
    height: 80%;
    margin-top: 9px;
    /* background-color: gray; */

    select{
        width: 170px;
        height: 50px;
        margin: 50px 5px;
        outline: none;
        border: none;
        background-color: rgba(206, 204, 204, 0.521);
        color: gray;
    }

    button{
        width: 220px;
        height: 50px;
        background-color: #ff9200;
        border: none;
    }
`
const BookContainer = styled.div`
    width: 80%;
    height: 50%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`
const Button = styled.div`
    margin-top: 83px;
    width: 200px;
    height: 50px;
    background-color: #ff9200;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
`
const Title = styled.div`
    margin-top: 50px;
    font-size: 50px;
    color: #fff;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic; 
`
const Content = styled.div`
    width: 100%;
    height: 450px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    span{
        width: 60%;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        margin-top: 10px;
    }
`
const Header = styled.div`
    width: 100%;
    height: 406px;
    display: flex;
    justify-content: center;
    background: url(${BackgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;

    :after{
        content: "";
        top: 0;
        width: 100%;
        height: 406px;
        background-color: rgba(0, 0, 0, 0.718);
        position: absolute;
        z-index: -2;
    }
    /* background-color: green; */
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`
