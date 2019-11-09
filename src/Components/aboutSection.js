import React from "react"

import styled from "styled-components"
import { backgroundColor, backgroundText } from "./styledConstants"

export const CardWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  border-radius: 10px;
  background-color: ${backgroundColor};
  padding: 20px;
  height: 100%;
  margin: 20px 30px 15px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const CardTitle = styled.h1`
  color: ${backgroundText};
`

export const CardStatement = styled.p`
  color: ${backgroundText};
`

export const IconImage = styled.img`
  width: 50px;
  height: 50px;
`

const AboutSection = () => <div></div>

export default AboutSection
