import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Wrapper = styled.div`
    height: 100%;
`;

export const MainGrid = styled.div`

    display: grid;
    grid-gap: 35px;
    grid-template-areas: "storiesArea SuggestionsArea" ;
    grid-template-columns: 614px 293px;

    width: 90%;
    max-width: 957px;
    margin: 30px auto;


`

export const SuggestionBox = styled.div`
    position: relative;
    
`

export const Box = styled.div`
    background: var(--background);
    border: 1px solid var(--border);

    border-radius: 3px;
`


