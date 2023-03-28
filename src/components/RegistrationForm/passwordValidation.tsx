export type PasswordValidationResult = {
  isValid: boolean;
  requirements: {
    minLength: boolean;
    hasLowercase: boolean;
    hasUppercase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
  };
};

const passwordValidation = (value: string): PasswordValidationResult => {
  const minLength = value.length >= 8;
  const hasLowercase = /[a-z]/.test(value);
  const hasUppercase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  return {
    isValid: minLength && hasLowercase && hasUppercase && hasNumber && hasSpecialChar,
    requirements: {
      minLength,
      hasLowercase,
      hasUppercase,
      hasNumber,
      hasSpecialChar,
    },
  };
};
export default passwordValidation;
