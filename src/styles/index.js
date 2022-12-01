import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        overflow-x: hidden;
    }
`;

export const Caixa = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2A433D;
    box-shadow: 1px 1px 10px #EEE;

    h1 {
        color: #03FE7A;
        margin-top: 20px;
    }
`;

export const Input = styled.input`
    padding: 15px 30px;
    background: #fff;
    outline: none;
    border: none;
    border-radius: 7px 0 0 7px;
    font-size: 16px;
    background-color: rgb(113,129,125); 
    width: 400px;
    box-sizing: border-box;

    color: #03FE7A;
    font-weight: 700;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: rgb(113,129,125);
    border: none;
    border-radius: 0 7px 7px 0;
    width: 70px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 24px;
    color: #03FE7A;
    font-weight: 700;

    &:hover {
            text-shadow: 1px 1px 10px #03FE7A; 
        }
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Margin = styled.div`
    width: 100%;
    margin: 15px;
`;

export const Tarefa = styled.li`
    list-style: none;
    padding: 20px 25px;
    background-color: ${(props) => props.checked ? "rgba(3,254,122,0.3)" : "rgb(113,129,125)"};
    /* background-color: rgb(113,129,125); */
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 470px;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px #03FE7A;

    /* text-decoration-line: ${(props) => props.checked ? "line-through" : "none"}; */

    &:hover {
        box-shadow: 0px 0px 10px #03FE7A;
        cursor: pointer;
    }

    p {
        width: 400px;
        font-weight: 600;
        color: #03FE7A;
        color: ${(props) => props.checked ? "#FFF" : "#03FE7A"};
    }

    button {
        width: 70px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 24px;
        color: ${(props) => props.checked ? "#FFF" : "#03FE7A"};

        &:hover {
            text-shadow: 1px 1px 10px #03FE7A; 
        }
    }

    
`;