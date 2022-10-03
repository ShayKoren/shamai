import React,{useState} from 'react'
import Navbar from '../Navbar'
import {HeroContainer,HeroContent,HeroItem,HeroH1,HeroBtn,HeroP} from './HeroElements';
import Sidebar from '../Sidebar';


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <HeroContainer>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <HeroContent>
        <HeroItem>
            <HeroH1>עופר שושני</HeroH1>
             <HeroP></HeroP>
            <HeroBtn> <a className="phone" href="tel:054-330-8340">

<button className="btn">054-330-8340</button>
 </a></HeroBtn>
        </HeroItem>
    </HeroContent>
    </HeroContainer>
  )
}

export default Hero
