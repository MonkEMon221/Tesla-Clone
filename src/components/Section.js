import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title, description, backgroundImg, leftBtn, rightBtn }) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtn}
                        </LeftButton>
                        {rightBtn &&
                            <RightButton>
                                {rightBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src='/images/down-arrow.svg'></DownArrow>
            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width : 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: ${props => `url("/images/${props.bgImg}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:786px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    width:256px;
    height:40px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`

const DownArrow = styled.img`
    height:40px;
    animation:animationDown infinite 1.5s;
`
const Buttons = styled.div``