export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-gray-500">
        © {year} Cemre Dural. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}