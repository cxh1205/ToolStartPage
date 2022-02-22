# 修改文件规则
*一般仅需修改**data.js***
### 步骤
1. 修改data.js
2. 直接在浏览器中打开temp.html
3. 复制body中的代码
4. 覆盖index.html中的body
5. 删除index.html中的`<script type="text/javascript" src="draw.js"></script>`
6. 保存修改上传
7. `git add data.js index.html`
8. `git commit -m`
9. `git push github master`
10. `git push gitee master`
11. 重新部署gitee网页
12. 在各处重新拉取代码