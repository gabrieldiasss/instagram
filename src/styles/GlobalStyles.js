import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        border: 0;
        outline: 0;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;

        width: 100%;
        height: 100%;
    }

    html {
        background: var(--background-main);
    }

    :root {
        --background-main: #f6f6f6;
        --background: #fff;
        --primary: #262626;
        --secondary: #8e8e8e;
        --tertiary: #c7c7c7;
        --quartary: #0095f6;
        --border: #dbdbdb;
        --border-secondary: #efefef;
    }

`