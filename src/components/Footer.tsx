import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Esaaka. All rights reserved.
        </p>
                <div>
           <h4 className="font-semibold mb-2">Connect</h4>
          <div
            className="flex space-x-4 text-zinc-300 text-xl"
            aria-label="Social media links"
          >
            <a
              href="https://x.com/Esaaka044"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/DEmosus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-ikimi-2203bb322"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          </div>

        <nav className="flex space-x-6 text-sm">
          <Link
            href="/"
            className="hover:text-white transition-colors text-zinc-400"
          >
            Home
          </Link>
          <Link
            href="/templates"
            className="hover:text-white transition-colors text-zinc-400"
          >
            Templates
          </Link>
          <Link
            href="/services"
            className="hover:text-white transition-colors text-zinc-400"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors text-zinc-400"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>

  );
}
