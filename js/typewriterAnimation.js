var blinkRate = 600;
var animationCount = 4;
// var done = false;
var backgroundColor = "#fff";
var cursorColor = "#000";
var delay = 500;

class Typer{
    constructor(el, toPrint, period){
        this.toPrint = toPrint;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.text = '';
        this.isDeleting = false;
        // this.lines = this.toPrint?this.toPrint.length:0;
        this.lines = toPrint.length;
        this.done = false;
    }
    
}



function animate(instanceNum,tracker) {
    // var instanceNum = 0;
    var elements = document.getElementsByClassName('typewrite-' + instanceNum);
    var typer;
    // var tracker = {done:false};
    for(let i = 0; i < elements.length; i++){
        var toPrint = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if(toPrint){
            typer = new Typer(elements[i], JSON.parse(toPrint), period);
            // console.log(typer.toPrint);
            setTimeout(tick,delay,typer,tracker);
        }
    }

    //CSS blinking cursor
    var css = document.createElement("style");
    var mode = [true];
    var blinkInstance = setInterval(blink,blinkRate,mode);
    function blink(mode){
        if(mode[0]){
            css.innerHTML = ".typewrite-" + instanceNum + " > .wrap { border-right: 0.08em solid" + backgroundColor + "}";
            document.body.appendChild(css);
            mode[0] = false;
        } else{
            css.innerHTML = ".typewrite-" + instanceNum + " > .wrap { border-right: 0.08em solid" + cursorColor + "}";
            document.body.appendChild(css);
            mode[0] = true;
        }
    }
    return blinkInstance;
}

//give this a Typer
function tick(that,tracker){
    // console.log("ticking");
    // console.log(that);
    // console.log(that.toPrint);

    //allows for repeatability, can keep track of total repeats too
    var localLoopNum = that.loopNum % that.toPrint.length;
    var fullText = that.toPrint[localLoopNum];
    // console.log(fullText);
    let length = that.text.length;
    if(that.isDeleting) that.text = fullText.substring(0,length-1);
    else that.text = fullText.substring(0,length+1);
    that.el.innerHTML = '<span class="wrap">' + that.text + '</span>';


    //type and delete speed
    var delta = 200 - Math.random() * 100;
    if(that.isDeleting) delta/=2;

    if(!that.isDeleting && that.text === fullText){
        delta = that.period;
        that.isDeleting = true;
        // if(localLoopNum >= that.lines){ 
        //     that.isDeleting = true;
        //     that.done = true;
        // }
        if(that.loopNum == that.lines-1) that.done = true;
    } else if(that.isDeleting && that.text===''){
        that.isDeleting = false;
        that.loopNum++;
        delta = 500;
    }
    
    // that = this;
    // console.log(this);
    // console.log(tracker);
    if(!that.done) setTimeout(tick,delta,that,tracker);
    else tracker.done = true;

}

function scheduler(trackers){
    //if array is empty
    // console.log(trackers);
    var tracker;
    if(!Array.isArray(trackers) || !trackers.length){
        console.log("scheduler done");
        return;
    } 
    
    else{
        tracker = trackers[0];
        console.log(tracker);
        if(tracker.done) {
            console.log("tracker done!");
            console.log(tracker);
            tracker = trackers.shift();
            if(tracker.blinkID){
                clearInterval(tracker.blinkID);
                var css = document.createElement("style");
                css.innerHTML = ".typewrite-" + tracker.index + " > .wrap { border-right:"+backgroundColor+"}";
                document.body.appendChild(css);

            }
            if(trackers.length!=0){
                tracker = trackers[0];
                console.log("animating:"+tracker.index);
                tracker.blinkID = animate(tracker.index,tracker);
            }
        }
    }
}

window.onload = function(){
    var trackers = Array(animationCount);
    for(let i = 0; i < animationCount; i++){
        trackers[i] = {done:false, index:Number(i)};
        console.log(trackers[i]);
    }
    // setTimeout(scheduler,500,trackers);

    //dummy tracker
    trackers.unshift({done:true});
    var id = setInterval(scheduler,delay,trackers);
    setTimeout(clearInterval,100000,id);
}
