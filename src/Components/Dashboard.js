import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {getPokemon} from '../redux/pokeReducer'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: {}
        }
    }

    // getPokemon = () => {
    //     const rand = Math.ceil(Math.random() * 151);

    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
    //     .then(res => {
    //         this.setState({pokemon: res.data})
    //     })
    //     .catch(err => console.log(err));
    // }

    componentDidMount(){
        this.props.getPokemon();
    }

    render(){
        const {pokemon} = this.state;
        // console.log(this.props)

        return (
            <main className='dashboard'>
                <h1>Your Pokemon</h1>
             
                    <section>
                        
                        <img src={this.props.pokeReducer.pokemon.data?.sprites.front_default} alt={this.props.pokeReducer.pokemon.data?.name}/>
                        <h3>{this.props.pokeReducer.pokemon.data?.name}</h3>
                        <button onClick={this.props.getPokemon}>Change Pokemon</button>
                    </section>
              
            </main>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        pokeReducer: reduxState.pokeReducer
    }
}
export default connect(mapStateToProps, {getPokemon})(Dashboard);