import React, {Component} from "react";
import {WrapButton, Button, Container, WrapCard, Card, WrapParag} from './style'
import {data} from './data'


class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: data,
        }
    }

    render() {
        // const onSearch = (e) => {
        //     const {value} = e.target;
        //     const res = data.filter(({title}) => title.toLowerCase().includes(value.toLowerCase()) )
        //     this.setState({card: res})
        // }
         const onFilm = () => {
            const film = data.filter(({type}) => type === 'Film')
            this.setState({card: film})
         }
         const onComedy = () => {
            const comedy = data.filter(({type}) => type === 'Comedy')
            this.setState({card: comedy})
         }
         const onCartoons = () => {
            const cartoons = data.filter(({type}) => type === 'Cartoons')
            this.setState({card: cartoons})
         }
         const onMusic = () => {
            const music = data.filter(({type}) => type === 'Music')
            this.setState({card: music})
         }
        return(
            <Container>
                <WrapButton>
                    <Button onClick={onFilm}>Film</Button>
                    <Button onClick={onComedy}>Comedy</Button>
                    <Button onClick={onCartoons}>Cartoons</Button>
                    <Button onClick={onMusic}>Music</Button>
                </WrapButton>
                {/* <input type="text" onChange={onSearch}/> */}
                <WrapCard>
                    {
                       this.state.card.map((value) => (
                        <Card key={value.id}>
                            <Card.Img src={value?.img} alt="" />
                            <WrapParag>
                                <Card.Img2 src={value?.img2} alt="" />
                                <div>
                                    <WrapParag.Title>{value?.title}</WrapParag.Title>
                                    <WrapParag.Info>{value?.name}</WrapParag.Info>
                                    <WrapParag.Info>{value?.parag}</WrapParag.Info>
                                </div>
                             </WrapParag>
                        </Card>
                       )) 
                    }
                    
                </WrapCard>
            </Container>
        )
    }
}
export default Head