import styled from "styled-components";
import avatar from '../../assets/avatar/avatar.jpg'

export const StyledMainCardContainer = styled.section`
    
    height:100%;
    min-height:250px;
    display:flex;
    justify-content:space-evenly;
    padding:10px;
    
    @media(max-width: 600px) {
    flex-direction: column;
    position: relative;
    align-items:center;
    justify-content:space-evenly;
    margin-bottom:100px;  }
`
export const StyledSectionsTitles = styled.h2`
    font-size:20px;
    color:white;
    opacity:1;

    
`
export const StyledAvatar = styled.div`

    width:160px;
    height:160px;
    border-radius:50%;
    background-image:url(${avatar});
    background-size:cover;
    @media(max-width:600px){
    position:absolute;
    top:-40px;
    right:0;
    left:0;
    width:70px;
    height:70px;
    }
    
`
export const StyledSections = styled.section`
margin-top:50px;
min-width:160px;
opacity:0.8;
    width:28%;
    height:100%;
    padding:5px;
    background-color:#111;
    border-radius:20px;
    @media(max-width:600px){
        width:70%;
    }
`
export const StyledDescription = styled.p`
    font-size:14px;
    color:white;
    margin-left:20px;
    :hover{
        cursor: pointer;
        color:red;
       
        font-weight:1000;
    }
`
export const StyledFooter = styled.section`
display:flex;
justify-content:space-evenly;
    width:100%;
    height:100%;
    padding:5px;
    
`
export const StyledList = styled.ul`
    list-style:none;

`
export const StyledListItem = styled.li`
    
`
export const StyledLink = styled.a`
    text-decoration:none;
    color:white;
    &:hover{
        color:red;
    }
`