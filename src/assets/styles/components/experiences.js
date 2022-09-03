import styled from "styled-components";

export const ExperienceStyled = styled.section`

padding: 20px 0;

.content-tabs{
    display: none;
}
#btn-tabs{
  display: flex;
  flex-direction: column;
  padding: 1.2rem 3rem 0 0;
}

#btn-tabs button
{
  border: none;
  border-left: 1px solid var(--color-gray1);
  background: none;
  padding: 12px 0 12px 20px;
  width: 100%;
  color: var(--color-text);
  text-align: left;
}
#btn-tabs button.active {
  border-left: 1px solid var(--color-green2);
  background: var(--color-gray1);
}

.header-tabs
{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.header-tabs h4{
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}
.header-tabs small{
  margin: 0;
}
#content1 p:nth-child(2), #content2 p:nth-child(2){
    color: var(--color-green2);
    margin: 20px 0;
}

@media (min-width:320px) and (max-width:480px) {

  #btn-tabs{
    flex-direction: row;
    padding: 1rem 0;
  }
  #btn-tabs button{
    font-size: 1rem;
    padding: 15px 8px;
    border-left: none;
    border-bottom: 1px solid var(--color-gray1);
  }
  #btn-tabs button.active {
    border-left: none;
    border-bottom: 1px solid var(--color-green2);
  }
}
@media (min-width:480.2px) and (max-width:680px){

  #btn-tabs{
    flex-direction: row;
    padding: 1rem 0;
  }
  #btn-tabs button{
    font-size: 1rem;
    padding: 8px 8px;
    border-left: none;
    border-bottom: 1px solid var(--color-gray1);
    text-align: center;
  }
  #btn-tabs button.active {
    border-left: none;
    border-bottom: 1px solid var(--color-green2);
  }
}
`