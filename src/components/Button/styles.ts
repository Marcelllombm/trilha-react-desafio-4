import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color:${(props)=>props.disabled?"#81259D":' #f0f0f0'};
    color: ${(props)=>props.disabled?"#ffffff":' #000000'};;
    pointer-events:${(props)=>props.disabled?null:'none'};
  
    border: 1px solid #81259D;
    border-radius: 21px;
    button:disabled{
        background: red;
    }
    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`