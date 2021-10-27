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
<<<<<<< HEAD
                    <Button>Book Now</Button>
                   </Content>
                </Header>
                <BookContainer>
                    <BookContant>
=======
                  <Link to="/Booking">  <Button >Book Now</Button> </Link>

                    <BookContainer>
                            <BookContant>
>>>>>>> 5a059c1fff6072c90304486694915f2e8cba60ae
                                <select>
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


                    <AboutContainer>
                        the boy is good
                    </AboutContainer>
            </Wrapper>
        </Container>
    )
}

export default Landing
const AboutContainer = styled.div`
    width: 100%;
    
`
const BookContant = styled.div`
    width: 90%;
    height: 80%;
    margin-top: 9px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: gray; */

    select{
        width: 170px;
        height: 50px;
        margin: 50px 5px;
        outline: none;
        border: none;
        background-color: rgba(206, 204, 204, 0.521);
        color: gray;
        z-index: 10;
    }

    button{
        width: 220px;
        height: 50px;
        background-color: #ff9200;
        border: none;
        color: #fff;
        font-weight: bold;
    }

    @media (min-width: 320px) and (max-width: 1024px){
        width: 100%;
        display: flex;

        button{
            width: 150px;
            margin-top: 10px;
        }

        select{
            width: 120px;
            margin-bottom: 0px;
            height: 50px;
            margin-top: 10px;
        }
    }
`
const BookContainer = styled.div`
    width: 90vw;
    height: 20vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: -110px;
    margin-left: 50px;

    @media (min-width: 320px) and (max-width: 1024px){
        margin: -165px 15px;
        height: 50vh;
    }
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

    @media (min-width: 320px) and (max-width: 1024px){
       margin-top: 0px;
    }
`
const Title = styled.div`
    margin-top: 50px;
    font-size: 50px;
    color: #fff;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic; 

    @media (min-width: 320px) and (max-width: 1024px){
        font-size: 25px;
        font-weight: 700;
    }
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

        @media (min-width: 320px) and (max-width: 1024px){
        font-size: 15px;
        font-weight: 500;
        width: 90%;
        margin-bottom: 20px;
    }
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

    @media (min-width: 320px) and (max-width: 1024px){
        display: flex;
        justify-content: center;
    }
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`
