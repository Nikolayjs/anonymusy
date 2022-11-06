export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    const date = new Date();
    let statusValidate;
    switch (validateMethod) {
      case 'isRequired':
        if (typeof data === 'boolean') {
          statusValidate = !data;
        } else {
          statusValidate = data.trim() === '';
        }
        break;
      case 'isCorrectAge': {
        statusValidate = Number(data) > date.getFullYear() || Number(data) < 1900;
        break;
      }
      case 'isCorrectUrl': {
        const urlRegex =
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        statusValidate = !urlRegex.test(data);
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
