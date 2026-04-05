import { useEffect, useState } from 'react'

import cardImage from '../../assets/card1/Arsalan-Biryani-400x400.jpg'

const menuItems = [
  { label: 'Home', href: '#home', kind: 'page' },
  { label: 'About Us', href: '#about-page', kind: 'page' },
  { label: 'Our Menu', href: '#our-menu', kind: 'section' },
  { label: 'Catering', href: '#catering', kind: 'section' },
  { label: 'Awards', href: '#awards', kind: 'section' },
  { label: 'Branches', href: '#branches', kind: 'section' },
  { label: 'Contact Us', href: '#contact-page', kind: 'page' },
]

const aboutCopy =
  'Apart from being great builders, the Mughals were also known as great food connoisseurs. Almost every Mughal emperor has passed on his personal recipe as he moved along the passage of time, which is known as Mughlai food. This is why perhaps the influence of Mughals is most felt in their food. To get the real taste of authentic Mughlai cuisine one need to visit ARSALAN, a trusted name in Mughlai dishes at the heart of the city of joy.'

const contactFields = [
  { name: 'name', type: 'text', placeholder: 'YOUR NAME' },
  { name: 'email', type: 'email', placeholder: 'YOUR EMAIL' },
  { name: 'phone', type: 'tel', placeholder: 'YOUR PHONE' },
  { name: 'address', type: 'text', placeholder: 'YOUR ADDRESS' },
  { name: 'subject', type: 'text', placeholder: 'SUBJECT' },
]

function getHash() {
  if (typeof window === 'undefined') {
    return '#home'
  }

  return window.location.hash || '#home'
}

function getPage(hash: string) {
  if (hash === '#about-page') {
    return 'about'
  }

  if (hash === '#contact-page') {
    return 'contact'
  }

  return 'home'
}

function App() {
  const [activeHash, setActiveHash] = useState(getHash)

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(getHash())
    }

    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  const currentPage = getPage(activeHash)

  useEffect(() => {
    if (currentPage !== 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    if (activeHash && activeHash !== '#home') {
      requestAnimationFrame(() => {
        const target = document.querySelector(activeHash)
        if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    }
  }, [activeHash, currentPage])

  return (
    <main className={`page-shell page-shell-${currentPage}`}>
      <header className="topbar">
        <a href="#home" className="brand" aria-label="Arsalan home">
          <img src="/assets/logo.png" alt="Arsalan Restaurant & Caterer" />
        </a>

        <nav className="nav-menu" aria-label="Primary navigation">
          {menuItems.map((item) => {
            const isActive =
              (item.href === '#home' && currentPage === 'home' && activeHash === '#home') ||
              (item.href === '#about-page' && currentPage === 'about') ||
              (item.href === '#contact-page' && currentPage === 'contact')

            return (
              <a key={item.label} href={item.href} className={isActive ? 'active' : ''}>
                {item.label}
                {item.label === 'Our Menu' ? <span className="caret">v</span> : null}
              </a>
            )
          })}
        </nav>
      </header>

      {currentPage === 'about' ? (
        <section className="about-page" id="about-page">
          <div className="about-hero">
            <p className="about-kicker">Discover</p>
            <h1>About Us</h1>
            <p className="about-tagline">Ultimate dining experience like no other</p>
          </div>

          <section className="about-copy-section">
            <div className="about-content-card">
              <div className="about-content-copy">
                <p>{aboutCopy}</p>
              </div>

              <div className="about-content-image-frame">
                <img className="about-content-image" src={cardImage} alt="Arsalan biryani" />
              </div>
            </div>
          </section>
        </section>
      ) : currentPage === 'contact' ? (
        <section className="contact-page" id="contact-page">
          <div className="contact-heading">
            <p className="contact-heading-accent">Where To</p>
            <h1 className="contact-page-title">Contact Us</h1>
          </div>

          <div className="contact-layout">
            <article className="contact-info-card">
              <h2>Arsalan Restaurant</h2>

              <div className="contact-info-mark" aria-hidden="true">
                <span />
              </div>

              <div className="contact-info-copy">
                <p className="contact-location-title">Marina Garden Court</p>
                <p>191 Park Street, Kolkata 700017.</p>
                <p>
                  <strong>Call:</strong> +91 9007007942 || +91 9007007954
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a className="contact-email-link" href="mailto:info@arsalanrestaurants.com">
                    info@arsalanrestaurants.com
                  </a>
                </p>
                <p>
                  <strong>Opening Hours:</strong> 11 AM to 11:30 PM (All Days)
                </p>
              </div>
            </article>

            <section className="contact-form-panel" aria-labelledby="contact-form-title">
              <h2 id="contact-form-title">Feel Free To Contact Us</h2>

              <form className="contact-form">
                {contactFields.map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-label={field.placeholder}
                  />
                ))}

                <textarea
                  name="message"
                  rows={5}
                  placeholder="YOUR MESSAGE"
                  aria-label="Your message"
                />

                <button type="submit">Submit</button>
              </form>
            </section>
          </div>
        </section>
      ) : (
        <>
          <section className="hero-section" id="home">
            <div className="hero-overlay" />
            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src="/assets/hero.jpg"
                alt="Arsalan restaurant exterior"
              />
            </div>
          </section>

          <section className="welcome-section" id="home-welcome">
            <div className="welcome-card">
              <div className="welcome-copy">
                <h2 className="welcome-title">
                  <span className="welcome-title-accent">
                    Welcome To Arsalan Restaurant
                  </span>{' '}
                  <span className="welcome-title-accent">And Caterer</span>{' '}
                  <span className="welcome-title-dark">
                    - The Heart Of Kolkata&apos;s Biryani Culture
                  </span>
                </h2>

                <div className="welcome-divider" aria-hidden="true">
                  <span className="divider-line" />
                  <span className="divider-leaf">❦</span>
                  <span className="divider-line" />
                </div>

                <p className="welcome-text">
                  Discover the essence of Mughlai cuisine at Arsalan Restaurant and
                  Caterer, where every bite is a celebration of flavor and tradition.
                  Since our inception on October 6, 2002, with our first branch in Park
                  Circus, Kolkata, we have proudly served food lovers across the city and
                  beyond with our exquisite array of biryanis and Mughlai delicacies.
                </p>
              </div>

              <div className="welcome-image-frame">
                <img className="welcome-image" src={cardImage} alt="Arsalan biryani" />
              </div>
            </div>
          </section>

          <section className="section-spacer" id="our-menu" aria-hidden="true" />
          <section className="section-spacer" id="catering" aria-hidden="true" />
          <section className="section-spacer" id="awards" aria-hidden="true" />
          <section className="section-spacer" id="branches" aria-hidden="true" />
        </>
      )}
    </main>
  )
}

export default App
