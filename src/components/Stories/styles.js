import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px 15px;
`;

export const UserStories = styled.div`

    display: flex;
    gap: 20px;

`

export const UserElements = styled.div`

    display: flex;
    flex-direction: column;
    cursor: pointer;

    > div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient( #c82d8e, #f99d4c);

        > img {
            border: 2px solid var(--background);
            width: 56px;
            height: 56px;
            border-radius: 100%;

        }

    }

    > span {
        font-size: 13px;
        text-align: center;
    }

`
