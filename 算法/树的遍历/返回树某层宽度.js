// 返回某层树的宽度
function find(depth,tree,curdep){
        let count = 0;
        function findDepth(depth,tree,curdep=1){
            if(!tree){
                return;
            }else{
            if(curdep == depth){
                count++;
                return;
            }else{
                findDepth(depth,tree.left,curdep+1);
                findDepth(depth,tree.right,curdep+1);
            }
        }
    }
    findDepth(depth,tree,curdep);
    return count;
}
let tree = {value:1,left:1,right:{value:1,left:1,right:1}}
find(2,tree,1);

function find(depth,tree){
    let count = 0;
    function finddepth(depth,tree,curdep=1){
        if(!tree){
            return;
        }else{
            if(curdep == depth){
                count++;
                return;
            }else{
                finddepth(depth,tree.left,curdep+1);
                finddepth(depth,tree.right,curdep+1);
            }
        }
    }
    finddepth(depth,tree,1);
    return count;
}

class Object{
    constructor(){
        this.observers = [];
        this.state = 0;
    }
    getState(){
        return this.state;
    }
    setState(val){
        this.state =val;
        this.notify();
    }
    notify(){
        this.observers.forEach(ob=>{
            ob.update();
        })
    }
    attach(ob){
        this.observers.push(ob);
    }
}
class observer{
    constructor(Object){
        this.object = Object;
        this.object.attach(this);
    }
    update(){
        console.log('hello');
    }
}
