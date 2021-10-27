import React from 'react'
import styled from 'styled-components'
import ThirdPart from './ThirdPart'
import SecondPart from './SecondPart.js'

const Rooms = () => {
    return(
        <Container>
            <Wrapper>
                {/* <FirstPart/> */}
                <SecondPart />
                <ThirdPart />
            </Wrapper>
        </Container>
    )
}

export default Rooms

const Container =styled.div``
const Wrapper =styled.div``
