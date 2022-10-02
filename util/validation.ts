const validateEmail = (email: string) => {
  if (email.length === 0) {
    return "Email is required!";
  }
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    return "Email address is invalid!";
  }
};

const validatePassword = (password: string) => {
  if (password.length === 0) {
    return "Password is required!";
  }
};

const validateName = (name: string) => {
  if (name.length === 0) {
    return "Name is required!";
  }
};


export { validateEmail, validatePassword, validateName };
