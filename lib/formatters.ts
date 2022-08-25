import formatDuration from 'format-duration'
import moment from 'moment'

export const formatTime = (timeInSeconds = 0) => {
  return formatDuration(timeInSeconds * 1000)
}
export const formatDate=(date :any)=>{
  return moment(date).format("LL");
}