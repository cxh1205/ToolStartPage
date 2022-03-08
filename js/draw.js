// 绘制页面
function create_block(block_name, title, textarea, radios, extend){
    var content=['<!-- '+ title +' -->',
    '<div class="block {1}" onclick="document.querySelector(\'#{0}\').focus()">'.format(block_name, block_name),
        '<div class="title">{0}</div>'.format(title),
        '<div class="textarea">',
            textarea,
        '</div>',
        '<div class="select">',
            radios,
        '</div>',
        '<div class="extend">',
            extend,
        '</div>'];
    for(let i=5; i<arguments.length; i++){
        content.push(arguments[i]);
    }
    content.push('</div>');
    return content.join('\n');
}

function create_textarea(block_name, placeholder, button, logo){
    var content=[
        '<div class="logo" ondblclick="document.querySelector(\'#{0}\').value=\'\'"><img src="{1}" class="logo-pic"></div>'.format(block_name, logo),
        '<div class="input-area">',
            '<input type="text" id="{0}" placeholder="{1}" onkeydown="keyup_submit(event, \'{2}\')" autocomplete="off">'.format(block_name, placeholder, block_name),
            '<div class="button" onclick="press_button(\'{0}\')">{1}</div>'.format(block_name, button),
        '</div>'
    ];
    return content.join('\n');
}

function create_radios(block_name, radio) {
    var content = [];
    for (let i in radio) {
        let info = radio[i];
        content.push('<input type="radio" name="{0}" value="{1}" id="{2}" onclick="document.querySelector(\'.{4} .logo-pic\').src=\'{3}\'">'.format(block_name,i ,i, info['logo'], block_name),
            '<label for="{0}">{1}</label>'.format(i, info['name'])
        );
    }
    return content.join('\n');
}

function draw_page(){
    var content=[]
    for(let i in data){
        let info = data[i];
        // if(info['radios']){
        content.push(create_block(block_name = i, title = is_exist(info, 'title'), textarea = create_textarea(i, is_exist(info, 'placeholder'), is_exist(info, 'button'), is_exist(info, 'logo')), radios = create_radios(i, is_exist(info, 'radios')), extend = is_exist(info, 'extend')['html']));
        // }
        // else{
        //     content.push(create_block(i, info['title'], create_textarea(i, info['placeholder'], info['button'], info['logo']),'' , info['extend']['html']));
        // }
    }
    return content.join('\n');
}
document.querySelector('body').innerHTML=draw_page();