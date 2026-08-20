import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tüm Yazılar",
  description: "Yazdığım tüm blog yazılarının listesi.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Tüm Yazılar</h1>
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-100 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}