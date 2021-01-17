import React, { Component } from 'react';




/*
 * content is an array of objects with following format:
 *  contentObject = {
 *      text: "Lorem Ipsum",
 *      
 *  }
 */
class Typewriter extends Component {
    constructor(props){
        super(props);
        this.toggleCursor = this.toggleCursor.bind(this);
        this.state = {
            bgColor: props.bgColor,
            textColor: props.textColor,
            style: props.style,
            fullText: props.content,
            baseDelta: props.delta,
            waitPeriod: props.waitPeriod,
            currentText: "",
            currentInstance:0,
            cursor:true,
            isDeleting:false,
            done:false,
            
        }
    }
    componentDidMount(){
        this.startAnimation();
        this.toggleCursor();
    }
    formatContent(content){
        // let arr = JSON.parse(content);
        // return arr;
        return content;
    }
    goNext(){

    }
    startAnimation(){
        // this.setState({currentText:this.state.fullText});
        let target = this.state.fullText;
        this.animate(target);
    }
    animate(target){
        let done = false;
        let targetLength = target.length;
        let {isDeleting} = this.state;
        let {currentText} = this.state;
        let currentLength = currentText.length;
        let delta = this.state.baseDelta - Math.random() * 100;
        if(isDeleting){
            if(currentLength == 0){
                done = true;
                this.setState({done:true});
            } else{
                currentText = target.substring(0,currentLength-1);
            }
        } else {
            if(currentLength == targetLength){
                // this.setState({isDeleting:true});
                done = true;
                delta = this.state.waitPeriod;
            } else{
                currentText = target.substring(0,currentLength+1);
            }
        }
        this.setState({currentText:currentText});
        if(done) {
            this.goNext();
            return;
        }
        setTimeout(()=>{
                this.animate(target);
            }, delta
        )
    }
    toggleCursor(){
        const {currentInstance} = this.state;
        const {cursor} = this.state;
        const element = document.getElementById("cursor-"+currentInstance);
        let borderStyle;
        
        if(cursor){
            // borderStyle = "0.05em solid " + backgroundColor; 
            // element.style.borderRight=(borderStyle);
            element.classList.replace("visible","invisible");
            this.setState({cursor:false});
        }
        else{
            // borderStyle = "0.05em solid " + cursorColor;
            // element.style.borderRight=(borderStyle);
            element.classList.replace("invisible","visible");
            this.setState({cursor:true});
        }
        if(this.state.done){
            element.classList.replace("visible","invisible");
            return;
        }
        setTimeout(()=>{
            this.toggleCursor()
        },1000);
    }
    async delay(delay){
        return new Promise((resolve,reject)=>{   
            setTimeout(resolve,delay);
        });
    }
    render() { 
        const cursorColor = this.state.textColor;
        const backgroundColor = this.state.bgColor;
        const {currentInstance} = this.state;
        // const placeholder = "placeholder-" + currentInstance;
        const cursorID = "cursor-" + currentInstance;
        const {currentText} = this.state;
        // const borderStyle = "0.05em solid " + backgroundColor; 
        const textElement = (
            <h1 className="content display-1" style={{color: this.state.textColor}}>
                {currentText}
                <span id={cursorID} className="visible" style={{borderRight:"0.05em solid" + cursorColor}}></span>
                {/* <span id={placeholder} className="invisible">{currentText}</span> */}
            </h1>
        )
        return (
            <div className="typewriter">
                {textElement}
            </div>
        );
    }
}
 
export default Typewriter;