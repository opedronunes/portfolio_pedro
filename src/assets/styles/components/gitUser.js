import styled from "styled-components";

export const GitUserStyled = styled.section`

padding: 20px 0;

a{
    text-decoration: none;
    color: var(--color-green1);
    transition: all .3s;
}

a:hover{
    color: var(--color-green2);
}

footer{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 15px 0;
}

footer a{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    
}

#git_user{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

#git_user img{
    border: 8px solid var(--color-gray1);
    padding: 1px;
    border-radius: 50%;
    max-width: 320px;
}

#git_user h3{
    margin: 8px 0;
    font-weight: 700;
}



`