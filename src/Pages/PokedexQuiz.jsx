import { Pokedex } from 'pokeapi-js-wrapper';
// import './Pokedex'
import React, { Component } from 'react';
const NUM_POKEMON = 908;

class QuizDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            flavor_text: "ERR",
            shame_counter: 0,
            name_length: 0,
            name_index: 0,
            winstreak: 0
        }
    }
    render(){
        let id = 1;
        // window.onload = this.getNewPokemon();
        return (
            <div className="quiz-display">
                <button onClick={()=> this.getNewPokemon(id)}>New Pokemon</button>
                <button onClick={()=>this.getHint('pokemon generation')}>Hint: Pokemon's Gen</button>
                <button onClick={()=>this.getHint('color')}>Hint: Color</button>
                <button onClick={()=>this.getHint('egg group')}>Hint: Egg Group</button>
                <button onClick={()=>this.getHint('shape')}>Hint: Shape</button>
                <button onClick={()=>this.getHint('pokedex number')}>Hint: Pokedex Number</button>
                <button onClick={()=>this.getHint('next letter')}>Hint: Get Next Letter</button>
                <br></br>
                <input type="text" id="guessbox" onKeyDown={this.onKeyPressed.bind(this)}></input>
                <br></br>
                <div className="flavor-text">{this.state.flavor_text}</div>
                <br></br>
                <div>Skill level: {this.state.shame_counter}<br></br>Winstreak: {this.state.winstreak}</div>
                <br></br>
                <div id='letters'></div>
                <div id='hintbox'></div>
                <br></br>
                <div className="feedback" id="feedback"></div>
            </div>
        );
    }
    componentDidMount(){
        this.getNewPokemon();
    }
    async getNewPokemon(){
        this.clearInfo();
        let id = Math.floor(Math.random() * NUM_POKEMON) + 1;
        this.fetchData(id).then(function(pokemonData){
            let state = {}
            state.name = pokemonData.name;
            state.shape = pokemonData.shape.name;
            state.num = pokemonData.id;
            state.color = pokemonData.color.name;
            state.name_length = state.name.length
            let eggGroups = pokemonData.egg_groups;
            console.log(eggGroups)
            let eggString = '';
            for(let i = 0; i < eggGroups.length; i++){
                eggString += (eggGroups[i].name);
                eggString += (", ");
            }
            eggString = eggString.substring(0,eggString.length - 2);
            state.eggGroups = eggString;
            state.pokemonGen = pokemonData.generation.name.replace('generation-','');
            this.setState(state, function(){
                this.setState({flavor_text: this.getRandomFlavorText(pokemonData)});
            });
            
        }.bind(this))
        .catch(function(error){
            console.log(error);
        });
    }
    async fetchData(id) {
        let p = new Pokedex();
        let response = await p.getPokemonSpeciesByName(id);
        return response;
    }
    getRandomFlavorText(data){
        console.log(data);
        let entries = data.flavor_text_entries;
        let length = entries.length;
        let entry = null;
        // get flavor text
        while(entry == null || entry.language.name != 'en'){
            let index = Math.floor(Math.random() * length);
            entry = entries[index];
        }
        let text = entry.flavor_text;
        console.log(text);
        return this.redactName(text);
    }
    redactName(text){
        if(text == false) return text;
        let redacted = "_____";
        let name = this.state.name;
        console.log(name);
        text = text.replaceAll(name, redacted);
        name = name[0].toUpperCase() + name.substring(1);
        text = text.replaceAll(name, redacted);
        name = name.toUpperCase();
        text = text.replaceAll(name, redacted);
        return text;
    }
    cleanName(name){
        name = name.replaceAll(' ', '');
        name = name.toLowerCase();
        return name;
    }
    verifyGuess(guess){
        let feedback = document.getElementById('feedback');
        guess = this.cleanName(guess);
        let name = this.cleanName(this.state.name);
        let streak = this.state.winstreak;
        if(guess === name){
            name = name[0].toUpperCase() + name.substring(1);
            console.log("Correct! The pokemon was " + name);
            feedback.innerHTML = "You are correct! The pokemon was " + name + ".<br><a href='https://lmgtfy.app/#gsc.tab=1&gsc.q=" + this.state.name + "' target=_blank>image</a>";
            streak += 1;
            this.getNewPokemon();
        }
        else{
            feedback.innerHTML = "Wrong!";
            streak = 0;
            console.log("WRONG!");
        }
        this.setState({winstreak:streak});

    }
    onKeyPressed(e){
        if(e.key === 'Enter' || e.keyCode === 13){
            let guess = document.getElementById('guessbox').value;
            document.getElementById('guessbox').value = '';

            this.verifyGuess(guess);
            
        }
    }
    getHint(hint){

        switch(hint){
            case 'pokemon generation':
                this.addHint("<br>Generation: " + this.state.pokemonGen);
                break;
            case 'color':
                this.addHint("<br>Color: " + this.state.color);
                break;
            case 'egg group':
                this.addHint("<br>Egg groups: " + this.state.eggGroups);
                break;
            case 'shape':
                this.addHint("<br>Shape: " + this.state.shape);
                break;
            case 'pokedex number':
                this.addHint("<br>Pokedex Number: " + this.state.num);
                break;
            case 'next letter':
                this.showNextLetter();
                break;
            default:
                return;
        }
    }
    addHint(hint){
        this.setState({shame_counter: this.state.shame_counter-1});
        let hintbox = document.getElementById('hintbox');
        console.log(hint);
        hintbox.innerHTML += (hint);
        
    }
    clearInfo(){
        let hintbox = document.getElementById('hintbox');
        hintbox.innerHTML = '';
        document.getElementById('letters').innerHTML = '';
        this.state.name_index = 0;
    }
    showNextLetter(){
        if (this.state.name_index == this.state.name_length){
            return;
        }
        this.setState({shame_counter: this.state.shame_counter-1});
        document.getElementById('letters').innerHTML += this.state.name[this.state.name_index];
        this.setState({name_index: this.state.name_index+1});
    }
}

export default QuizDisplay;