import React from 'react'

import { Container, UserStories, UserElements } from './styles' 

export default function Stories() {
    return (
        <Container>
            
            <UserStories>

                <UserElements>

                    <div>
                        <img src="https://github.com/peas.png" />
                    </div>
                    

                    <span>peas</span>
                </UserElements>

                <UserElements>
                    <div>
                        <img src="https://github.com/peas.png" />
                    </div>
                    
                    <span>peas</span>
                </UserElements>
                
            </UserStories>

        </Container>
    )
}
