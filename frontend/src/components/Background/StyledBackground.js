import styled from 'styled-components';
import BG from '../../assets/images/bg-02.jpg'
import BGsmall from '../../assets/images/bg-small.jpg'
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
    width:90vw;
    height:100%;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    gap:10px;
    background-image:url(${BGsmall});
    background-size:contain;
    overflow-y:auto;
}

`