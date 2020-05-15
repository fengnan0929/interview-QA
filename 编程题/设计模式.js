// 观察者模式

class Object {
    constructor(){
        this.observers = [];
        this.state = 0;
    }
    attach(observer){
        this.observers.push(observer);
    }
    getState(){
        return this.state
    }
    setState(val){
        this.state = val;
        this.notify();
    }
    notify(){
        this.observers.forEach(obs=>{
            obs.update();
        })
    }
}

class Observer{
    constructor(subject){
        this.subject = subject;
        this.subject.attach(this);
    }
    update(){
        console.log(`${this.subject.getState()}`)
    }
}


//test 
let s = new Subject();
let o1 =new Observer(s);
let o2 =new Observer(s);


// 发布-订阅模式
class Event{
    constructor(){
        this.EventPool = [];
    }
    On(event,callback){
        this.EventPool[event]? this.EventPool[event].push(callback) : this.EventPool[event] = [callback];
    }
    Emit(event,...args){
        this.EventPool[event] && this.EventPool[event].forEach(cb=>cb(args));
    }
}

//test
const event = new Event();
event.On("err", console.log);
event.Emit("err", "have error");