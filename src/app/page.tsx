import { Icon } from "./icons";
import { Mandoo } from "./mandoo";
import { WorkBench } from "./work-bench";

export default function Home() {
  return (
    <div className="page">
      <header className="top">
        <a className="brand" href="#top">
          Aamogh Sawant
        </a>
        <nav className="nav" aria-label="Site">
          <a href="#about">About</a>
          <a href="#mandoo">Mandoo</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="name">
          <p className="kicker">Georgia Tech</p>
          <h1 id="name">Aamogh Sawant</h1>
          <p className="lede">
            Computer science student and president of DS@GT. I study how a
            chat model can remember a person without being retrained, and I
            build the software around that.
          </p>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <div className="about-copy">
            <p>
              I am in computer science at Georgia Tech. DS@GT is the data
              science club, and I am its president.
            </p>
            <p>
              Most of my time right now goes to Mandoo, a research pipeline
              that turns exported chats into a memory a model can read. The
              other projects are smaller tools: agent routing, networking
              experiments, a Zotero client, and data work from a summer
              internship at NLP Logix.
            </p>
          </div>
        </section>

        <Mandoo />
        <WorkBench />

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <ul className="contact-list">
            <li>
              <a href="mailto:aamoghsawantt@gmail.com">
                <Icon name="mail" />
                aamoghsawantt@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/aamoghS">
                GitHub
                <Icon name="arrow" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aamoghsawant">
                LinkedIn
                <Icon name="arrow" />
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="colophon">
        <p>Aamogh Sawant</p>
        <a href="mailto:aamoghsawantt@gmail.com">aamoghsawantt@gmail.com</a>
      </footer>
    </div>
  );
}
