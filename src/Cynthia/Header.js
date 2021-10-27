import React, {useState} from 'react'
import styled from "styled-components"
import SideBar from './SideBar'
import Fade from 'react-reveal/Fade';
import {HiMenuAlt1} from "react-icons/hi"
import {GiCancel} from "react-icons/gi"

const QuaryHeader = () => {

    const [toggle, setToggle] = useState(false)

    const onToggle = ()=>{
        setToggle(!toggle)
    }

    return (
        <Container>
              <Holder>   <Logo src="logo3.png"/> </Holder>
          <Wrapper>
         
           
             <List>
                  <span>Home</span>
                  <span>About</span>
                  <span>Hotels</span>
                  <span>Register a Hotel</span>
               
              </List>
<h> 
    <Button ontoggle={onToggle}>Login</Button>
    <Button1 >Book Now</Button1>
</h>

<MyMenu>
   {toggle ? (
         <Cancel onClick={onToggle}/>
       ) :(
        <MenuIcon onClick={onToggle}/>
       )}
</MyMenu>
          </Wrapper>
          <Fade left when={toggle}>
          <SideBar />
        </Fade>
        </Container>
    )
}

export default QuaryHeader

const Container = styled.div`
width: 100%;
height: 200px;
color: #004080;
background-color:white;
border-bottom: 3px solid #004080;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
/* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-family: railway;
h{
    margin-right: 20px;
    display: flex;
    margin-left: 20px;
justify-content: space-between;
}



`

const Logo = styled.img`
width: 200px;
height: 100px;
object-fit: contain;
margin-left: 20px;
padding-top:20px;
`

const List = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
/* flex: 1; */

span{
    font-size: 20px;
    font-weight: bold;
    font-family: raleway;
}

@media screen and (max-width: 760px){
    display: none
}
`

const Button1 = styled.div`
width: 150px;
height: 40px;
font-size: 20px;
    font-weight: bold;
    font-family: raleway;
display: flex;
align-items: center;
background-color: #004080;
color: white;
border-radius: 5px;
justify-content: center;
cursor: pointer;
margin-left: 20px;

@media screen and (max-width: 760px){
    display: none
}
`

const Button = styled.div`
width: 100px;
height: 40px;
font-size: 20px;
    font-weight: bold;
    font-family: raleway;
display: flex;
align-items: center;
background-color: #004080;
color: white;
border-radius: 5px;
justify-content: center;
cursor: pointer;
margin-left: 20px;

@media screen and (max-width: 760px){
    display: none
}
`

const MyMenu = styled.div`
width: 100px;
height: 40px;
font-size: 20px;
    font-weight: bold;
    font-family: poppins;
display: flex;
align-items: center;
border-radius: 5px;
justify-content: center;
cursor: pointer;


@media screen and (min-width: 760px){
    display: none
}
`

const MenuIcon= styled(HiMenuAlt1)`
font-size: 40px;
font-weight: bold;
`
const Cancel= styled(GiCancel)`
font-size: 40px;
font-weight: bold;
`

const Holder = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* padding-top: 10px; */
`


const Row = styled.div`
width: 80%;
display: flex;
justify-content: space-around ;
align-items: center;
`