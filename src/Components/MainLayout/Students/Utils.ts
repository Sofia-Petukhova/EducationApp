export const TitlesHeader = [
  'Студент',
  'Электронная почта',
  'Телефон',
  'Лэтикоины',
]

export const getUserName = (lastName: string, firstName: string, middleName: string) => {
  const abbreviatedFirstName = `${firstName.charAt(0)}.`
  const abbreviatedMiddleName = `${middleName.charAt(0)}.`

  return `${lastName} ${abbreviatedFirstName} ${abbreviatedMiddleName}`
}
