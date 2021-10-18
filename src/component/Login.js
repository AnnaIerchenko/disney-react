import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/img/logoCTA.png" />
                <SignUp>GET ALL THERE</SignUp>
                <Decription>
                    Get premier access to Raya and the last Dragon for
                    with a Disney subscription. As on 03/26/21, the price
                    and the Disney Bundle will increase by $1 
                </Decription>
                <CTALogoTwo src="/img/CTAtwo.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div `
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/img/bg4.jpg");
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.4;
    }
`

const CTA = styled.div `
    max-width: 650px;
    padding: 80px 45px;
    display: flex;
    flex-direction: column;
   
`
const CTALogoOne = styled.img `
   max-width: 950px;
   max-height: 200px;
`
const SignUp = styled.div `
    width: 100%;
    background-color: #000305;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1.5px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Decription = styled.p `
    font-size: 13px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    color: gold;
`

const CTALogoTwo = styled.img `
  width: 100%;
    
`