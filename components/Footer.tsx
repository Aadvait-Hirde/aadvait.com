export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3f031c] text-white py-8 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          © {currentYear} Designed by Aadvait Hirde
        </p>
      </div>
    </footer>
  );
}

