import React from 'react'
import styled from 'styled-components'

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
                    <Button>Book Now</Button>

                    <BookContainer>

                    </BookContainer>
                   </Content>
                </Header>
            </Wrapper>
        </Container>
    )
}

export default Landing
const BookContainer = styled.div``
const Button = styled.div``
const Title = styled.div``
const Content = styled.div``
const Header = styled.div``
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`
