import styled from "styled-components";

export const Project = styled.section`
display: flex;
padding: 20px 0;
`

export const Card = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 15px;
`

export const CardProject = styled.div`
display: flex;
flex-direction: column;
max-width: 400px;
padding: 8px;
border-radius: 16px;
background: var(--color-gray1);
box-shadow: var(--shadow);

img
{
    width: 100%;
    border-radius: 8px 8px 0px 0px;
}
h4
{
    font-weight: 700;
    padding: 8px 0;
}
p
{
    height: 100%;
}
p, .tech-card
{
    margin: 0;
    padding: 8px 0;
    color: var(--color-gray2);
}
.tech-card
{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
}

.link-card
{
    display: flex;
    gap: 8px;
}

.link-card a
{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    text-decoration: none;
    padding: 8px 18px;
    border-radius: 8px;
    border: 1px solid var(--color-gray2);
    color: var(--color-text);
    transition: all .3s;
    width: 100%;
}

.link-card a:hover
{
    background: var(--color-gray2);
    color: var(--color-gray1);
}
`