var data = {
    'search': {
        'title': '搜索',
        'placeholder': '请输入搜索内容',
        'button': '搜索',
        'blank':'请输入要搜索的内容',
        'radios': {
            'bing': {
                'name': '必应',
                'logo': 'logo/bing.ico',
                'url': 'https://cn.bing.com/search?q={0}'
            },
            'baidu': {
                'name': '百度',
                'logo': 'logo/baidu.ico',
                'url': 'https://www.baidu.com/s?wd={0}'
            },
            'zhihu': {
                'name': '知乎',
                'logo': 'logo/zhihu.ico',
                'url': 'https://www.zhihu.com/search?type=content&q={0}'
            },
            'weibo': {
                'name': '微博',
                'logo': 'logo/weibo.ico',
                'url': 'https://s.weibo.com/weibo/{0}'
            },
        },
    },
    'code': {
        'title': '搜代码',
        'placeholder': '请输入搜索内容',
        'button': '搜索',
        'blank':'请输入要搜索的内容',
        'radios': {
            'csdn': {
                'name': 'csdn',
                'logo': 'logo/csdn.ico',
                'url': 'https://so.csdn.net/so/search?q={0}'
            },
            'blog': {
                'name': '博客园',
                'logo': 'logo/博客园.ico',
                'url': 'https://zzk.cnblogs.com/s?w={0}'
            },
            'github': {
                'name': 'github',
                'logo': 'logo/github.ico',
                'url': 'https://github.com/search?q={0}'
            },
        },
    },
    'video': {
        'title': '搜视频',
        'placeholder': '请输入搜索内容',
        'button': '搜索',
        'blank':'请输入要搜索的内容',
        'radios': {
            'tencent': {
                'name': '腾讯视频',
                'logo': 'logo/腾讯视频.ico',
                'url': 'https://v.qq.com/x/search/?q={0}'
            },
            'iqiyi': {
                'name': '爱奇艺',
                'logo': 'logo/爱奇艺.png',
                'url': 'https://so.iqiyi.com/so/q_{0}'
            },
            'bilibili': {
                'name': 'B站',
                'logo': 'logo/哔哩哔哩.ico',
                'url': 'https://search.bilibili.com/all?keyword={0}'
            },
        },
    },
    'jiexi': {
        'title': '视频解析',
        'placeholder': '请输入视频链接',
        'button': '解析',
        'blank':'请输入要解析的视频链接',
        'radios': {
            'jiexi1': {
                'name': '解析1',
                'logo': '',
                'url': 'https://jx.parwix.com:4433/player/analysis.php?v={0}'
            },
        },
    },
    'download': {
        'title': '下载解析',
        'placeholder': '请输入下载链接',
        'button': '下载',
        'blank':'请输入要下载的文件链接',
        'radios': {
            'githubjiexi': {
                'name': 'github',
                'logo': 'logo/github.ico',
                'url': 'https://ghproxy.com/?q={0}'
            },
        },
    },
    'show': {
        'title': '展示文件',
        'placeholder': '请输入文件链接',
        'button': '展示',
        'blank':'请输入要展示的文件链接',
        'radios': {
            'md': {
                'name': 'md',
                'logo': 'logo/hero.png',
                'url': 'https://tool.tuotuo.space/md/?l={0}'
            },
        },
    },
    'qrcode': {
        'title': '二维码生成',
        'placeholder': '请输入二维码内容',
        'button': '生成',
        'blank':'请输入二维码内容',
        'logo':'logo/qrcode.jpg',
        'extend':{
            'html':'<div id="qrcodearea" style="height:0;"><img src="" class="qrcode-img" style="width: 50%;border-radius: calc(var(--size)*6/100);"></div>',
            'js':'document.querySelector("#qrcodearea").style.height="auto";\
                document.querySelector(".qrcode-img").src="https://api.pwmqr.com/qrcode/create/?url="+content.value;'
        }
    },
}