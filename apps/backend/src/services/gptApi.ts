import OpenAI from 'openai';
const apiKey = process.env.OPENAI_API_KEY;

const openAiClient = new OpenAI({
  apiKey: apiKey,
});

export const getGptResponse = async (message: string) => {
  try {
    const response = await openAiClient.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content:
            "Can you explain what this code does? I'm interested in understanding how it works and the purpose of each part. Here's the code: " +
            message,
        },
      ],
    });

    return response;
  } catch (error) {
    console.error('Error fetching OpenAI completion:', error);
    throw new Error('Failed to fetch OpenAI completion');
  }
};

export const testGptConnection = async () => {
  try {
    const response = await openAiClient.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: 'Write a haiku about recursion in programming.',
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching OpenAI completion:', error);
    throw new Error('Failed to fetch OpenAI completion');
  }
};
