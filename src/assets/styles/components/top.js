import styled from "styled-components";



export const TopSection = styled.section`
display: flex;
align-items: center;
padding: 20px 0;

h1
{
    font-size: 2.8rem;
    font-weight: 700;
}

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
} 
.top
{
    flex-direction: column;
}

.top-img img
{   
    max-width: 340px;
    width: 100%;
    border-radius: 50%;
    transform: translatey(0px);
    animation: float 5s ease-in-out infinite;
    object-fit: cover;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
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