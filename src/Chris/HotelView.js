import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { app } from '../base';


const HotelView = () => {

    const [myList, setMyList] = useState([]);

  const getData = async () => {
    await app
      .firestore()
      .collection("hotel")
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setMyList(r);
        console.log(r)
      });
  };

  useEffect(() => {
    getData();
  }, []);
    return (
        <Container>
           <Wrapper>
            {/* {
                myList.map((props, id) => (
            <Card key={id}>
                <Image src={props.image}/>
                <Content>
                    <C__Holder>
                    <Name>{props.name}</Name>
                    <Desc>{props.desc}</Desc>
                    <No__R>no of rooms : <div>5</div> </No__R>
                    <Avail_r>available room : <div>5</div></Avail_r>
                    <Lc>Loation : <div>ajegunle</div> </Lc>
                    </C__Holder>
                </Content>
            </Card>
                ))
            } */}
            <Card>
                <Image src="hotPic/top.jpg"/>
                <Content>
                    <C__Holder>
                    <Name>And one hotel</Name>
                    <Desc>lorem ipsum is a good work of act just vist lorem ipsum is a very good work of act</Desc>
                    <No__R>no of rooms : <div>5</div> </No__R>
                    <Avail_r>available room : <div>5</div></Avail_r>
                    <Lc>Loation : <div>ajegunle</div> </Lc>
                    </C__Holder>
                </Content>
            </Card>
            <Card>
                <Image src="hotPic/top.jpg"/>
                <Content>
                    <C__Holder>
                    <Name>And one hotel</Name>
                    <Desc>lorem ipsum is a good work of act just vist lorem ipsum is a very good work of act</Desc>
                    <No__R>no of rooms : <div>5</div> </No__R>
                    <Avail_r>available room : <div>5</div></Avail_r>
                    <Lc>Loation : <div>ajegunle</div> </Lc>
                    </C__Holder>
                </Content>
            </Card>
            <Card>
                <Image src="hotPic/top.jpg"/>
                <Content>
                    <C__Holder>
                    <Name>And one hotel</Name>
                    <Desc>lorem ipsum is a good work of act just vist lorem ipsum is a very good work of act</Desc>
                    <No__R>no of rooms : <div>5</div> </No__R>
                    <Avail_r>available room : <div>5</div></Avail_r>
                    <Lc>Loation : <div>ajegunle</div> </Lc>
                    </C__Holder>
                </Content>
            </Card>
            <Card>
                <Image src="hotPic/top.jpg"/>
                <Content>
                    <C__Holder>
                    <Name>And one hotel</Name>
                    <Desc>lorem ipsum is a good work of act just vist lorem ipsum is a very good work of act</Desc>
                    <No__R>no of rooms : <div>5</div> </No__R>
                    <Avail_r>available room : <div>5</div></Avail_r>
                    <Lc>Loation : <div>ajegunle</div> </Lc>
                    </C__Holder>
                </Content>
            </Card>
            <Card>
                <Image src="hotPic/top.jpg"/>
                <Content>
                    <C__Holder>
                    <Name>And one hotel</Name>
                    <Desc>lorem ipsum is a good work of act just vist lorem ipsum is a very good work of act</Desc>
                    <No__R>no of rooms : <div>5</div> </No__R>
                    <Avail_r>available room : <div>1</div></Avail_r>
                    <Lc>Loation : <div>ajegunle</div> </Lc>
                    </C__Holder>
                </Content>
            </Card>
           </Wrapper> 
        </Container>
    )
}

export default HotelView

const Lc= styled.div`
display: flex;
margin-top: 20px;
div{
    /* color: black; */
    margin-left: 20px;
}
`
const Avail_r = styled.div`
color: grey;
display: flex;
div{
    color: black;
    margin-left: 20px;
}
`
const No__R = styled.div`
color: grey;
display: flex;
div{
    color: black;
    margin-left: 20px;

}

`
const Desc = styled.div`
font-size: 12px;
font-weight: bold;
margin-bottom: 10px;
/* color: silver; */
`

const Name = styled.div`
margin-bottom: 10px;
font-size: large;
font-weight: bold;
`
const C__Holder = styled.div`
width: 90%;
margin-top: 10px;
`
const Content = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`
const Image = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
`
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  min-height: 200px;
  padding-bottom: 20px;
  border-radius: 5px;
  margin: 30px;
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