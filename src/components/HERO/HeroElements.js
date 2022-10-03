import styled from "styled-components"
import CAR12 from '../../images/CAR12.png'

export const HeroContainer = styled.div`
background: linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${CAR12});
height:90vh;
background-position:left;
background-size: cover;



`;
export const HeroContent = styled.div`
height:calc(100vh -80px);
max-height:100%;
width:100vw;
padding:0rem calc((100vw - 1300px) /2);

`
export const HeroItem = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
aling-items:flex-start;
haight:100vh;
max-haight:100%;
padding:0 3rem;
width:500px;
color:#fff;
text-transform:uppercase;
line-haight:1;
font-weight:normal;




@media screen and (max-width:650px){
    width:100%;
    
    }
 /*  */
    


`;
export const HeroH1 = styled.h1`
font-size: clamp(2.5rem,10vw,5rem);
margin-bottom:2rem;
box-shadow:4px 5px white;

letter-spacing:3px;
font-size:40px

`;
export const HeroP = styled.p`

font-size:clamp(2.5rem,2.5vw,5rem);
margin-bottom:9rem;
`;
export const HeroBtn = styled.button`
font-size:1.4rem;
padding:1rem 4rem;
border:none;
background: #a7aaad;
color:#fff;
transition:0.2s ease-out;

.btn{
background-color:#a7aaad ;
font-size: 1.4rem;
border:none;
font-weight: bold;
color:#fff;


}


&:hover{
    backgound:#fff;
    transition:0.2s ease-out;
    cursor:pointer;
    color:#000;
}
`;