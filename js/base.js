console.log(`项目地址：https://github.com/cxh1205/ToolStartPage
欢迎star和fork!

提示：
双击图标可以清空输入框
按“回车”可以直接访问目标页`)

//字符串格式化
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length < 1) {
        return result;
    }

    var data = arguments; //如果模板参数是数组
    if (arguments.length == 1 && typeof (args) == "object") {
        //如果模板参数是对象
        data = args;
    }
    for (var key in data) {
        var value = data[key];
        if (undefined != value) {
            result = result.replace("{" + key + "}", value);
        }
    }
    return result;
}

function copy(mes) {
    //创建input标签
    var input = document.createElement('input')
    //将input的值设置为需要复制的内容
    input.value = mes;
    //添加input标签
    document.body.appendChild(input)
    //选中input标签
    input.select()
    //执行复制
    document.execCommand('copy')
    //成功提示信息
    alert(mes+'复制成功')
    //移除input标签
    document.body.removeChild(input)
}

function preload(logos) {
    var images = new Array();
    for (i = 0; i < logos.length; i++) {
        images[i] = new Image()
        images[i].src = logos[i]
    }
}
var logos = [];
data.forEach(block=>{
    if(block.input_box){
        if(block.input_box.logo){
            logos.push(block.input_box.logo)
        }
        if(block.input_box.radios){
            block.input_box.radios.forEach(radio=>{
                logos.push(radio.logo)
            })
        }
    }
})
for(let i in data){
    for(let j in data[i]['radios']){
        logos.push(data[i]['radios'][j]['logo'])
    }
}
preload(logos)