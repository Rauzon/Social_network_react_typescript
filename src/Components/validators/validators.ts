

export const required = (value: string | number) => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = (max: number) => (value: string) => {

   return value && value.length > max ? `Must be ${max} characters or less` : undefined

}