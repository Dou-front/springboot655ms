开发语言：Java
JDK版本：JDK1.8
服务器：tomcat7
数据库：mysql 5.7（一定要5.7版本）
数据库工具：Navicat11
开发软件：eclipse/myeclipse/idea
Maven包：Maven3.3.9
浏览器：谷歌浏览器或edge
配置环境安装包：
Java配置环境链接：https://cloud.189.cn/t/baeQZrAjEvyy （访问码：pfd5） 

管理员账号：admin
管理员密码：admin

1、在idea打开并运行Pro中的springboot655ms
2、打开Pro文件夹
首先要进行前后端分离操作
node版本要求：nodejs版本必须是14.5（已提供）  win+r输入cmd执行npm -v查看版本
全局执行命令：
安装cnpm:
npm uninstall -g cnpm
npm install cnpm@7.1.0 -g –registry          
//=https://registry.npm.taobao.org
安装webpack:
安装vue-cli脚手架工具:
cnpm install webpack -g 
cnpm install -g vue-cli
在front文件夹执行cmd输入npm run serve/yarn serve 
注意 如果第一次执行报错，关闭命令指示符窗口再次输入npm run serve/yarn serve即可

——打开admin文件夹，直接点击2-run.bat，跑起来后，利用给出的网址，在edge进入管理员后台 
——与打开后台界面相似，打开front文件夹，直接点击run.bat，跑起来后，利用给出的网址进入用户前台
