import React from 'react'
import styled from 'styled-components';
import pic from '../Lucky/AboutUI.png'
import pix from '../Lucky/hotelimages/About.jpg'

const About = () => {
    return (
        <AboutContainer>
            {/* <Logo src={pic} /> */}
            <Wrapper>
            About Us

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
                <OtherCard>
                    What We Offer
                    <Card>
                        <span>Page1</span>
                        <span>Page2</span>
                        <span>Page3</span>
                    </Card>
                    {/* <Card>page 2</Card> */}
                    {/* <Card>page 3</Card> */}
                </OtherCard>
            </Wrapper>
        </AboutContainer>
    )
}

export default About;

const AboutContainer = styled.div`
width: 100vw;
height: 100%;
font-size: 25px;
font-weight: bold;
// color: black;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;
const Wrapper = styled.div`
width:100%;
height: 100vh;
color: gray;
display: flex;
justify-content: center;
`;
// const Logo = styled.img`
// object-fit: cover;
// width: 350px;
// height: 350px;
// // border-radius: 30px;
// color: #FFFFFF
// `;

const WrapHold = styled.div`
display: flex;
justify-content: space-between;
// flex-direction: row;
align-items: center;
padding-bottom: 120px;
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
justify-content: space-between;
// align-items: center;

`;
const Card = styled.div`
width: 400px;
height: 400px;
background-color: #ff9200;
margin: 70px;
justify-content: space-between;
align-items: center;

`;