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
