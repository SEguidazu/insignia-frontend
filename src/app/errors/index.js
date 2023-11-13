export class LoginError extends Error {
  constructor(message, details) {
    super(message, details);
    this.name = "LoginError";
  }
}

export class RegistrationError extends Error {
  constructor(message, details) {
    super(message, details);
    this.name = "RegisterError";
  }
}
