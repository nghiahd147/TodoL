export const parseErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message
  return 'Unknown error'
}

export type todoParams = {
  status: string
  due_date: string
}
