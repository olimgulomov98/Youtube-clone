import styled from "styled-components";

const WrapButton = styled.div`
    width: 100%;
    height: 56px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Button = styled.button`
    width: 76px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    color: #FFFFFF;
    cursor: pointer;
    :hover {
        background: #FFFFFF;
        color: #000000;
    }
    :active {
        background: #FFFFFF;
        color: #000000;
    }
`
const Container = styled.div`
    width: 100%;
` 

const WrapCard = styled.div`
    width: 100%;
    height: 100%;
    background: #181818;
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const Card = styled.div`
    width: 290px;
    height: 280px;
`

Card.Img = styled.img`
    width: 290px;
    height: 186px;
`
Card.Img2 = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 10px;
`

const WrapParag = styled.div`
    padding: 10px 5px;
    display: flex;
`

WrapParag.Title = styled.h3`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    margin-bottom: 5px;
    padding-right: 5px;
`
WrapParag.Info = styled.h4`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);
    
`
export {WrapButton, Button, Container, Card, WrapCard, WrapParag}