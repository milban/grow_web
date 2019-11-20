import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        width: 100%;
    }
`

export default GlobalStyle
