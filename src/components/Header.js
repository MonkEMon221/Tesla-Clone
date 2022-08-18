import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/CarSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (

        <Container>
            <a href='#'>
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
            {
                cars && cars.map((car, index)=>(
                    <a key ={index} href='#'>{car}</a>
                ))
            }
            </Menu>

            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                    <Close onClick={() => setBurgerStatus(false)}>

                    </Close>
                </CloseWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Insurance</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energies</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>About Us</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex: 1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    text-align: start;
    padding: 20px;
    list-style: none;
    z-index: 2;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a{
            font-weight: 600;
        }
    }
`
const Close = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`