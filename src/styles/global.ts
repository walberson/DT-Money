import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;

    --red: #e52e4d;

    --blue: #5429cc;
    --blue-light: #6935ff;

    --text-title:#363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;



}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    //font-size: 16px(Desktop)
    // REM = 1rem = 16px;
    //SEMPRE USAR % PARA ADAPTAR AS CONFS DO USUARIO
    html{
        //font-size: 15px(Desktop)
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        //font-size: 14px(Desktop)
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-foot-smoothing: antialised;
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity:0.6;
        cursor: not-allowed;
    }

`