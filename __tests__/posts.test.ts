import { describe, it, expect } from 'vitest';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

describe('getAllPosts', () => {
  it('en az bir yazı döndürmeli', () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
  });

  it('her yazının bir title\'ı olmalı', () => {
    const posts = getAllPosts();
    posts.forEach((post) => {
      expect(post.title).toBeTruthy();
    });
  });
});

describe('getPostBySlug', () => {
  it("'merhaba-dunya' slug'ına sahip yazının title'ı 'Merhaba Dünya' olmalı", () => {
    const post = getPostBySlug('merhaba-dunya');
    expect(post.title).toBe('Merhaba Dünya');
  });
});
