import styled from 'styled-components';
import BG from '../../assets/images/bg-02.jpg'
export const  StyledBackground = styled.div`
width:80vw;
height:100%;
display:flex;
flex-direction:column;
gap:10px;
border-radius:20px;
background-image:url(${BG});
background-size:cover;
overflow-y:auto;
@media(max-width:600px){
    width:100vw;
    background-image:url(${BG});
    background-size:cover;
}

`