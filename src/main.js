let html = document.querySelector('#demo');
let string = `/*你好，我是阿坤请多指教
*接下来我要开始要用HTML+CSS+JS写点东西！
*首先我要准备一下前戏，就是写一个div
*/
#div1 {
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div 变成 一个八卦图
*首先！把 div 变成 一个圆圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    border:none;
}
/*之后就要搞事情了
左黑右白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    content:'';
    display:block;
}
#div1::after{
    content:'';
    display:block;
}
/*
2个神秘的物体
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,248,248,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}


`;
let string2 = '';
let n = 0;
let step = () => {
    setTimeout(() => {
        // 如果是回车，就不照搬
        // 如果不是回车就照搬
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        // 这里是JS滚动
        window.scrollTo(0, 99999);
        demo.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 10);
};
step();
let style = document.querySelector('#style');
setTimeout(() => {
    style.innerHTML = `
    body{
        color:red;
    }
    `
}, 10);