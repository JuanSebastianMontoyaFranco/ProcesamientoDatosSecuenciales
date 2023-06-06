import { DATE_OPTIONS } from './Constants'


// Return true if string is valid to store
export function validateString(string) {
  if (String(string).length > 255) {
    return false
  }

  const re =
    /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b/gm
  return !re.test(String(string).toUpperCase())
}


export function formatDateToLocal(date_string) {
  let date = new Date(date_string)

  return (
    date.toLocaleDateString('es-CO', DATE_OPTIONS) +
    ' ' +
    date.toLocaleTimeString()
  )
}



// Returns true if the first date is greater than the second
export function compareDates(date_1, date_2) {
  let first = new Date(date_1)
  let second = new Date(date_2)

  return first > second
}
