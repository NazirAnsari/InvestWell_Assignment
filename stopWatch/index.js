const timer=document.getElementById('stopwatch');
var h=0;
var m=0;
var s=0;

var stopTime=true;

function start(){
    if(stopTime==true){
        stopTime=false;
        timerCycle();
    }
}

function stop(){
    if(stopTime==false){
        stopTime=true;
        //stopCycle();
    }
}

function reset(){
    timer.innerHTML="00"+":"+"00"+":"+"00";
    if(stopTime==false){
    stopTime=true;
    h=0;
    m=0;
    s=0;
    }

}

function timerCycle(){
    if(stopTime==false){
        s=parseInt(s);
        m=parseInt(m);
        h=parseInt(h);

        s+=1;
        if(s==60){
            m+=1;
            s=0;
        }

        if(m==60){
            h+=1;
            m=0;
            s=0;
        }

        if(h==60){
            m=0;
            s=0;
        }

        if(s<10){
            s="0"+s;
        }
        if(m<10){
            m="0"+m;
        }
        if(h<10){
            h="0"+h;
        }

        timer.innerHTML=h +":" + m +":" +s;

        setTimeout(timerCycle,1000);
    }
}