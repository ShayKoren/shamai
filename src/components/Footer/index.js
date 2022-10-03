import React from 'react'
import {FaFacebook,FaInstagram,FaGoogle/* FaTwitter,FaYoutube */} from 'react-icons/fa';
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconsLink}from './FooterElements'

function Fotter() {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to= "/">עופר שושני שמאות רכב</SocialLogo>
                    <SocialIcons>
                        <SocialIconsLink href="https://www.facebook.com/profile.php?id=100063697263111&ref=aymt_homepage_panel" >
                        <FaFacebook/>
                        </SocialIconsLink>
                        <SocialIconsLink href="https://www.instagram.com/oferrico/" target="_blank" aria-label="Instagram" >
                        <FaInstagram/>
                        </SocialIconsLink>
                        <SocialIconsLink href="https://www.google.com/maps/place/%D7%A9%D7%9E%D7%90%D7%99+%D7%A8%D7%9B%D7%91+%D7%A2%D7%95%D7%A4%D7%A8+%D7%A9%D7%95%D7%A9%D7%A0%D7%99%E2%80%AD/@32.0327285,34.8977968,15z/data=!4m5!3m4!1s0x0:0xcaf73a20fe97e458!8m2!3d32.0327285!4d34.8977968?hl=iw" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                        <FaGoogle/>
                        </SocialIconsLink>
                      {/*   <SocialIconsLink href="/" target="_blank" aria-label="Youtube" >
                        <FaYoutube/>
                        </SocialIconsLink> */}
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Fotter