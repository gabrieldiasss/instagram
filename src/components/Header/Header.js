import React from 'react'

import SearchIcon from '@material-ui/icons/Search';

import { Header, HeaderWrapper, MenuButtons, Input, MenuButton, HomeIcon, ChatIcon, ExploreIcon, NotificationsIcon } from './styles'

export default function HeaderMain({ user }) {
    
    return (
        <Header>
            
            <HeaderWrapper>

                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <Input>
                    <SearchIcon fontSize="small" style={{color: "rgb(118, 118, 118)"}} />
                    <input placeholder="Search" />
                </Input>
                
                <MenuButtons>
                    
                    <MenuButton>
                        <HomeIcon />
                    </MenuButton>

                    <MenuButton>
                        <ChatIcon />
                    </MenuButton>

                    <MenuButton>
                        <ExploreIcon />
                    </MenuButton>

                    <MenuButton>
                        <NotificationsIcon />
                    </MenuButton>

                    <MenuButton>
                        <img src={` https://github.com/${user}.png`} />
                    </MenuButton>

                </MenuButtons>

            </HeaderWrapper>
            
        </Header>
    )
}
