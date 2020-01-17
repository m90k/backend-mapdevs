module.exports = function toStringFromArray(arrayOfString) {
  return arrayOfString.split(",").map(st => st.trim());
};
