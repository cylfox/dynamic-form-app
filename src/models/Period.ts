import { dateToHTMLDatePickerFormat } from '../utils/Date'
import { type StringType } from './MappedTypes'

// domain model
export interface Period {
  start: Date
  end: Date
  increment?: number
}

// form model
export type PeriodForm = StringType<Period>

// form validation errors
export type PeriodError = StringType<Period>

export const mapDomainToFormModel = (period: Period): PeriodForm => {
  return {
    start: dateToHTMLDatePickerFormat(period.start),
    end: dateToHTMLDatePickerFormat(period.end),
    increment: period.increment?.toString(),
  }
}
