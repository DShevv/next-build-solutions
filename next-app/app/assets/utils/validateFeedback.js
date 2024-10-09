const validateFeedback = (values) => {
  const errors = {};

  console.log(values.phone.length);
  if (!values.phone) {
    errors.phone = "Введите номер телефона";
  } else if (values.phone.length < 11) {
    errors.phone = "Слишком короткий номер телефона";
  }

  return errors;
};

export default validateFeedback;
