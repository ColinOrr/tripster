import addDays from 'date-fns/add_days'
import addMonths from 'date-fns/add_months'
import startOfDay from 'date-fns/start_of_day'
import startOfMonth from 'date-fns/start_of_month'

function range(start, end, step) {
  let values = [start]
  for(var i = 1; values[values.length - 1] < end; i++) {
    values = [...values, step(start, i)]
  }
  return values
}

export function dateRange(start, end) {
  return range(startOfDay(start), startOfDay(end), addDays)
}

export function monthRange(start, end) {
  return range(startOfMonth(start), startOfMonth(end), addMonths)
}
