import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Merhaba, ben Cemre.</h1>
      <p className="text-gray-600 mb-6">
        Bu benim kişisel blogum. Yazılım, teknoloji ve öğrendiklerim üzerine yazıyorum.
      </p>
      <Link href="/blog" className="text-blue-600 hover:underline font-medium">
        Tüm yazılarımı gör →
      </Link>
    </main>
  );
}