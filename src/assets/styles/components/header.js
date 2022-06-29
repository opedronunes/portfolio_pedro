import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

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
    color: var(--txt-primary);
    padding: 15px 10px;
    line-height: 70px;
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
}
`