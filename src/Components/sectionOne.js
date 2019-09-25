import React from "react"
import styled from "styled-components"
import {
  backgroundColor,
  backgroundText,
  primaryColor,
} from "./styledConstants"
import { ContactNow } from "./shared/shared"

export const StyledSectionOne = styled.section`
  background-color: ${backgroundColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
`

const SectionOneContactNow = styled(ContactNow)`
  margin-bottom: 150px;
`

export const StyledArticleOne = styled.article`
  width: 75%;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 2rem;
  color: ${backgroundText};
  line-height: 45px;
  text-align: center;
`
export default () => (
  <StyledSectionOne>
    <StyledArticleOne>
      Most users will wait an{" "}
      <span style={{ color: `${primaryColor}` }}>average of 3 seconds. </span>
      They are accessing your site on a mobile device possibly{" "}
      <span style={{ color: `${primaryColor}` }}>with 3G technology. </span>Are
      they going to view and possibly buy your product... or{" "}
      <span style={{ color: `${primaryColor}` }}>
        are they going somewhere else.
      </span>
    </StyledArticleOne>
    <SectionOneContactNow>Find Out Now </SectionOneContactNow>
  </StyledSectionOne>
)
