import React from 'react'

import Header from '../Header/Header'

import { Container, Wrapper, MainGrid, SuggestionBox, Box } from './styles'

import Stories from '../Stories/Stories'
import Suggestion from '../Suggestion/Suggestion'
import Post from '../Post/Post' 

export default function Layout() {

    const user = "gabrieldiasss"

    return (
        <Container>

            <Wrapper>

                <Header user={user} />

                <MainGrid>

                    <div style={{ gridArea: "storiesArea" }} >
                        <Box>
                            <Stories />                      
                        </Box>

                        <Box style={{margin: "25px 0 25px 0"}} >
                            <Post />
                        </Box>

                        <Box >
                            <Post />
                        </Box>
                    </div>
                    
                    <SuggestionBox style={{ gridArea: "SuggestionsArea" }} >
            
                        <Suggestion  user={user} />
                        
                    </SuggestionBox>
                    

                </MainGrid>

            </Wrapper>
        </Container>
    )
}
