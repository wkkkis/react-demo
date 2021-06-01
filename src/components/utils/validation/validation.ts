export type fieldValidationType = (value: string) => string | undefined

export const required:fieldValidationType = value => (value ? undefined : 'Required')

