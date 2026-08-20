import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-3xl mx-auto flex items-center gap-6 px-4 py-4">
        <Link href="/" className="font-bold text-lg">
          Cemre Dural
        </Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-900">
          Blog
        </Link>
        <Link href="/hakkimda" className="text-gray-600 hover:text-gray-900">
          Hakkımda
        </Link>
      </nav>
    </header>
  );
}