import moment from 'moment'
import 'moment/locale/ru'

export const getDateHeader = (): string =>
  moment().locale('ru').format('D MMMM, dddd')

export const getDateNews = (date: string) =>
  moment(date).format('D.MM.YYYY')
