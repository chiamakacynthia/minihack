import React from 'react'
import styled from 'styled-components';
import pic from '../Lucky/AboutUI.png'
import pix from '../Lucky/hotelimages/About.jpg'

const About = () => {
    return (
        <AboutContainer>
            About Us
            {/* <Logo src={pic} /> */}
            <Wrapper>
                <WrapHold>
                <Text>
                Connecting with like-minded thinkers and collaborating with members from similar (or different) industries results in a more progressive and successful work environment.
                 We have made it easy to connect through the AW app or through our monthly social and business events._
                </Text>
                <Image>
                    <img src={pix} />
                </Image>
                </WrapHold>
            </Wrapper>
        </AboutContainer>
    )
}

export default About;

const AboutContainer = styled.div`
font-size: 25px;
font-weight: bold;
color: black;
`;
const Wrapper = styled.div`
width:100%;
height: 100vh;
color: #FF9200;
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
justify-content: space-around;
align-items: center;
`;
const Text = styled.div`
width: 350px;
height: 350px;
font-weight: bold;
font-size: 15px;
color: black;
`;
const Image = styled.div`
width: 650px;
height: 350px;
object-fit: cover;
`;
// const  = styled.div``;
// const WrapHold = styled.div``;