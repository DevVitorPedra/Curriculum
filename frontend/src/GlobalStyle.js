import { createGlobalStyle } from "styled-components";
import QuicksandMedium from './assets/fonts/quicksand/static/Quicksand-Medium.ttf'

export default createGlobalStyle `
@font-face {
    font-family:Quicksand;
    src: url(${QuicksandMedium}) ;
}
body{
    font-family:Quicksand;
    margin:0;
    padding:0;
    display:flex;
    justify-content:center;
    background-color:#222;
}
`