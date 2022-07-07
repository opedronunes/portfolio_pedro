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
    justify-content: flex-start;
    gap: 8px;
    border: 1px solid red;
    
}

.social
{
border: 1px solid red;
height: 150px;
width: 140px;
margin: 0;
padding: 0;

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
}

.icon-social
{
    
}
`