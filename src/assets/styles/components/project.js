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
border-radius: 24px;
background: var(--color-gray1);

img
{
    width: 100%;
    border-radius: 16px;
}
`