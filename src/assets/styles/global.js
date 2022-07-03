import { createGlobalStyle } from "styled-components";
import waveTop from '../images/wave-top.png'

export default createGlobalStyle`
:root
{
    --bg-dark: #121214;
    --color-gray1: #29292e;
    --color-gray2: #8d8d99;
    --color-text: #e1e1e6;
    --color-green1: #00B37E;
    --color-green2: #00875F;
    --color-green3: #015F43;
    --color-red: #f75A68;
}
*
{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html
{
    scroll-behavior: smooth;
}
body
{
    background: var(--bg-dark);
    background-image: url(${waveTop});
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -10;
    color: var(--color-text);
    font-family: 'Source Sans Pro', sans-serif;
    
}

.title
{
    color: var(--color-green1);
    text-transform: uppercase;
    font-weight: 700;
}

`
