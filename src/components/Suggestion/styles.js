import styled from 'styled-components'

export const Container = styled.div`

    

`
export const Suggestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    width: 100%;

    padding: 20px 0;
    
`

export const Header = styled.header` 

    display: flex;
    align-items: center;
    
    gap: 20px;

    > img {
        width: 56px;
        height: 56px;
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

    > span {
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
    }

    > p {
        font-size: 13px;
        color: var(--secondary);
    }

`

export const Line2  = styled.div`

    > span {
        font-size: 12px;
        cursor: pointer;
        color: var(--quartary);
        font-weight: 500;
    }

`
export const Main  = styled.main`

    > div {
        display: flex;
        align-items: center;
        gap: 16px;

        > img {
            width: 36px;
            height: 36px;
            border-radius: 100%;
            cursor: pointer;
        }

        & + div {
            margin-top: 12px;
        }
    }

`

export const SuggestionsForYou  = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 20px 0 10px 0;

    > p {
        font-size: 15px;
        color: var(--secondary);
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > span{
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
`
export const Footer = styled.footer`
    margin-top: 25px;
`

export const TextFooter = styled.p`
    font-size: 12px;
    color: var(--tertiary);

    margin-bottom: 15px;

    cursor: pointer;
`