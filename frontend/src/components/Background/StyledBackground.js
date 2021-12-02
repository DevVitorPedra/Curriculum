import styled from 'styled-components';
import BG from '../../assets/images/bg-02.jpg'
export const  StyledBackground = styled.div`
width:70vw;
height:100%;
display:flex;
flex-direction:column;
gap:10px;
border-radius:12px;
background-image:url(${BG});
background-size:cover;
filter:rgba(0, 0, 0,1);

`