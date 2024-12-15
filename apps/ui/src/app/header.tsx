export function Header() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold p-10">
        SPARK{' '}
        <span role="img" aria-labelledby="lightning emoji">
          ⚡
        </span>
      </h1>
      <h6 className="text-center text-0xl font-bold">
        Smart Programming Assistant for Refactoring and Knowledge
      </h6>
      <p className="text-center mt-4">
        Welcome to SPARK your Code Snippet Refactoring & Explanation Tool!
      </p>
    </div>
  );
}

export default Header;
