import styled from 'styled-components'
import background from './background.png'

export const Container = styled.div`
    display:flex;  
    justify-content: center;
    flex-direction: column;
    padding:20px;
    margin-top:20px;
    margin-left:20px;
    background-image: url(${background});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 30% 80%;
    @media (max-width:1024px){
        background-size: 100% 35%;
        background-position: 120% 30%;
    }

`

export const Content = styled.div`
    display:flex;
    justify-content: center;
    gap: 50px;
    @media (max-width:1024px){
    flex-direction: column;
    align-items: center;
          };
    
`