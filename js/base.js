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

// 判断对象是否存在
function is_exist(obj, key) {
    if (key in obj) {
        return obj[key];
    } else {
        return [];
    }
}

console.log('项目地址：https://github.com/cxh1205/ToolStartPage\n欢迎star和fork！\n\n提示：\n双击图标可以清空输入框\n按“回车”可以直接访问目标页')