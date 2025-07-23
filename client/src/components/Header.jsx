export default function Header() {
  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">RateMyGolfCourse</a>
        <nav className="space-x-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </nav>
      </div>
    </header>
  );
}
