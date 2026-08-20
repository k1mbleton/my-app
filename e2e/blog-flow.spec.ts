import { test, expect } from '@playwright/test';

test('blog akışı: ana sayfa -> yazı listesi -> yazı detayı', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Merhaba, ben Cemre.' })).toBeVisible();

  await page.getByRole('link', { name: 'Tüm yazılarımı gör →' }).click();
  await expect(page).toHaveURL('/blog');

  await expect(page.getByRole('heading', { name: 'Tüm Yazılar' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Merhaba Dünya/ }).first()).toBeVisible();

  await page.getByRole('link', { name: 'Merhaba Dünya' }).click();
  await expect(page).toHaveURL('/blog/merhaba-dunya');

  await expect(page.getByRole('heading', { name: 'Merhaba Dünya' })).toBeVisible();
});
