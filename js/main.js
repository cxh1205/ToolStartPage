// 预加载
function preload(logos) {
    var images = new Array();
    for (i = 0; i < logos.length; i++) {
        images[i] = new Image()
        images[i].src = logos[i]
    }
}
var logos = [];
for(let i in data){
    for(let j in data[i]['radios']){
        logos.push(data[i]['radios'][j]['logo'])
    }
}
preload(logos)

// 点击第一个选项
var first_radio = document.querySelectorAll('.select input:first-child');
for(let i=0;i<first_radio.length;i++){
    first_radio[i].click();
}

// 默认聚焦第一个搜索框
document.querySelector("input[type='text']").focus();


// 判断逻辑
function press_button(name){
    var info = data[name];
    var content = document.querySelector('#{0}'.format(name));
    if (!content.value) {
        alert(info['blank']);
        content.focus();
        return;
    }
    if(info['radios']){
        var radio = document.querySelectorAll('.{0} input[type="radio"]'.format(name));
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                window.location.href = info['radios'][radio[i].value]['url'].format(content.value);
            }
        }
    }
    else{
        eval(info['extend']['js']);
    }
    
}
function keyup_submit(e, name){ 
    var evt = window.event || e; 
    if (evt.keyCode == 13){
        press_button(name)
    }
}