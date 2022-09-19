import styled from "styled-components";

export const Project = styled.section`
display: flex;
padding: 20px 0;


//GitRepo
#git_repo{
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
}

#git_repo h4, p{
    margin: 0;
}

#git_repo li{
    list-style: none;
    position: relative;
}

.card_repo{
    display: flex;
    align-items: center;
    background: var(--color-gray1);
    padding: 20px 8px;
    width: 100%;
    border-radius: 8px;
    
}

.card_repo a{
    text-decoration: none;
    margin: 0;
    transition: all 0.3s;
    font-size: 1.2rem;
}

.card_repo a:hover{
    opacity: 0.8;
}

.card_repo h4{
    color: var(--color-green1);
}

.card_repo p{
    color: var(--color-gray2);
}

.card_repo_icon{
    color: var(--color-green1);
    position: absolute;
    top: -35px;
    left: -22px;
}
`

export const Card = styled.div`
display: grid;
grid-gap: 10px;

@media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
}

`

export const CardProject = styled.div`
display: flex;
flex-direction: column;
height: 100%;
padding: 8px;
border-radius: 16px;
background: var(--color-gray1);
box-shadow: var(--shadow);

img
{
    width: 100%;
    border-radius: 8px 8px 3px 3px;
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