import startOfMonth from 'date-fns/start_of_month'
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks'

export default function weekOfMonth(date) {
  const start = startOfMonth(date)
  return differenceInCalendarWeeks(date, start, { weekStartsOn: 1 }) + 1
}
