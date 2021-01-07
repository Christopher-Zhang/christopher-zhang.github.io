/*
    HTML: n >= 0, the animations go in order of 0,1,2 ... n
    <h1 class="typewrite-n" data-period="{period}" data-type='[ "{text 1}", "{text 2}" ... "{text x}" ]'
        <span class="wrap"></span>
    </h1>
    
    Add a <span class="invisible">{invisible text}</span> to keep spacing
 */


var blinkRate = 600;
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
        this.lines = toPrint.length;
        this.done = false;
    }
    
}
function toggle(cl, tracker){
    if(cl.contains("invisible")){
        cl.remove("invisible");
        cl.add("visible");
    }
    else if(cl.contains("visible")){
        cl.remove("visible");
        cl.add("invisible");
    }
    setTimeout(trackerDone,delay,tracker);
}
function animate(instanceNum,tracker) {
    // var instanceNum = 0;
    var elements = document.getElementsByClassName('typewrite-' + instanceNum);
    var typer;
    // var tracker = {done:false};
    for(let i = 0; i < elements.length; i++){
        var toPrint = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        var cl = elements[i].classList;
        if(cl.contains("toggle")){
            setTimeout(toggle,1000,cl,tracker);
        }
        else if (toPrint){
            typer = new Typer(elements[i], JSON.parse(toPrint), period);
            // console.log(typer.toPrint);
            setTimeout(tick,delay,typer,tracker);
        }
        else{
            tracker.done = true;
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
//give this a Typer and its tracker
function tick(typer,tracker){
    //allows for repeatability, can keep track of total repeats too
    var localLoopNum = typer.loopNum % typer.toPrint.length;
    var fullText = typer.toPrint[localLoopNum];
    // console.log(fullText);
    let length = typer.text.length;
    if(typer.isDeleting) typer.text = fullText.substring(0,length-1);
    else typer.text = fullText.substring(0,length+1);
    typer.el.innerHTML = '<span class="wrap">' + typer.text + '</span>';
    var delta = 150 - Math.random() * 100;
    if(typer.isDeleting) delta/=2;

    if(!typer.isDeleting && typer.text === fullText){
        delta = typer.period;
        typer.isDeleting = true;
        if(typer.loopNum == typer.lines-1) typer.done = true;
    } else if(typer.isDeleting && typer.text===''){
        typer.isDeleting = false;
        typer.loopNum++;
        delta = 500;
    }
    if(!typer.done) setTimeout(tick,delta,typer,tracker);
    else setTimeout(trackerDone,delay,tracker);
}
function trackerDone(tracker){
    tracker.done = true;
}
function scheduler(trackers){
    var tracker;
    //if array is empty
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
            if(tracker.blinkID && trackers.length>0){
            // if(tracker.blinkID){
                var css = document.createElement("style");
                clearInterval(tracker.blinkID);
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
function startAnimation(animationCount){
    var trackers = Array(animationCount);
    for(let i = 0; i < animationCount; i++){
        trackers[i] = {done:false, index:i};
        console.log(trackers[i]);
    }
    //dummy tracker
    trackers.unshift({done:true});
    var id = setInterval(scheduler,100,trackers);
    id = id;
    // setTimeout(clearInterval,100000,id);
}

