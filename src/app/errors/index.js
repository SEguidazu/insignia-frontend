export const EMAIL_NOT_CONFIRMED_ERROR_TEXT =
  "Your account email is not confirmed";

export class LoginError extends Error {
  constructor(message, details) {
    super(message, details);
    this.name = "LoginError";
  }
}

export class UpdateUserError extends Error {
  constructor(message, details) {
    super(message, details);
    this.name = "UpdateUserError";
  }
}

export class RegistrationError extends Error {
  constructor(message, details) {
    super(message, details);
    this.name = "RegisterError";
  }
}

export class OrderError extends Error {
  constructor(message, details) {
    super(message, details);
    this.name = "OrderError";
  }
}
