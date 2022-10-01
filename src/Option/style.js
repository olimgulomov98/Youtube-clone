import styled from "styled-components";

const Container = styled.div`
    width: 300px;
    margin-top: 10px;
`

const Wrap = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 28px;
    position: relative;
    :hover {
        background: rgba(255, 255, 255, 0.2);
    }
    :active {
        background: rgba(255, 255, 255, 0.2);
    }
`
Wrap.Title = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    margin-left: 28px;
`
Wrap.Img = styled.img`
    width: 20px;
    height: 20px;
`
Wrap.Img2 = styled.img`
    width: 17px;
    height: 17px;
    position: absolute;
    right: 20px;
`
const Header = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin: 8px 0 16px 24px;
`

export {Container, Wrap, Header}