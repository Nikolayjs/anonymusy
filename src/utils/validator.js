export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    const date = new Date();
    let statusValidate;
    switch (validateMethod) {
      case 'isCorrectAge': {
        statusValidate = Number(data) < date.getFullYear();
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod, //'isRequired
        data[fieldName], //email@mail.ru или 'password'
        config[fieldName][validateMethod] // {message: Поле обязательно для заполнения}
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
