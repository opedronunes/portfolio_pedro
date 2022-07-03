import styled from "styled-components";

export const TopSection = styled.section`
display: flex;
align-items: center;
padding: 20px 0;
border: 1px solid green;

.top-links
{
    display: flex;
    gap: 20px;
}
.top-links a
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
.top-links a:hover
{
    background: var(--color-green2);
}
.top, .top-img
{
    display: flex;
    justify-content: center;
    height: 100%;
    border: 1px solid red;
} 
.top
{
    flex-direction: column;
}
.top-img
{   
    align-items: center;
}
@keyframes pulse
{
    0%{
        box-shadow: var(--color-green2) 0 0 0 0;
    }
    75%{
        box-shadow: #ff69b400 0 0 0 8px;
    }
}
`