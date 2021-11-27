const pushBtn = document.getElementById('pushBtn');

const startTime = Date.now();
let nowTime = 0;
const showTime = document.getElementById('showTime');
const LIMIT = 10;

function time() {
    nowTime = (Date.now() - startTime) / 1000;
    let rest = LIMIT - Math.floor(nowTime);
    if(rest > 0) {
        showTime.innerText = `残り${rest}秒`;
    } else {
        showTime.innerText = '終了！！！';
        pushBtn.style.pointerEvents = 'none';
    }
}

const countBox = document.getElementById('countBox');
let count = 0;

function plusOne() {
    count++
    countBox.innerText = count;
}
time();
setInterval(time, 1000);