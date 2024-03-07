import { getVariable } from 'functions';

const DEFAULT_URL = 'ws://localhost:3000';

const DEFAULT_TEXT_DECORATION_CONFIG = {
  color: `rgba(255, 255, 255, 0.35)`,
  margin: '0 0 0 1rem',
};

const DEFAULT_CONFIG_SET_ALPACA = {
  // n_predict: 96,
  n_predict: 50,
  // top_k: 40,
  top_k: 20,
  top_p: 0.9,
  // repeat_last_n: 2,
  repeat_last_n: 5,
  repeat_penalty: 1.5,
  // temp: 0.3,
  temp: 0.5,

  // these below 2 need to be adjusted for machine by machine basis
  model: getVariable('model') || 'llama.7b',
  threads: 4,
};

export {
  DEFAULT_TEXT_DECORATION_CONFIG,
  DEFAULT_CONFIG_SET_ALPACA,
  DEFAULT_URL,
};
