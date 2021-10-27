import React from 'react'
import styled from 'styled-components'
import img1 from './Images/pexels-photo-164595.jpeg'
import img2 from './Images/pexels-photo-2747901.jpeg'
import img3 from './Images/pexels-max-vakhtbovych-6284232.jpg'
import check from './Images/icons8_checked_50px_1.png'

const SecondPart = () =>{
    return(
        <Container>
            <Wrapper>
                <Card>
                    <Image src={img1} alt= ''/>
                    <BigWord>Wing A Standard Room</BigWord>
                    <SmallWord>without TV</SmallWord>
                    <Number1>
                    <img src={check} alt=''/>
                    Number of Person - 1</Number1>
                    <Number2>
                    <img src={check} alt=''/>
                    Remaining Rooms: 1</Number2>
                    <Price><span>#10/</span> Night</Price>
                    <Button>Book Now</Button>
                </Card>
                <Card>
                    <Image src={img2} alt= ''/>
                    <BigWord>Wing A Travellers Time</BigWord>
                    <SmallWord>without TV</SmallWord>
                    <Number1>
                    <img src={check} alt=''/>
                    Number of Person - 1</Number1>
                    <Number2>
                    <img src={check} alt=''/>
                    Remaining Rooms: 1</Number2>
                    <Price><span>#445/</span> Night</Price>
                    <Button>Book Now</Button>
                </Card>
                <Card>
                    <Image src={img3} alt= ''/>
                    <BigWord>Wing A Bayanihan Room</BigWord>
                    <SmallWord>without TV</SmallWord>
                    <Number1>
                    <img src={check} alt=''/>
                    Number of Person - 1</Number1>
                    <Number2>
                    <img src={check} alt=''/>
                    Remaining Rooms: 1</Number2>
                    <Price><span>#1250/</span> Night</Price>
                    <Button>Book Now</Button>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default SecondPart

const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 50px;
`
const Card = styled.div`
    width: 350px;
    height: 550px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    transform: scale(1);

    :hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`
const Image = styled.img`
    width: 100%;
    height: 40%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px 10px 0px 0;
`
const BigWord = styled.div`
    height: 20%;
    width: 80%;
    margin-top: 10px;
    font-size: 30px;
    line-height: 40px;
    font-weight: 500;
    text-align: left;
    color: grey;
    margin-left: 20px;
`
const SmallWord = styled.div`
    color: grey;
    margin-left: 20px;
    color: grey;
`
const Number1 = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
    color: grey;
    display: flex;
    align-items: center;
`
const Number2 = styled.div`
    margin-left: 20px;
    color: grey;
    display: flex;
    align-items: center;
`
const Price = styled.div`
    margin-left: 20px;
    font-weight: bold;

    span{
        color: #FF9200;
        font-size: 30px;
        font-family: poppins;
        font-weight: Bold;
    }
`
const Button = styled.div`
    width: 200px;
    height: 70px;
    background-color: #FF9200;
    margin-left: 80px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600px;
    margin-bottom: 10px;
    transition: all 350ms;

    :hover{
        background-color: #b76900;
        color: white;
    }
`