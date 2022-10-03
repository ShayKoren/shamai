import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import {FaCarCrash} from 'react-icons/fa';

export const Nav = styled.nav`
background:transpirent;
/* background-color:blue; */
height:80px;
display:flex;
justify-content:center;
font-weight:700;
`;

export const NavLink = styled(Link)`
color:#fff;
font-size:3rem;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;

/* @media screen and (max-width:650px){
    position:absolute;
    top:10px;
    left:25px;
}
 */
@media screen and (max-width:1024px) {
   
        grid-template-columns: 1fr;
        gap:2rem;
    }
`;
export const NavIcon = styled.div`
display:block;
position:absolute;
top:0;
right:0;
margin-top: 30px;

cursor:pointer;
color:#000;


p{
    transform:translate(-185%,100%);
    font-weight:bold;

}
`
export const Bars = styled(FaCarCrash)`
font-size:3rem;
transform:translate(-50%,-15%);
color:white;


`;
