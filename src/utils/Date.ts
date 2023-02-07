import dayjs from 'dayjs'

export const dateToHTMLDatePickerFormat = (date: Date): string =>
  dayjs(date).format('YYYY-MM-DD')
