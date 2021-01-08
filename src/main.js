let demo = document.querySelector('#demo');
//反引号是可以写数组下标的！
let string = `你好，我是一个前端新人请多指教`;
console.log(string.length);
let n = 0;
//demo 里面写网页元素。
demo.innerHTML = string.substring(0, n);
// 使用setTimeout 方法 写一个延时函数。逗号之后是设置时间单位是毫秒！ setTimeout只会发动一次
// 所以满足不到我们，所以使用setInterval 这个是每3秒 发动一次。（但是新人才会这样用）
/*setInterval(() => {
    n = n + 1;
    demo.innerHTML = n;
}, 1000);*/
//高手都是这样用的哦!使用递归！
let step = () => {
    setTimeout(() => {
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        console.log(n);
        if (n < string.length) {
            step();
        }
    }, 100);
};
step();
// 这样的一个缺陷！就是 它的时间不对！为什么不对？因为，它的时间是固定的，所以中间不给你反应的时间，
// 就直接过去了，那么我们应该怎么做呢？只需要执行完这个函数之后，再执行一次就好。所以！