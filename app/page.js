import Socials from "@/components/Socials";
import NotifyForm from "@/components/NotifyForm";
import { MailIcon } from "@/components/Icons";
import { SITE } from "@/lib/config";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="bg bgL" />
        <div className="bg bgR" />
        <nav>
          <a className="logo" href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logoimg" src="/images/logo.webp" alt="Aangan logo" />
            INDIA&apos;S EXPERIENTIAL
            <br />
            ENTERTAINMENT COMPANY
          </a>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#what">WHAT WE DO</a></li>
            <li><a href="#">ARTISTS</a></li>
            <li><a href="#">PARTNERS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
          <div className="navr">
            <span className="pill">COMING SOON</span>
            <Socials />
          </div>
        </nav>
        <div>
          <div className="arch" />
          <h1>AANGAN</h1>
          <p className="sub">
            INDIA&apos;S EXPERIENTIAL
            <br />
            ENTERTAINMENT COMPANY
          </p>
          <span className="soon">COMING SOON</span>
          <p className="cities">BHOPAL &nbsp;|&nbsp; INDORE</p>
        </div>
      </header>

      <section className="intro" id="about">
        <i className="side l" />
        <i className="side r" />
        <h2>
          SPACE FOR STORIES.
          <br />
          BUILT FOR EXPERIENCES.
        </h2>
        <p className="mid">
          Aangan is being built with a simple belief — that the right experiences can bring people and
          communities closer. We are an experiential entertainment company based in Bhopal and Indore,
          creating meaningful live experiences across music, culture and youth.
        </p>
        <p style={{ fontSize: 14 }}>
          Our journey begins soon. Stay connected.
          <span className="script">See you there!</span>
        </p>
      </section>

      <section className="what" id="what">
        <i className="side l" />
        <i className="side r" />
        <h2>WHAT WE DO</h2>
        <div className="grid">
          <div className="item">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <rect x="4" y="14" width="12" height="38" />
              <rect x="48" y="14" width="12" height="38" />
              <rect x="18" y="20" width="28" height="26" />
              <path d="M2 54h60" />
            </svg>
            <h3>CONCERTS &amp;<br />LIVE EVENTS</h3>
            <p>From intimate shows to large-scale concerts, we create experiences that resonate and stay with you.</p>
          </div>
          <div className="item">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="30" cy="20" r="9" />
              <path d="M10 56c0-14 9-22 20-22s20 8 20 22z" />
              <path d="M48 40l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
            </svg>
            <h3>ARTIST<br />MANAGEMENT</h3>
            <p>Empowering artists with the right opportunities, collaborations and platforms to grow.</p>
          </div>
          <div className="item">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="18" r="8" />
              <circle cx="14" cy="26" r="7" />
              <circle cx="50" cy="26" r="7" />
              <path d="M18 52c0-10 6-16 14-16s14 6 14 16zM2 50c0-8 5-13 12-13M62 50c0-8-5-13-12-13" />
            </svg>
            <h3>YOUTH<br />EVENTS</h3>
            <p>Curating youth-first events that inspire, engage and celebrate the new generation.</p>
          </div>
          <div className="item">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M8 10h48M8 22h48M12 10v44M52 10v44M12 22l20-12 20 12M12 22l40 0M20 54h24" />
              <circle cx="20" cy="16" r="3" />
              <circle cx="44" cy="16" r="3" />
            </svg>
            <h3>EVENT<br />PRODUCTION</h3>
            <p>End-to-end production with focus on creativity, quality and flawless execution.</p>
          </div>
        </div>
      </section>

      <section className="begin">
        <div className="crowd" />
        <p className="script">
          Not just events.
          <br />
          Experiences that
          <br />
          bring people together.
        </p>
        <div className="txt">
          <h2>THE BEGINNING</h2>
          <p>
            We are a young team of dreamers, creators and doers. Aangan is currently in its early stage and we
            are working behind the scenes, building ideas, partnerships and plans to create something truly
            special.
          </p>
          <p style={{ marginTop: 12 }}>
            <b style={{ fontWeight: 500 }}>
              Our first experiences are in the making. Something exciting is on the way.
            </b>
          </p>
        </div>
        <div className="badge">
          <div>
            NEW EXPERIENCES<b>2027</b>COMING YOUR WAY
          </div>
        </div>
      </section>

      <section className="notify" id="notify">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span className="ico">✉</span>
          <div>
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up and be the first to know about our launch, announcements and early experiences.</p>
          </div>
        </div>
        <NotifyForm />
      </section>

      <footer id="contact">
        <div className="fgrid">
          <div style={{ padding: 0, border: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logoimg" src="/images/logo.webp" alt="Aangan logo" />
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <div className="links">
              <a href="#">Home</a>
              <a href="#">Artists</a>
              <a href="#about">About</a>
              <a href="#">Partners</a>
              <a href="#what">What We Do</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h4>CONNECT WITH US</h4>
            <Socials />
            <p className="mail" style={{ marginTop: 14 }}>
              <span className="soc">
                <a href={`mailto:${SITE.email}`} aria-label="Email us">
                  <MailIcon />
                </a>
              </span>
              <a className="mail-text" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            {SITE.phoneNumbers.map((phone) => (
              <p key={phone.number} style={{ marginTop: 8 }}>
                <a href={phone.href}>{phone.number}</a>
              </p>
            ))}
          </div>
          <div>
            <h4>FOLLOW OUR JOURNEY</h4>
            <p>
              Real stories. Real people.
              <br />
              Real experiences.
            </p>
            <span className="script" style={{ fontSize: 24 }}>Coming soon.</span>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Aangan. All Rights Reserved.</p>
      </footer>
    </>
  );
}
