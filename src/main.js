let demo = document.querySelector('#demo');
let string = `你好，我是一个前端新人请多指教
接下来我要开始表演了！
给网页增加样式！
我要加的样式有这些：
body {
    color:red;
}
`;
let string2 = '';
let n = -1;
let step = () => {
    setTimeout(() => {
        n = n + 1;
        if (string[n] === '\n') {
            // 如果 是回车就替换
            string2 += '<br>';
        } else {
            // 如果 不是回车就照搬
            string2 += string[n];
        }

        demo.innerHTML = string2;
        if (n < string.length) {
            step();
        }
    }, 10);
};
step();