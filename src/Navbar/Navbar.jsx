import React, {Component} from "react";
import Humbergerbutton from './assets/hamburgerbutton.png'
import Logo from './assets/logo.png'
import Variant1 from './assets/variant1.png'
import Variant2 from './assets/variant2.png'
import Variant3 from './assets/variant3.png'
import Person from './assets/pp-button.png'
import {Container, Vector, Input, Button} from './style'
import { BsSearch } from 'react-icons/bs';
import {data} from '../Head/data'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: data,
            
        }
    }
    render() {
        
        const onSearch = (e) => {
            const {value} = e.target;
            const res = data.filter(({title}) => title.toLowerCase().includes(value.toLowerCase()) )
            this.setState({subjects: res})
            console.log(res);
        }

        return(
            <Container>
                <div>
                    <Vector src= {Humbergerbutton} alt="Humbergerbutton" />
                    <img src= {Logo} alt="Logo" />
                </div>
                <div>
                    <Input type="text" placeholder="Search..." onChange={onSearch} />
                    <Button><BsSearch /></Button>
                </div>
                <div>
                    <img src= {Variant1} alt="Variant1" />
                    <img src= {Variant2} alt="Variant2" />
                    <img src= {Variant3} alt="Variant3" />
                    <img src= {Person} alt="Person" />
                </div>
            </Container>
        )
    }
}
export default Navbar