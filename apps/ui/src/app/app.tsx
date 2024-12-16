import { useCallback, useState } from 'react';
import Header from './header';
import Input from './input';
import Output from './output';
import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

export function App() {
  const [result, setResult] = useState<string>(
    'The result will be shown here.'
  );

  const callReview = useCallback(async (message: string) => {
    try {
      const response = await axios.post(url + '/review', {
        message: message,
      });
      setResult(response.data.choices[0].message.content);
      return response;
    } catch (error) {
      console.error('Error calling review endpoint:', (error as Error).message);
      setResult('Error: Failed to get response from server');
    }
  }, []);

  return (
    <div className="bg-gray-900 h-screen w-screen text-white font-mono p-4 overflow-auto flex flex-col gap-4">
      <Header />
      <div className="w-full h-full px-16 flex flex-col gap-4 items-center">
        <Input callReview={callReview} />
        <Output result={result} />
      </div>
    </div>
  );
}

export default App;
