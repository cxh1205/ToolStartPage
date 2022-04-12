# 工具起始页

## 在线使用网站

[https://cxh1205.gitee.io](https://cxh1205.gitee.io/)*（部署在gitee上加速国内访问）*
<br>

## 特色
1. `双击`图标可以清空输入框
2. 按`回车键`可以直接执行操作

## data.js

```javascript
var data = [
    {
        name: '方块名称',
        title: '方块标题',
        input_box: {
            placeholder: '输入框提示',
            button: '按钮',
            if_blank: '输入框为空时提示',
            radios: [
                {
                    name: '选项1',
                    logo: 'logo/logo1.ico',
                    url: 'https://example.com?content={0}'
                },
                {
                    name: '选项2',
                    logo: 'logo/logo2.ico',
                    url: 'https://example.com?content={0}'
                },
            ],
            execute: '按下按钮执行的操作',
        },
        extend_html: `额外的html代码`,
        extend_js: `额外的js代码`,
    },
]
```
### 解释：
1. 每个block对象中只有name对象是必须的
2. input_box中除radios外都是必须的
3. execute目前只有4个选项，可自定义增加其他的
   1. open_new_page：打开新的页面
   2. eval_extend_js：执行extend_js中的内容
   3. copy：复制一串文本，其中中文**都会**被URL编码
   4. copy_raw：复制一串文本，其中中文**不会**被URL编码
4. input_box.radios中链接的`{0}`，在按下按钮时，会被替换为输入框的内容

<br>

## 展望
- [x] 学习vue.js框架，并用来部署网页
- [ ] 增加快捷方式常驻block
