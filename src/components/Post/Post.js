import React, { useState } from 'react'

import { Container, Header, Lines, Line1, Line2, MoreHorizontalOutlineIcon, Main, Footer, MenuIconsPost, Liked, Comments, Comment, HeartIcon, ChatIcon, SendIcon, BookmarkIcon, EmojiSmileIcon} from './styles'

export default function Post() {

    const [ comment, setComment ] = useState('')

    return (
        <Container>

                <Header>
                    <img src="https://github.com/maykbrito.png" />

                    <Lines>
                        <Line1>
                            <p>maykbrito</p>

                            <span>Mayk Brito</span>
                        </Line1>

                        <Line2>
                            <MoreHorizontalOutlineIcon />
                        </Line2>
                    </Lines>
                </Header>

                <Main>
                    <img src="https://github.com/maykbrito.png" />
                </Main>

                <Footer>

                    <MenuIconsPost>

                        <div>
                            <HeartIcon />
                            <ChatIcon />
                            <SendIcon />
                        </div>

                        <div>
                            <BookmarkIcon />
                        </div>

                    </MenuIconsPost>

                    <Liked>Liked by <span>diego3g</span> and <span>9,135 others </span></Liked>

                    <p> 
                        <span> maykbrito  </span>

                        O Next.js é um framework React que está muito em alta atualmente e é comum termos projetos criados sem a tecnologia que precisem utilizar 
                    </p>

                    <span>1 HOUR AGO</span>

                    <Comments>

                        <Comment>
                            <EmojiSmileIcon />
                            <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." />

                        </Comment>

                        
                        <button style={{ color: comment === "" ? '#b7e1fd' : '' }} >Post</button>

                    </Comments>

                </Footer>
            
        </Container>
    )
}
