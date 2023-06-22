import moment from 'moment'
import 'moment/locale/ru'

const convertDate = (date: string): string => {
  const now = moment()
  const formattedDate = moment(date).from(now)
  return formattedDate
}

export default convertDate
