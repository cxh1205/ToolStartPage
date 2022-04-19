var data = [
    {
        name: 'search',
        title: '搜索',
        input_box: {
            placeholder: '请输入搜索内容',
            button: '搜索',
            if_blank: '请输入要搜索的内容',
            radios: [
                {
                    name: '必应',
                    logo: 'logo/bing.ico',
                    url: 'https://cn.bing.com/search?q={0}'
                },
                {
                    name: '百度',
                    logo: 'logo/baidu.ico',
                    url: 'https://www.baidu.com/s?wd={0}'
                },
                {
                    name: '知乎',
                    logo: 'logo/zhihu.ico',
                    url: 'https://www.zhihu.com/search?type=content&q={0}'
                },
                {
                    name: '微博',
                    logo: 'logo/weibo.ico',
                    url: 'https://s.weibo.com/weibo/{0}'
                },
                {
                    name: '谷歌',
                    logo: 'logo/google.ico',
                    url: 'https://www.google.com/search?q={0}'
                },
            ],
            execute: 'open_new_page',
        }
    },
    {
        name: 'code',
        title: '搜代码',
        input_box: {
            placeholder: '请输入搜索内容',
            button: '搜索',
            if_blank: '请输入要搜索的内容',
            radios: [
                {
                    name: 'csdn',
                    logo: 'logo/csdn.ico',
                    url: 'https://so.csdn.net/so/search?q={0}&t=blog'
                },
                {
                    name: '博客园',
                    logo: 'logo/博客园.ico',
                    url: 'https://zzk.cnblogs.com/s?w={0}'
                },
                {
                    name: 'github',
                    logo: 'logo/github.ico',
                    url: 'https://github.com/search?q={0}'
                },
                {
                    name: 'StackOverflow',
                    logo: 'logo/stack.ico',
                    url: 'https://stackoverflow.com/search?q={0}'
                }
            ],
            execute: 'open_new_page',
        }
    },
    {
        name: 'video',
        title: '搜视频',
        input_box: {
            placeholder: '请输入搜索内容',
            button: '搜索',
            if_blank: '请输入要搜索的内容',
            radios: [
                {
                    name: '腾讯视频',
                    logo: 'logo/腾讯视频.ico',
                    url: 'https://v.qq.com/x/search/?q={0}'
                },
                {
                    name: '爱奇艺',
                    logo: 'logo/爱奇艺.png',
                    url: 'https://so.iqiyi.com/so/q_{0}'
                },
                {
                    name: 'B站',
                    logo: 'logo/哔哩哔哩.ico',
                    url: 'https://search.bilibili.com/all?keyword={0}'
                },
                {
                    name: '优酷',
                    logo: 'logo/youku.ico',
                    url: 'https://so.youku.com/search_video/q_{0}'
                },
                {
                    name: '芒果',
                    logo: 'logo/芒果.ico',
                    url: 'https://so.mgtv.com/so?k={0}'
                }
            ],
            execute: 'open_new_page',
        }
    },
    {
        name: 'jiexi',
        title: '视频解析',
        input_box: {
            placeholder: '请输入视频链接',
            button: '解析',
            if_blank: '请输入要解析的视频链接',
            radios: [
                {
                    name: '解析1',
                    logo: '',
                    url: 'https://jx.parwix.com:4433/player/analysis.php?v={0}'
                },
                {
                    name: '解析2',
                    logo: '',
                    url: 'https://jsap.attakids.com/?url={0}'
                },
            ],
            execute: 'open_new_page',
        }
    },
    {
        name: 'download',
        title: '下载解析',
        input_box: {
            placeholder: '请输入下载链接',
            button: '下载',
            if_blank: '请输入要下载的文件链接',
            radios: [
                {
                    name: 'github',
                    logo: 'logo/github.ico',
                    url: 'https://ghproxy.com/?q={0}'
                },
            ],
            execute: 'open_new_page',
        }
    },
    {
        name: 'qrcode',
        title: '二维码生成',
        input_box: {
            placeholder: '请输入二维码内容',
            button: '生成',
            if_blank: '请输入二维码内容',
            logo: 'logo/qrcode.jpg',
            execute: 'eval_extend_js',
        },
        extend_html: '<div id="qrcodearea" style="height:0;"><img src="" class="qrcode-img" style="width: 50%;border-radius: calc(var(--size)*6/100);"></div>',
        extend_js: `document.querySelector("#qrcodearea").style.height="auto";
        document.querySelector(".qrcode-img").src="https://api.pwmqr.com/qrcode/create/?url="+encodeURIComponent(this.content);`,
    },
    {
        name: 'copy',
        title: '模板生成',
        input_box: {
            placeholder: '请输入插槽内容',
            button: '复制',
            if_blank: '请输入插槽内容',
            radios: [
                {
                    name: '百度',
                    logo: 'logo/baidu.ico',
                    url: 'https://baidu.leeay.com/?s={0}'
                },
            ],
            execute: 'copy',
        },
    },
];

