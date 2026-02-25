const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800/40 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <span>&copy; {year} Davian Space. All rights reserved.</span>
        <a
          href="https://davian.space"
          className="hover:text-neutral-300 transition-colors font-mono text-xs"
        >
          davian.space
        </a>
      </div>
    </footer>
  );
};

export default Footer;
