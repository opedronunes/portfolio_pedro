import styled from "styled-components";

export const ContactStyled = styled.section`
display: flex;
padding: 20px 0;
min-height: 100vh;


.card-social
{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 20px;
}

.social
{
height: 170px;
width: 150px;
margin: 0;
padding: 0;
border-radius: 12px;
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
box-shadow: var(--shadow);

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
    padding: 6px 18px;
    color: var(--color-text);
    background: linear-gradient(75deg, var(--color-green3) 35%, var(--color-green2));
    border-radius: 8px;
    transition: all .4s;
}

.social li a:hover
{
    transform: scale(110%);
    
}

`

export const FormStyled = styled.div`
display: flex;
flex-direction: column;
padding: 20px 0;

form
{
    display: flex;
    flex-direction: column;
    gap: 10px;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: var(--shadow);

    width: 100%;
    max-width: 500px;
    padding: 25px 35px;
}

label
{
    display: flex;
    flex-direction: column;
    color: var(--color-text);
    font-weight: bold;
}

input {
    margin-bottom: 16px;
    position: relative;
}

input,
button {
    /* reset appeareance */
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    /* box */
    width: 100%;

    padding: 12px 0;

    border:none;
    border-bottom: 1px solid var(--color-green2);

    background-color: transparent;

    outline: none;

    /* text */
    color: var(--color-text);
    font-size: 1em;

}

button[type=submit]
{
    margin-top: 16px;
    border: 1px solid transparent;
    background: linear-gradient(75deg, var(--color-green3) 35%, var(--color-green2));
    border-radius: 8px;
    transition: all .3s;
}
button[type=submit]:hover
{
    background: none;
    border: 1px solid var(--color-green2);
}

input ~ label {
    position: absolute;
    top: 16px;
    left: 0;

    color: rgba(255, 255, 255, 0.6) ;

    transition: .4s;
}

input:focus ~ label
{
    transform: translateY(-24px);
    font-size: 0.8em;
    letter-spacing: 0.1em;
    background: none;
}

form textarea
{
    background: none;
    color: var(--color-text);
    border: 1px solid var(--color-green2);
    border-radius: 8px;
    padding: 0 10px;
    outline: none;
    box-shadow: none;
    margin: 10px 0;
}

`