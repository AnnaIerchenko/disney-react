import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
          <Background>
          <img src="/img/bao.jpg"/>   
          </Background> 
          <ImageTitle>
              <img src="/img/bao1.png" />
          </ImageTitle>
          <Controls>
              <PlayButton>
                <img src="/img/play-black.png" />
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/img/play-white.png" /> 
                <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/img/group.png" />
              </GroupWatchButton>
          </Controls>
          <SubTitle>
              2018 * 7m * Family, Fantasy, Kids, Animation
          </SubTitle>
          <Description>
              A Chinese mom who's sad whenher grown son leaves
          </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div `
    min-height: calc(100vh  - 70px);
    padding: calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`

const ImageTitle = styled.div `
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div `
    display: flex;
    align-items: center;
`

const PlayButton = styled.button `
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    height: 50px;
    background-color: rgb(249, 249, 249);
    letter-spacing: 1.8px;
    border: none;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
       

    }
`
const TrailerButton = styled(PlayButton) `
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
    
`
const AddButton = styled.button `
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton) `
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div `
    background: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 25px;
`
const Description = styled.div `
    line-height: 1.4;
    font-size: 20px;
    padding-top: 15px;
    color: rgb(249, 249, 249);
`

