import 'regenerator-runtime';

let textComponent;
const speed = 1;

const stateSteps = [
  {
    text: 'us.',
    hold: 5000,
  },
  {
    text: 'us',
    hold: 100,
  },
  {
    text: 'u',
    hold: 100,
  },
  {
    text: '',
    hold: 700,
  },
  {
    text: 'J',
    hold: 150,
  },
  {
    text: 'JS',
    hold: 150,
  },
  {
    text: 'JS.',
    hold: 5000,
  },
  {
    text: 'JS',
    hold: 100,
  },
  {
    text: 'J',
    hold: 100,
  },
  {
    text: '',
    hold: 700,
  },
  {
    text: 'u',
    hold: 150,
  },
  {
    text: 'us',
    hold: 150,
  },
];

const performStep = (state, tm) =>
  new Promise(resolve => {
    render(state);
    setTimeout(() => resolve(), tm * speed);
  });

const cycle = async steps => {
  const len = steps.length;
  let i = 6;

  while (true) {
    const state = steps[i];
    const { hold } = state;
    console.log('TCL: state', state);
    await performStep(state, hold);
    i++;
    if (i >= len) i = 0;
  }
};

const render = state => {
  const { text } = state;
  textComponent.innerText = text;
};

const typingAnimation = () => {
  textComponent = document.querySelector('.type__animation-text');
  cycle(stateSteps);
  // render({ text: 'JS.' });
};

export default typingAnimation;
