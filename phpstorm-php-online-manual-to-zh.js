// ==PHPstorm php online manual to zh==
// @name         php英文在线手册跳转到中文手册
// @namespace    http://www.tang3.net/
// @version      0.1
// @description  编写主要是为了在PHPstorm查看PHP在线手册，默认是跳转到英文手册的。本脚本会自动重定向到正文手册页面
// @author       Tang3
// @match        *://www.php.net/manual/en*
// @match        *://php.net/manual/en*
// @match        *.php.net/manual/en*
// @match        *.php.net/*/en*
// @grant        none
// ==/PHPstorm php online manual to zh==

(function() {
    'use strict';

    var url = location.href;
    var reg=new RegExp("\/en\/");
    url = url.replace(reg, '/zh/');
    location.replace(url);
})();
