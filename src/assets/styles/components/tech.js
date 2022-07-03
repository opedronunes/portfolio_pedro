import styled from "styled-components";

export const Tech = styled.section`
display: flex;
padding: 20px 0;

section
{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}
.techIcons
{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-white);
    transition: all .3s;
}

.techIcons:hover, .icon:hover
{
    color: var(--color-green2);
}

.icon
{
    font-size: 5rem;
    color: var(--color-white);
    transition: all .3s;
}
`