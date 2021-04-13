export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isEmpty = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

export const prefixLink = (link) => {
  var prefix = 'http://';
  if (link.substr(0, prefix.length) !== prefix) {
    link = prefix + link;
    return link;
  }
};
