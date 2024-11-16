export function formatISOTime (isoTime, mode) {
  const date = new Date(isoTime)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  let formattedTime = ''

  if (mode.includes('0')) {
    formattedTime += `${year}年`
  }
  if (mode.includes('1')) {
    formattedTime += `${month}月`
  }
  if (mode.includes('2')) {
    formattedTime += `${day}日`
  }
  if (mode.includes('3')) {
    formattedTime += `${hours}:${minutes}`
  }

  return formattedTime
}
export function formatDate (dateString) {
  const date = new Date(dateString)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${month}月${day}日`
}
