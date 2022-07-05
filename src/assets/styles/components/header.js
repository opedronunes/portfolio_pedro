import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

    .logo a
    {
    text-decoration: none;
    color: var(--color-text);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    }

`
export const Navbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 870px){
    display: none ;
}

ul
{
    display: flex;
    gap: 15px;
    list-style: none;
    margin: 0;
    
}

li a
{
    text-decoration: none;
    color: var(--color-text);
    padding: 15px 10px;
    line-height: 70px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    transition: all .3s;
}

li a:hover
{
    opacity: 0.8;
}
`

export const Toogle = styled.nav`
@media screen and (min-width: 871px) {
    display: none ;
}

ul
{
    right: 0;
    top: 0 ;
    background-color:rgba(25, 31, 30, 0.95);
    width: 100% ;
    height: 100%;
    position: fixed;
    z-index: 2;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
}
.hamburger
{
    text-align: end;
    cursor: pointer;
}
.close
{
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: block;
    text-align: end;
    cursor: pointer;
}
.link-mobile
{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    list-style: none;
}
.link-mobile a
{
    text-decoration: none;
    color: var(--color-green1);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
    transition: all .3s;
}

.link-mobile a:hover
{
    opacity: 0.8;
}
`