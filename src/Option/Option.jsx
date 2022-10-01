import React, {Component} from "react";
import {Container, Wrap, Header} from './style'
import {data} from './data.js'
import {data1} from './data.js'
import {data2} from './data.js'
import {data3} from './data.js'


class Option extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject: data,
            second: data1,
            third: data2,
            fourth: data3
        }
    }
    render() {
        
        return(
            <Container>
                {
                    this.state.subject.map(({id, img, title}) => (
                        <Wrap key={id}>
                        <Wrap.Img src={img} alt="" />
                        <Wrap.Title>{title}</Wrap.Title>
                        </Wrap>
                        
                    ))
                }
                <hr style={{marginBottom: '10px', marginTop: '10px', border: '0', borderTop: '1px solid grey'}}/>
                {
                    this.state.second.map(({id, img, title}) => (
                        <Wrap key={id}>
                        <Wrap.Img src={img} alt="" />
                        <Wrap.Title>{title}</Wrap.Title>
                        </Wrap>
                        
                    ))
                }
                <hr style={{marginBottom: '10px', marginTop: '10px', border: '0', borderTop: '1px solid grey'}}/>
                <Header>SUBSCRIPTIONS</Header>
                {
                    this.state?.third?.map((value) => (
                        <Wrap key={value?.id}>
                        <Wrap.Img src={value?.img} alt="" />
                        <Wrap.Title>{value?.name}</Wrap.Title>
                        <Wrap.Img2 src={value?.icon} alt="" />
                        </Wrap>
                        
                    ))
                }
                <hr style={{marginBottom: '10px', marginTop: '10px', border: '0', borderTop: '1px solid grey'}}/>
                <Header>MORE CONTENT FROM YOUTUBE</Header>
                {
                    this.state.fourth.map(({id, img, title}) => (
                        <Wrap key={id}>
                        <Wrap.Img src={img} alt="" />
                        <Wrap.Title>{title}</Wrap.Title>
                        </Wrap>
                        
                    ))
                }
            </Container>
        )
    }
}
export default Option