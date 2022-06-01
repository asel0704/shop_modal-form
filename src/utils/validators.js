export function required(message) {
  return message || "Обязательное поле";
}

export function validateTelephoneNumber(number) {
  const regexp = /^(\+7|8|7)?[\s]?\(?\d{3}\)?([-\s])?\d{3}?([-\s])?\d{2}?([-\s])?\d{2}$/;
  if (!regexp.test(number)) {
    return "Phone Number is not Valid!";
  } else {
   
  }
}

export function validatePassword(value) {
  if (value.length < 8) return "Minimum 8 symbols";
}

export function validateCPassword(password) {
  return function (value) {
    if (value !== password) {
      return "Passwords are not same";
    }
  };
}
