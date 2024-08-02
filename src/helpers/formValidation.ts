import { LoginProps, LoginErrorProps, RegisterProps, RegisterErrorProps } from "@/interfaces/IAuth";

export function validateLoginForm(values: LoginProps): LoginErrorProps {
  let errors: LoginErrorProps = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
}

export function validateRegisterForm(values: RegisterProps): RegisterErrorProps {
  let errors: RegisterErrorProps = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  }
  return errors;
}
