# 工具起始页

## 在线使用网站

[https://jim-tom.gitee.io](https://jim-tom.gitee.io/)*（部署在gitee上加速国内访问）*


<br>

### 小技巧
1. `双击`图标可以清空搜索框
2. 按`回车键`可以直接搜索


## 页面原理

数据储存在data.js中，temp.html根据数据通过draw.js进行渲染    

完成数据修改后将temp.html的网页源代码复制到index.html中以保证网页渲染速度



## 文件树

- logo（存储网页用到的图标）
  - xxx.ico（可用.ico、.jpg、.png）
- js
  - draw.js（渲染逻辑）
  - data.js（网页数据）
  - base.js（基础函数）
  - main.js（网页运行逻辑）
- index.html（网站主网页）
- temp.html（修改数据后的临时网页）
- favicon.ico（网站logo）
- style.css（网页主要css）

#### 关于data.js

```javascript
var data = {
    '方块变量名': {
        'title': '方块显示的标题',
        'placeholder': '搜索框里的内容',
        'button': '搜索框按钮内容',
        'blank':'搜索框空白时的提示',
        'radios': {
            '选项的变量名': {
                'name': '选项展示的名称',
                'logo': 'logo/图标文件名',
                'url': '链接前缀如https://cn.bing.com/search?q='
            },
        }
        'logo':'默认图标路径',
        'extend':{
            'html':'扩展代码'
            'js':'扩展逻辑'
        }
    },
}
```



## 修改指南

1. 更改data.js
2. 在浏览器中打开temp.html
3. 将其body中的代码覆盖index.html中body的代码
4. 保存文件
