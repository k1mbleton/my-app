import { getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="text-2xl font-semibold mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-400 mt-2 mb-8">{post.date}</p>
      <article>
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </main>
  );
}