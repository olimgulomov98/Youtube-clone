import styled from "styled-components";

const Container = styled.div `
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 27px;
    padding-right: 12px;
`
const Vector = styled.img`
    margin-bottom: 7px;
`

const Input = styled.input`
    width: 574px;
    height: 32px;
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2px 0px 0px 2px;
    padding-left: 10px;
    outline: none;
    color: rgba(255, 255, 255, 0.2);
`
const Button = styled.button`
    width: 65px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0px 2px 2px 0px;
    border: none;
    color: rgba(255, 255, 255, 0.6);
`
export {Container, Vector, Input, Button}