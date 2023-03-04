import axios from 'axios';

const API_KEY = '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';
const MODEL = 'text-davinci-002';

const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const checkGrammar = async (text) => {
  const response = await api.post('/engines/' + MODEL + '/completions', {
    prompt: 'Please check the following sentence for grammar errors:\n' + text,
    max_tokens: 1024,
    n: 1,
    stop: '\n',
  });
  return response.data.choices[0].text.trim();
};