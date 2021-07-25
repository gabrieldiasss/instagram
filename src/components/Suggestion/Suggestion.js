import React, { useState, useEffect } from 'react'

import { Container, Suggestion, Header, Lines, Line1, Line2, Main, SuggestionsForYou, Footer, TextFooter } from './styles'

export default function Suggestion1({ user }) {

    const [ suggestions, setSuggestions ] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${user}/following`)
        .then((response) => {
            return response.json()
        })
        .then((resultado) => {
            setSuggestions(resultado)
        })

        .catch((err) => {
            throw new Error(err)
        })

    }, [])

    return (

        <Container>

            <Suggestion1>
                <Header>
                    <img src={`https://github.com/${user}.png`} />

                    <Lines>
                        <Line1>
                            <span>gbrldiass</span>
                            <p>gabriel dias</p>
                        </Line1>

                        <Line2>
                            <span>Switch</span>
                        </Line2>
                    </Lines>
                </Header>

                <Main>

                    <SuggestionsForYou>
                        <p>Suggestions For You</p>

                        <span>See All</span>
                    </SuggestionsForYou>

                    {suggestions.map((suggestion, key) => {
                        return (
                            <div key={key} >   
                                <img src={suggestion.avatar_url} />
            
                                <Lines>
                                    <Line1>
                                        <span>{suggestion.login}</span>
                                        <p>Followed by filipedeschamps</p>
                                    </Line1>
            
                                    <Line2>
                                        <span>Follow</span>
                                    </Line2>
                                </Lines>
                            </div>
                        )
                    })}
                
                </Main>

                <Footer>

                {/*  <TextFooter>About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Terms &bull; Locations &bull; Top Accounts &bull; Hashtags &bull; Language</TextFooter>

                    <TextFooter>&copy; 2021 INSTAGRAM FROM FACEBOOK</TextFooter> */}

                </Footer>
            </Suggestion1>
            

        </Container>
    )
}