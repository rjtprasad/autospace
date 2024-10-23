import { IconExclamationCircle } from '@tabler/icons-react'

export interface IFormErrorProps {
  error?: string | undefined
}

export const FormError = ({ error }: IFormErrorProps) => {
  if (error) {
    return (
      <div>
        <IconExclamationCircle className="inline w-4 h-4 text-red-600" />{' '}
        {error}
      </div>
    )
  }

  return null
}
