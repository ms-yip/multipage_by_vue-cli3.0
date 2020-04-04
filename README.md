# mulpages
开始探索多页面，是因为工作中需要维护一个很老旧的项目，他的管理后台很神奇的一个项目。开始是一个前后端不分离的项目，随着后面更迭，引入前后端分离，有jQuery，后来又有vue，由于php需要整个html display，用vue写的新功能是每个页面开发完成后打包进项目里面。想想都觉得恐怖，到最后我接触的时候是项目变得非常凌乱。虽然一度想重构，可惜现实不允许。

而且很多时候，一些项目随着项目扩展，项目打包的时间越来越长，如果只修改部分业务重新打包的确是要很久，然后多页面这种方式个人觉得是蛮可以的。那么这个是vue-cli3.0搭建的一个多页面demo,webpackversion: 4.41.6。请食用......


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Visite with browser
运行后，浏览器输入 http://localhost:8080/  默认为page1.html
其他html 入口
http://localhost:8080/index.html
http://localhost:8080/page1.html
http://localhost:8080/page2.html




### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
