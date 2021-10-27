import React from 'react'
import styled from 'styled-components';
// import pic from '../Lucky/AboutUI.png'
import pix from '../Lucky/hotelimages/About.jpg'
import pics from '../Lucky/hotelimages/AboutCard.jpg'
import pixs from '../Lucky/hotelimages/AboutCard1.jpg'
import pices from '../Lucky/hotelimages/AboutCard2.jpg'
import imag from '../Lucky/hotelimages/AboutCard8.jpg'
import ima from '../Lucky/hotelimages/AboutCard3.jpg'
import imagi from '../Lucky/hotelimages/AboutCard5.jpg'

const About = () => {
    return (
        <AboutContainer>
            {/* <Logo src={pic} /> */}
            About Us
            <Wrapper>
                <WrapHold>
                <Text>
                Connecting with like-minded thinkers and collaborating with members from similar (or different) industries results in a more progressive and successful work environment.
                 We have made it easy to connect through the AW app or through our monthly social and business events._
                Connecting with like-minded thinkers and collaborating with members from similar (or different) industries results in a more progressive and successful work environment.
                 We have made it easy to connect through the AW app or through our monthly social and business events._
                Connecting with like-minded thinkers and collaborating with members from similar (or different) industries results in a more progressive and successful work environment.
                 We have made it easy to connect through the AW app or through our monthly social and business events._
                </Text>
                <Image img src={pix} />
                </WrapHold>
            </Wrapper>
            <OtherCard>
                    What We Offer
                </OtherCard>
                <CardHolder>
                <Card src={ pics} />
                    <Card1 src={ pixs}/>
                    <Card2 src={ pices}/>   
                </CardHolder>

            <FindCard>
                    Find Your Place
                </FindCard>
                <FindHolder>
                Complete Comfort
                    <Find src={ imag} />
                        Everything Luxury
                    <Find src={ ima} />
                    Sweet Time
                    <Find src={ imagi} />
                </FindHolder>

        <HoldFind>
        {/* <LastCard>Discover</LastCard> */}
        </HoldFind>

        </AboutContainer>
    )
}

export default About;

const LastCard = styled.div`
Width: 150px;
height: 100px;
background-color: #ff9200;
display: flex;
justify-content: center;
align-items: center;
`

const AboutContainer = styled.div`
width: 100%;
// height: 100vh;
font-size: 25px;
font-weight: bold;
// color: black;
display: flex;
justify-content: center;
flex-wrap: wrap;
// justify-content: space-between;
`;
const Wrapper = styled.div`
width:100%;
// height: 100%;
color: gray;
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;

`;
const Find = styled.img`
// object-fit: cover;
// width: 350px;
// height: 350px;
// // border-radius: 30px;
// // color: #FFFFFF
width: 400px;
height: 400px;
background-color: #ff9200;
margin: 70px;
object-fit: cover;
justify-content: space-between;
align-items: center;
`;

const FindHolder = styled.div`
width: 70%;
display: flex;
justify-content: space-around;
align-items: center;
`

const FindCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
`


const HoldFind = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const WrapHold = styled.div`
width: 70%;
display: flex;
justify-content: space-around;
align-items: center;
// padding-bottom: 120px;
`;
const Text = styled.div`
width: 350px;
height: 350px;
font-weight: bold;
font-size: 15px;
font-family: Roboto;
color: gray;
display: flex;
justify-content: center;
align-items: center;

`;
const Image = styled.img`
width: 350px;
height: 350px;
object-fit: cover;
justify-content: center;
// margin: 350px;
`;
const OtherCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;

`;
const Card = styled.img`
width: 400px;
height: 400px;
background-color: #ff9200;
margin: 70px;
object-fit: cover;
justify-content: space-between;
align-items: center;

`;

const Card1 = styled.img`
width: 400px;
height: 400px;
background-color: #ff9200;
margin: 70px;
object-fit: cover;
justify-content: space-between;
align-items: center;

`;

const Card2 = styled.img`
width: 400px;
height: 400px;
background-color: #ff9200;
margin: 70px;
object-fit: cover;
justify-content: space-between;
align-items: center;
`;

const CardHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;