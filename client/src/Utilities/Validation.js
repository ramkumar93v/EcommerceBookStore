export const required = value => value ? undefined : 'Required'
export const maxLengthCheck = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength10= maxLengthCheck(10)
export const maxLength15= maxLengthCheck(15)
export const maxLength6=maxLengthCheck(6)
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
export const minValue18 = minValue(18)
export const mobile = value =>
  value && !/^[6-9]\d{9}$/.test(value) ?
  'Invalid Mobile Number' : undefined
