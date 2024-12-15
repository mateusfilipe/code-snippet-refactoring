import Header from './header';
import Input from './input';
import Output from './output';

export function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-mono">
      <Header />
      <div className="grid grid-cols-2 gap-4 p-4">
        <Input />
        <Output />
      </div>
    </div>
  );
}

export default App;
