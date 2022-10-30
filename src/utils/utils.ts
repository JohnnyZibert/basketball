import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

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
