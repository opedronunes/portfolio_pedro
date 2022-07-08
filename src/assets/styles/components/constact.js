import styled from "styled-components";

export const ContactStyled = styled.section`
display: flex;
padding: 20px 0;
height: 100vh;

.card-social
{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    
}

.social
{
height: 150px;
width: 140px;
margin: 0;
padding: 0;
border-radius: 12px;
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
box-shadow: var(--shadow);

}

.social li
{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    height: 100%;
    width: 100%;
}

.social li a
{
    text-decoration: none;
    padding: 6px 18px;
    color: var(--color-text);
    background: linear-gradient(75deg, var(--color-green3) 35%, var(--color-green2));
    border-radius: 8px;
    transition: all .4s;
}

.social li a:hover
{
    transform: scale(110%);
    
}

`