interface ContactProps {
  onToggleTerminal?: () => void;
}

export default function Contact({ onToggleTerminal }: ContactProps) {
  const contacts = [
    {
      href: "https://www.linkedin.com/in/oscar-principi",
      alt: "LinkedIn",
      img: "img/contacts/linkedin.png",
    },
    {
      href: "https://github.com/oscar-principi",
      alt: "GitHub",
      img: "img/contacts/git.png",
    },
    {
      href: "https://www.instagram.com/oscar.principi",
      alt: "Instagram",
      img: "img/contacts/instagram.png",
    },
    {
      alt: "Terminal",
      img: "img/contacts/terminal.jpg",
      isTerminal: true,
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-black text-red-500 px-4 py-4"
    >
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {contacts.map((contact, index) =>
          contact.isTerminal ? (
            <button
              key={index}
              onClick={onToggleTerminal}
              className="hover:scale-110 transition-transform duration-300"
              aria-label={contact.alt}
            >
              <img
                src={contact.img}
                alt={contact.alt}
                className="w-8 h-8 rounded filter drop-shadow-[0_0_8px_rgba(255,0,0,0.9)] hover:drop-shadow-[0_0_8px_rgba(255,0,0,1)] transition-shadow duration-300"
              />
            </button>
          ) : (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label={contact.alt}
            >
              <img
                src={contact.img}
                alt={contact.alt}
                className="w-10 h-10 rounded filter drop-shadow-[0_0_8px_rgba(255,0,0,0.9)] hover:drop-shadow-[0_0_8px_rgba(255,0,0,1)] transition-shadow duration-300"
              />
            </a>
          )
        )}
      </div>
    </section>
  );
}
