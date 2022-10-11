export const cap = (inputName) => {
  let capIndex = [0];
  let capName = '';

  for (let i = 0; i < inputName.length; i++) {
    if (inputName[i] === ' ') {
      capIndex.push(i + 1);
    }
  }

  for (let i = 0; i < inputName.length; i++) {
    if (capIndex.includes(i)) {
      capName += inputName[i].toUpperCase();
    } else {
      capName += inputName[i];
    }
  }

  return capName;
};

export const handleDate = (createdAt) => {
  const date1 = new Date(createdAt);
  const date2 = new Date();

  const days = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  let duration;
  if (years >= 1) duration = years > 1 ? `${years} years ago ` : `1 year ago`;
  else if (months >= 1)
    duration = months > 1 ? `${months} months ago ` : `1 month ago`;
  else if (weeks >= 1)
    duration = weeks > 1 ? `${weeks} weeks ago ` : `1 week ago`;
  else if (days >= 1) duration = days > 1 ? `${days} days ago ` : `1 day ago`;

  return duration;
};
