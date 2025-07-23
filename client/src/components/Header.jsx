export default function Header() {
    return (
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">RateMyGolfCourse</a>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/login" className="hover:underline">Login</a>
            <a href="/signup" className="hover:underline">Sign Up</a>
          </nav>
        </div>
      </header>
    );
  }
  