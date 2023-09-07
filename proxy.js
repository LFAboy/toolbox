let obj = {
  name: 'dhj',
  age: 21,
}

let p = new Proxy(obj, {
  get(target, proptype, reactiver) {
    // target 目标对象，proptype 属性，reactiver 代理对象，这里也就是 p
    return target[proptype];
  },
  set(target, proptype, value, reactiver) {
    return target[proptype] = value;
  },
  deleteProperty(target, proptype) {
    return delete target[proptype];
  }
})

console.log(p.age);
console.log(p.age = 22);
console.log(p.age);