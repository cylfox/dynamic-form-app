import type React from 'react'

interface DatePeriodProps {
  formik: {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    values: {
      start: string
      end: string
      increment: string
    }
    errors: Record<string, string>
  }
}

const DatePeriod: React.FC<DatePeriodProps> = ({ formik }) => {
  return (
    <>
      <div className="period">
        <div>
          <b>Period *</b>
        </div>
        <div>
          <label htmlFor="start">Start</label>
          <input
            id="start"
            name="start"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.start}
          />
        </div>
        <div>
          <label htmlFor="end">End</label>
          <input
            id="end"
            name="end"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.end}
          />
        </div>
        <div>
          <label htmlFor="increment">Increment</label>
          <input
            id="increment"
            name="increment"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.increment}
          />
        </div>
      </div>
      <p>{Object.values(formik.errors).join(' ')}</p>
    </>
  )
}

export default DatePeriod
