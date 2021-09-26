const handleErrors = (err) => {
  let errors = { note: "", desc: "" };
  // validation errors
  if (err.message.includes("list validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports = handleErrors;
