import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { IconType } from 'react-icons'
import clsx from 'clsx'

interface CustomInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  endIcon?: IconType
  startIcon?: IconType
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  value,
  error,
  label,
  onChange,
  type = 'text',
  className = '',
  placeholder = '',
  endIcon: EndIcon,
  startIcon: StartIcon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="w-full">
      {label && (
        <h1 className="font-secondary text-white font-semibold ml-2 mb-2 text-xs md:text-base">
          {label}
        </h1>
      )}
      <div
        className={clsx(
          'h-[54px] md:h-[60px] bg-gradient-to-b from-[#555555] to-[#33333357] rounded-xl',
          'flex items-center px-5 py-2 gap-2 text-white/80 font-secondary',
          className
        )}
      >
        {StartIcon && <StartIcon className="text-gray-500 text-lg" />}

        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 outline-none bg-transparent text-sm font-secondary font-medium placeholder:text-[#adadad]"
          {...props}
        />

        {type === 'password' ? (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-white/80 text-lg focus:outline-none"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        ) : (
          EndIcon && <EndIcon className="text-gray-500 text-lg" />
        )}
      </div>
      {error && (
        <p className="text-red-400 text-xs mt-2 ml-2 font-primary font-normal">
          {error}
        </p>
      )}
    </div>
  )
}

export default CustomInputField
