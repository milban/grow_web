import React from 'react'
import styled from 'styled-components'
import growFeature01 from "../Images/grow_feature-01.png"

const ContentsWrapper = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Content = styled.div`
  min-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

const MainText = styled.span`
  font-size: ${props => props.theme.fontSize.headerMain[0]};
  font-weight: ${props => props.theme.fontWeight.border};
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSize.headerMain[1]};
  }
`

const Mockup = styled.div`
  margin-top: 50px;
  background-color: white;
  width: 300px;
  height: 600px;
  border-radius: 40px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.7), 30px 30px 40px rgba(118, 146, 180, 0.4);
  overflow: hidden;
  padding: 20px;
`

const Feature = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-image: url(${growFeature01});
  background-repeat: none;
  background-position: center center;
  background-size: contain;
`

const Home = () => {
  return (
    <ContentsWrapper>
        <Content>
          <MainText>For your better life</MainText>
          <MainText>Grow with us</MainText>
        </Content>
        <Content>
          <Mockup>
            <Feature />
          </Mockup>
        </Content>
      </ContentsWrapper>
  )
}

export default Home