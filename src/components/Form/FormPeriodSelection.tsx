// import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { getLastPeriod } from '../../api/PeriodApi'
import {
  type PeriodForm,
  type PeriodError,
  mapDomainToFormModel,
} from '../../models/Period'

const validate = (values: PeriodForm): PeriodError => {
  const errors: PeriodError = {} as PeriodError

  if (values.start === undefined) {
    errors.start = 'Required'
  }

  if (values.end === undefined) {
    errors.end = 'Required'
  }

  if (values.increment === undefined) {
    errors.increment = 'Required'
  } else if (Math.abs(values.increment).toString().length < 2) {
    errors.increment = 'Must be 2 characters or more'
  }

  return errors
}

const FormPeriodSelection = (): JSX.Element => {
  const [initialPeriod, setInitialPeriod] = useState<PeriodForm>({
    start: '',
    end: '',
    increment: 0,
  })

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await getLastPeriod()
      setInitialPeriod(mapDomainToFormModel(response))
    }
    void fetchData()
  }, [])

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: initialPeriod,
    enableReinitialize: true,
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormPeriodSelection
