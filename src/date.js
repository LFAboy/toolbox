// 获取当前时区的日期字符串，格式是 2024-01-01 12:00:00

function getCurrentDateString() {
  const date = new Date()

  // 拿到年月日
  const year = date.getFullYear()
  let month = date.getMonth() + 1 // 月份从 0 开始
  let day = date.getDate() // 设置所处时区

  // 拿到时分秒
  let hours = date.getHours() // getHours getMinutes getSeconds 都是返回 设备所处时区
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  // 格式化
  month < 10 ? (month = `0${month}`) : month
  day < 10 ? (day = `0${day}`) : day
  hours < 10 ? (hours = `0${hours}`) : hours
  minutes < 10 ? (minutes = `0${minutes}`) : minutes
  seconds < 10 ? (seconds = `0${seconds}`) : seconds

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

console.log(getCurrentDateString())
