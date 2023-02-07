import { dateToHTMLDatePickerFormat } from '../utils/Date'

// domain model
export interface Period {
  start: Date
  end: Date
  increment?: number
}

// form model
export interface PeriodForm {
  start: string
  end: string
  increment?: number
}

// form validation errors
export interface PeriodError {
  start: string
  end: string
  increment: string
}

export const mapDomainToFormModel = (period: Period): PeriodForm => {
  return {
    start: dateToHTMLDatePickerFormat(period.start),
    end: dateToHTMLDatePickerFormat(period.end),
    increment: period.increment,
  }
}
