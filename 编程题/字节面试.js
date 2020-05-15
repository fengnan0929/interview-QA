function fn(arr){
    arr.reduce((res,item)=>{
        return res.then(()=>item).then(item=>console.log(item));
    },Promise.resolve())
}


String.prototype.repeat = function (time){
    let str = this;
    let res='';
    while(time){
        res += str;
        time--;
    }
    return res;
}

function promiseSome(arr){
    return new Promise((resolve,reject)=>{
        let res = [];
        let count = 0;
        arr.forEach((item)=>{
            item.then((result)=>{
                res.push(result);
                count++;
                if(count>3){
                    resolve(res);
                }
            });
        })      
    })
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class pageComponent{
    constructor(props){
        this.onSelected = false;  // 默认没有被选中
        this.props = props;
    }
    onSelected(event){
        const id = this.props.id;
        this.props.onSelected && this.props.onSelected(id);
    }
    OnDrag(event){
        const id = this.props.id;
        this.props.OnDrag && this.props.OnDrag(id);
    }
    onDelete(event){
        const id = this.props.id;
        this.props.onDelete && this.props.onDelete(id);

    }
    onChangeProps(event){
        const id = this.props.id;
        this.props.onChangeProps && this.props.onChangeProps(id);
    }
    onSaveProps(event){
        const id = this.props.id;
        this.props.onSaveProps && this.props.onSaveProps(id);
    }
}


import Blockly from "blockly";

Blockly.Blocks.user_viplevel = {
  init: function() {
    this.appendDummyInput('viplevel')
      .appendField('用户会员等级')
      .appendField(new Blockly.FieldDropdown([["等于", "1"], ["大于", "2"], ["小于", "3"]]), "OP")
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "VIPLEVEL")
    this.setOutput(true, null);
    this.setColour(35);
    this.setTooltip("用户等级与一定等级的比较");
  }
};

Blockly.JavaScript.user_viplevel = function(block) {
  var dropdown_type = block.getFieldValue('VIPLEVEL') || '1';
  var op = block.getFieldValue('OP');

  var options = { "1": "===", "2": ">", "3": "<" };

  var code = `syncData.userData.qq_vip.level ${options[op]} ${dropdown_type}`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};