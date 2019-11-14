const tagColors = {
  'NodeJS': {
    tagBG: '#7AB464',
    color: '#fff',
  },
  'WebGL': {
    tagBG: '#ff7302',
    color: '#ffffff'
  },
  'Ecosystem': {
    tagBG: '#fff40d',
    color: '#ae4f01'
  },
  default: {
    tagBG: 'black',
    color: 'white'
  }
};

const getLabelColor = label => {
  const colors = tagColors[label] || tagColors.default;
  return colors;
};

module.exports = {
  getLabelColor
};
