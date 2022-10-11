import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

// export function getAge(birthday: string) {
//   const today = new Date()
//   const birthDate = new Date(birthday)
//   let age = today.getFullYear() - birthDate.getFullYear()
//
//   let m = today.getMonth() - birthDate.getMonth()
//   const d = today.getDay() - birthDate.getDay()
//
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--
//   }
//   if (age === 0) {
//     m = 12 + m
//     if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
//       m--
//     }
//   }
//
//   return age ? age : m
// }

export const getAge = (birthday: string) => {
  const now = new Date()
  //Текущя дата
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) //Текущя дата без времени
  const dob = new Date(birthday) //Дата рождения
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()) //ДР в текущем году
  let age //Возраст
  //Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear()
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age - 1
  }
  return age
}
