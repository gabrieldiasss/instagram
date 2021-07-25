import styled, { css } from 'styled-components';

import { Home, Messenger, Explore, Heart } from '../../styles/Icons'

export const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;

    background: var(--background);
    border-bottom: 1px solid var(--border);
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    height: 54px;

    max-width: 957px;
    margin: 0 auto;
  
    > img {
        width: 110px;
        cursor: pointer;
    }
`;

export const Input = styled.div`

    display: none;

    @media(min-width: 700px) {
        background: var(--background-main);
        border-radius: 3px;
        padding: 3px 10px;

        border: 1px solid var(--border);

        display: flex;
        align-items: flex-start;
        
        > input {
            font-size: 14px;
            padding: 0 7px;
        }
    }

`;

export const MenuButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const MenuButton = styled.div`
    cursor: pointer;

    > img {
        display: flex;
        align-items: flex-end;
        width: 25px;
        height: 25px;
        border-radius: 100%;
    }

`;

const iconCSS = css`
    width: 27px;
    height: 27px;
`

export const HomeIcon = styled(Home)`
    ${iconCSS}
`

export const ExploreIcon = styled(Explore)`
    ${iconCSS}
`

export const ChatIcon = styled(Messenger)`
    ${iconCSS}
`

export const NotificationsIcon = styled(Heart)`
    ${iconCSS}
`