import styled, { css } from 'styled-components';

import { Bookmark, Chat, Heart, MoreHorizontalOutline, Send, EmojiSmile } from '../../styles/Icons'

export const Container = styled.div`
    
`

export const Header = styled.header`

    display: flex;
    align-items: center;
    gap: 16px;

    padding: 10px 15px;

    > img {
        width: 40px;
        height: 40px;
        border-radius: 100%;

        cursor: pointer;
    }
`
export const Lines = styled.div`
    display: flex;
    align-items: center;

    justify-content: space-between;

    flex: 1;
`

export const Line1 = styled.div`

    > p {
        cursor: pointer;
        font-weight: 600;
    }

    > span {
        font-size: 13px;
    }

`

export const Line2 = styled.div`

`
const iconCSS = css`
    width: 25px;
    height: 25px;

    cursor: pointer;
`

export const MoreHorizontalOutlineIcon = styled(MoreHorizontalOutline)`
    ${iconCSS}
`

export const Main = styled.div`
    > img {
        width: 100%;
    }
`
export const Footer = styled.div`
    padding: 10px 15px 0 15px;

    > p {

        font-size: 15px;

        > span {
            font-weight: 500;
        }
    }

    > span {
        font-size: 11px;
        color: var(--secondary);
    }

`

export const MenuIconsPost = styled.div`
    
    display: flex;
    justify-content: space-between;
    
    > div {
        display: flex;
        gap: 16px;
    }
    
`

export const Liked = styled.p`
    font-size: 15px;
    margin: 10px 0;

    span {
        font-weight: 500;
    }
    
`
export const Comments = styled.div`
    border-top: 1px solid var(--border-secondary);
    margin-top: 8px;

    display: flex;

    > button {
        color: var(--quartary);
        font-size: 14px;
        font-weight: 500;

        cursor: pointer;
    }
    
`
export const Comment = styled.div`
    padding: 15px 0;

    display: flex;
    flex: 1;

    gap: 16px;

    > input {
        font-size: 16px;
    }

`

const iconFooterCSS = css`
    width: 32px;
    height: 32px;

    cursor: pointer;
`

export const HeartIcon = styled(Heart)`
    ${iconFooterCSS}
` 
export const ChatIcon = styled(Chat)`
    ${iconFooterCSS}
`
export const SendIcon = styled(Send)`
    ${iconFooterCSS}
`
export const BookmarkIcon = styled(Bookmark)`
    ${iconFooterCSS}
`

export const EmojiSmileIcon = styled(EmojiSmile)`
    width: 27px;
    height: 27px;
`