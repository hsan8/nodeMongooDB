exports.isNumber = (page) => {
  if (isNaN(parseInt(page))) {
    return true;
  } else {
    return false;
  }
};
