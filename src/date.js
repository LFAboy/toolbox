/**
 * 根据传入的自定义时间格式模版，获取当前时间（或者传入的时间戳）
 * 也就是把传入的格式化字符串中，表示时间的位置替换成当前或指定时间
 * @param {string} formatter - 时间格式化字符串 - 必传
 * @param {string} timestamp - 时间戳字符串，单位秒或者毫秒 - 可选
 * @returns {string} - 格式化后的时间
 * @example
 * getCustomTimes('YYYY-MM-DD HH:MM:SS') 2025-01-03 10:10:10
 * getCustomTimes('YYYY.MM.DD HH:MM') 2025.01.03 10:10
 * getCustomTimes('YYYY.MM.DD HH:MM', '1741679317') 2025.03.11 15:48
 */
export function getCustomTimes(formatter, timestamp) {
  if (!formatter) {
    throw new Error('传入的 formatter 参数是必填的')
  }
  let date = new Date()
  if (timestamp) {
    timestamp += ''
    if (timestamp.length === 10) {
      date = new Date(parseInt(timestamp) * 1000)
    } else if (timestamp.length === 13) {
      date = new Date(parseInt(timestamp))
    } else {
      throw new Error('传入的时间戳既不是秒级时间戳，也不是毫秒级时间戳')
    }
  }
  let data = {
    year: date.getFullYear(),
    month:
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1,
    date: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    hour: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    min: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    sec: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
  }

  return formatter
    .replace('YYYY', data.year)
    .replace('MM', data.month)
    .replace('DD', data.date)
    .replace('HH', data.hour)
    .replace('MM', data.min)
    .replace('SS', data.sec)
}
