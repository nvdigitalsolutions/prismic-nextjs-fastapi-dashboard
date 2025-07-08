export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-4 px-6 mt-auto">
      <p>&copy; {year} Dashboard</p>
    </footer>
  );
}
