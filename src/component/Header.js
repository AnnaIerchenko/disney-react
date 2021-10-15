import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Nav>
          <Logo src="/img/logo1.png" />
          <NavMenu>
            <a>
                <img src="/img/home.png" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/img/search.png" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/img/star.png" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/img/video.png" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/img/film.png" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/img/film.png" />
                <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src="/img/pic.webp"/>

        </Nav>
    )
}

export default Header

const Nav = styled.nav `
    height: 70px;
    background: black;
    display: flex;
    align-items: center;
    padding: 0 30px;
`

const Logo = styled.img `
    width: 80px;
`
const NavMenu = styled.div `
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 15px;
        }
        span {
            font-size: 12px;
            letter-spacing: 1.2px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`