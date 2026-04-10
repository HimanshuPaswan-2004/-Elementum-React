import './App.css';

import avatar01 from './assets/elementum/avatar-01.jpg';
import avatar02 from './assets/elementum/avatar-02.jpg';
import avatar03 from './assets/elementum/avatar-03.jpg';
import avatar04 from './assets/elementum/avatar-04.jpg';
import avatar05 from './assets/elementum/avatar-05.jpg';
import avatar06 from './assets/elementum/avatar-06.jpg';
import avatar07 from './assets/elementum/avatar-07.jpg';
import storyHero from './assets/elementum/story-hero.jpg';
import storyTeam from './assets/elementum/story-team.jpg';
import customer01 from './assets/elementum/customer-01.jpg';
import customer02 from './assets/elementum/customer-02.jpg';
import customer03 from './assets/elementum/customer-03.jpg';
import customer04 from './assets/elementum/customer-04.jpg';
import customer05 from './assets/elementum/customer-05.jpg';

const navItems = ['Home', 'About', 'Work', 'Process', 'Contact'];

const heroFaces = [
  { src: avatar01, className: 'face face-a', alt: 'Team member' },
  { src: avatar02, className: 'face face-b', alt: 'Team member' },
  { src: avatar03, className: 'face face-c', alt: 'Team member' },
  { src: avatar04, className: 'face face-d', alt: 'Team member' },
  { src: avatar05, className: 'face face-e', alt: 'Team member' },
  { src: avatar06, className: 'face face-f', alt: 'Team member' },
  { src: avatar07, className: 'face face-g', alt: 'Team member' },
];

const offers = [
  {
    label: 'Office of multiple interests content',
    title: 'Collaborative & partnership',
  },
  {
    label: 'The high US Air Force digital experience',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

const customerFaces = [
  { src: customer04, className: 'customer-dot dot-a' },
  { src: customer01, className: 'customer-dot dot-b' },
  { src: customer05, className: 'customer-dot dot-c' },
  { src: customer02, className: 'customer-dot dot-d' },
  { src: customer03, className: 'customer-dot dot-e' },
];

const footerLinks = [
  ['Germany', 'UAE', 'India', 'USA'],
  ['Team of Pattern', 'Away Studio', 'East Lab', 'Launch'],
  ['Twitter', 'LinkedIn', 'Instagram', 'Behance'],
  ['hello@elementum.co', '+91 0000 000 000', 'New York', 'Berlin'],
];

function MenuButton() {
  return (
    <button className="menu-button" type="button" aria-label="Open menu">
      <span />
      <span />
    </button>
  );
}

function ArrowLink({ children }) {
  return (
    <a className="arrow-link" href="#contact">
      <span>{children}</span>
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

function Highlight({ tone = 'mint', children }) {
  return <span className={`mark mark-${tone}`}>{children}</span>;
}

function OfferRow({ label, title, active }) {
  return (
    <article className="offer-row">
      <p>{label}</p>
      <h3>
        {title}
        {active ? <span className="confidence-badge" aria-hidden="true" /> : null}
      </h3>
      <span className="offer-arrow" aria-hidden="true">
        -&gt;
      </span>
    </article>
  );
}

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          Elementum
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <MenuButton />
      </header>

      <section className="hero-section" id="home">
        <div className="double-loop" aria-hidden="true" />
        <div className="purple-drop hero-drop" aria-hidden="true" />
        <div className="hero-copy">
          <h1>
            The <span className="underline">thinkers</span> and
            <br />
            doers were <Highlight tone="pink">changing</Highlight>
            <br />
            the <Highlight>status</Highlight> Quo with
          </h1>
          <p>
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>
        <div className="face-field" aria-label="Team portraits">
          {heroFaces.map((face) => (
            <img key={face.className} className={face.className} src={face.src} alt={face.alt} />
          ))}
        </div>
      </section>

      <section className="story story-one" id="about">
        <div className="soft-blush" aria-hidden="true" />
        <div className="story-copy">
          <h2>
            <span>Tomorrow</span> should
            <br />
            be better than <Highlight tone="sand">today</Highlight>
          </h2>
          <p>
            We are a team of strategists, designers, communicators, researchers.
            Together we make progress feel clear, practical, and possible.
          </p>
          <ArrowLink>Learn more</ArrowLink>
        </div>
        <div className="story-media media-right">
          <img src={storyHero} alt="Consultant at work" />
          <div className="triangle triangle-top" aria-hidden="true" />
        </div>
        <div className="curve curve-one" aria-hidden="true" />
      </section>

      <section className="story story-two" id="work">
        <div className="story-media media-left">
          <img src={storyTeam} alt="Team collaborating" />
          <div className="triangle triangle-bottom" aria-hidden="true" />
        </div>
        <div className="story-copy copy-right">
          <h2>
            <Highlight>See</Highlight> how we can
            <br />
            help you <span className="underline">progress</span>
          </h2>
          <p>
            We add a layer of fearless insights and action that allows change makers
            to accelerate progress in brand, design, digital, comms and research.
          </p>
          <ArrowLink>Read more</ArrowLink>
        </div>
      </section>

      <section className="offers-section" id="process">
        <div className="curve curve-two" aria-hidden="true" />
        <h2>
          What we <Highlight>can</Highlight>
          <br />
          <span className="underline">offer</span> you!
        </h2>
        <div className="offers-list">
          {offers.map((offer, index) => (
            <OfferRow key={offer.title} {...offer} active={index === 2} />
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="customer-cloud" aria-hidden="true">
          {customerFaces.map((face) => (
            <img key={face.className} className={face.className} src={face.src} alt="" />
          ))}
        </div>
        <h2>
          <Highlight>What</Highlight> our customer
          <br />
          says About Us
        </h2>
        <article className="quote-card">
          <p>
            Elementum turned the brief into a focused strategy and a polished digital
            experience. The process was calm, sharp, and collaborative from day one.
          </p>
          <span>Himanshu Paswan</span>
        </article>
      </section>

      <section className="newsletter-section" id="contact">
        <div className="newsletter-curve" aria-hidden="true" />
        <div className="purple-drop footer-drop" aria-hidden="true" />
        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>
        <form className="newsletter-form">
          <label htmlFor="newsletter-email">Type your email</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Type your email"
            autoComplete="email"
          />
          <button type="submit">Subscribe now</button>
        </form>
        <footer className="site-footer">
          {footerLinks.map((links, index) => (
            <div key={links[0]}>
              <h3>{['Company', 'Services', 'Follow Us', 'Contact'][index]}</h3>
              {links.map((link) => (
                <p key={link}>{link}</p>
              ))}
            </div>
          ))}
        </footer>
        <p className="copyright">2026 Elementum. All rights reserved.</p>
      </section>
    </main>
  );
}

export default App;
