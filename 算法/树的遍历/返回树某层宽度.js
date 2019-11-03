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
