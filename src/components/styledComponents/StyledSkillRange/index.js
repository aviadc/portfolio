import styled, { keyframes } from "styled-components";



const rangeSize = keyframes`
  0%{width: 0; background-color:teal}
  100%{width: ${props => props.size}%;background-color:teal}
  `;


const StyledSkillRange = styled.div`
    height: 100%;
    width: ${props => props.size}%;
    animation: ${rangeSize} .2s linear ${props => props.delay}s forwards;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  `;



export default StyledSkillRange
