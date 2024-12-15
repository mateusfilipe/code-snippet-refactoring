export function Header() {
  return (
    <header>
      <div className="p-10">
        <h1 className="text-center text-4xl font-bold pb-2">
          SPARK{' '}
          <span role="img" aria-labelledby="lightning emoji">
            ⚡
          </span>
        </h1>
        <h6 className="text-center text-sm font-bold">
          (Smart Programming Assistant for Refactoring and Knowledge)
        </h6>
      </div>
      <p className="text-center text-2xl">
        Welcome to SPARK your Code Snippet Refactoring & Explanation Tool!
      </p>
    </header>
  );
}

export default Header;
