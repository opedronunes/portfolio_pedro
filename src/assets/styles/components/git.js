import styled from "styled-components";

export const Git = styled.section`
display: flex;
align-items: center;
padding: 20px 0;

.repo
{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

ul
{
    padding: 0;
}

.card-rodape
{
    padding: 10px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    text-align: center;
}

.card-rodape a
{
    text-decoration: none;
    padding: 12px 22px;
    border-radius: 10px;
    margin: 15px 0;
    border: 1px solid var(--color-green2);
    color: var(--txt-primary);
    transition: all 0.8s;
    animation: pulse 1600ms infinite;
}

.card-rodape a:hover
{
    background: var(--color-green2);
}
`

export const GitPerfil = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border-radius: 8px;
text-align: center;
gap: 10px;

h3
{
    color: var(--color-green1);
    font-weight: 700;
}

img
{
    max-width: 380px;
    //border: 1px solid var(--color-green1);
    width: 100%;
    padding: 4px;
    //box-shadow: 0px 0px 12px 2px var(--color-green1);
    border-radius: 55% 45% 70% 40% / 30% 30% 70% 70%;
    //background: linear-gradient(105deg, var(--color-green3), var(--color-green2) 50%);
    background: radial-gradient(#00875f , #121214 68%);
}
`
export const GitRepo = styled.div`

display: flex;
list-style: none;
padding: 8px;

.card-repo
{
    background: var(--color-gray1);
    padding: 8px;
    width: 100%;
    border-radius: 8px;
    
}

.card-repo a
{
    display: flex;
    gap: 5px;
    text-decoration: none;
    margin: 0;
    color: var(--color-green1);
    transition: all 0.3s;
    font-size: 1.2rem;
}

.card-repo a:hover
{
    opacity: 0.8;
}
`