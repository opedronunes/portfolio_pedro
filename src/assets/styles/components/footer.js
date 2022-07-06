import styled from "styled-components";

export const FooterStyled = styled.footer`
display: flex;
align-items: center;
height: 60px;
box-shadow: 0px 0px 20px 2px var(--color-green1);

.footer-content
{
    display: flex;
    justify-content: center;
    text-align: center;
}

.footer-content p
{
    font-size: 1.1rem;
    color: var(--color-gray2);
    margin: 0;
}
.footer-content p strong
{
    color: var(--color-green1);
}
`