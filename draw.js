// 绘制页面
function create_block(name, title_name, placeholder, radios, button_content){
    
    var radio_name=[];
    for(let i in radios){
        radio_name.push(i);
    }
    var content='<!-- '+ title_name +' -->\
    <div class="block">\
        <div class="title">'+ title_name +'</div>\
        <div class="textarea">\
            <div class="logo" ondblclick="document.getElementById(\''+name+'\').value=\'\'"><img src="'+radios[radio_name[0]]['logo']+'" class="logo-pic"></div>\
            <div class="input-area">\
                <input type="text" id="'+name+'" placeholder="'+placeholder+'" onkeydown="keyup_submit(event, \''+name+'\')" autocomplete="off" autofocus>\
                <div class="button" onclick="press_button(\''+name+'\')" onselectstart="return false;">'+button_content+'</div>\
            </div>\
        </div>'
        +create_select(name, radio_name, radios)+
    '</div>';
    
    
    return content;
}

function create_radio(name, radio_id, radio_ico, radio_name, checked){
    if(checked) return '<input type="radio" name="'+ name +'" value="'+ radio_id +'" id="'+ radio_id +'" checked onclick="this.parentElement.parentElement.getElementsByTagName(\'img\')[0].src=\''+ radio_ico +'\'"><label for="'+ radio_id +'">'+ radio_name +'</label>';
    else return '<input type="radio" name="'+ name +'" value="'+ radio_id +'" id="'+ radio_id +'" onclick="this.parentElement.parentElement.getElementsByTagName(\'img\')[0].src=\''+ radio_ico +'\'"><label for="'+ radio_id +'">'+ radio_name +'</label>';
}

function create_radios(name, radio_name, radios){
    var content=create_radio(name, radio_name[0], radios[radio_name[0]]['logo'], radios[radio_name[0]]['name'], true);
    for(let i=1; i<radio_name.length; i++){
        content+=create_radio(name, radio_name[i], radios[radio_name[i]]['logo'], radios[radio_name[i]]['name'], false);
    }
    return content;
}

function create_select(name, radio_name, radios){
    var content=
    '<div class="select">'
    +create_radios(name, radio_name, radios)+
    '</div>';
    return content;
}

function draw_page(){
    var content=''
    for(let i in data){
        content+=create_block(i, data[i]["title"], data[i]["placeholder"], data[i]["radios"], data[i]["button"]);
    }
    document.getElementsByTagName('body')[0].innerHTML=content+document.getElementsByTagName('body')[0].innerHTML;
}
draw_page()