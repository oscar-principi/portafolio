export default function Contact() {
  const contacts = [
    {
      href: "https://www.linkedin.com/in/oscar-principi",
      alt: "LinkedIn",
      img: "/img/contacts/linkedin.png",
    },
    {
      href: "https://github.com/oscar-principi",
      alt: "GitHub",
      img: "/img/contacts/git.png",
    },
    {
      href: "https://api.whatsapp.com/send?phone=2213043135",
      alt: "WhatsApp",
      img: "/img/contacts/whatsapp.png",
    },
    {
      href: "https://www.instagram.com/oscar.principi",
      alt: "Instagram",
      img: "/img/contacts/instagram.png",
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-zinc-100 text-zinc-700 px-4 py-1"
    >
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {contacts.map((contact, index) => (
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
              className="w-7 h-7 rounded shadow-md"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
