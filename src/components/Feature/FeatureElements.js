import styled from "styled-components";
import CAR14 from '../../images/CAR14.png';


export const FeatureContainer = styled.div`
background: linear-gradient(to right,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url(${CAR14}); 
height:100vh;
max-haight:500px;
background-position: center;
backgrpund-size:cover;
display:flex;
flex-direction: column;
justify-content: center;
aling-items: center;
color:#fff;
text-align: center;
padding:0 1rem;


h1{
    font-size:(3rem,5vw,5rem);
}
p{
    margin-bottom:1rem;
    font-size:clamp(3rem,3vw,2rem);
}

`;
export const FeatureButton = styled.button`
font-size:1.4rem;
padding:0.6rem 3rem;
border:none;
background: #a7aaad;
color:#000;
transition:0.2s ease-out;


&:hover{
    color:#fff;
    background: #a7aaad;
    transition:0.2s ease-out;
    cursor:pointer;
}
.btn{
    color:white;
    border:none;
    background: #a7aaad;
    font-size:1.4rem;
    font-weight:bold;
}

`


