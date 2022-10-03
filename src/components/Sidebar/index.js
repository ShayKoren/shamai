import React from 'react'
import {SidebarContainer,Icon,SidebarLink,SidebarMenu,CloseIcon,SidebarRoute,SideBtnWrap} from './SidebarElements';



const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">הערכות נזקים</SidebarLink>
            <SidebarLink to="/">בקרות וחוות דעת</SidebarLink>
            <SidebarLink to="/">הערכות ביטוח</SidebarLink>
        </SidebarMenu>
      
<SideBtnWrap>
<a href="https://wa.me/9720543308340" target='_blank' background='white' >
        
      לחץ לוואצאפ
          {/*   <SidebarRoute to="/">יעוץ חינם</SidebarRoute> */}

        </a>
        </SideBtnWrap>

    </SidebarContainer>
    
  )
}

export default Sidebar