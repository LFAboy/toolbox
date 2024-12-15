// 2023年9月7日
// 内容：节流和防抖


// 节流：在规定的时间内只触发一次事件，多余的触发不生效。

function throttle(fn, interval) {
  let flag = false;
  return function (...args) {
    if (flag) return;
    flag = true;
    setTimeout(() => {
      fn.apply(this, args);
      flag = false;
    }, interval);
  }
}



// 防抖；在规定的事件内触发多次时，取消前面一次的触发，只有最后一次触发生效。
function debounce(fn, delay) {
  let flag = false;
  let timer = null;

  return function (...args) {
    if (flag) {
      clearTimeout(timer);
    }
    flag = true;
    timer = setTimeout(() => {
      fn.apply(this, args);
      flag = false;
    }, delay);
  }
}