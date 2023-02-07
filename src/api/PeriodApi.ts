import { type Period } from '../models/Period'

const timeout = 1000

export const getLastPeriod = async (): Promise<Period> => {
  // return fetch.get(`/users`);

  const period: Period = {
    start: new Date(),
    end: new Date(),
    increment: 69,
  }

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(period)
    }, timeout)
  })
}
