import $ from 'jquery'

$('<h1>')
    .text("Hello header")
    .css({
        textAlign:'center'
    })
    .appendTo($('header'));