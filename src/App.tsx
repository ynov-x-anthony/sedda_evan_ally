import './App.css'

// Mission : ce blog fonctionne, mais tout est construit en <div>. Rends-le
// sémantique : landmarks, hiérarchie de titres, vrai bouton, vrai label.

function App() {
  return (
    <main className="page">
      <header className="header">
        <h1 className="logo">DevBlog</h1>
        <nav className="nav">
          <a href="#" className="nav-link">Accueil</a>
          <a href="#" className="nav-link">Articles</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>

      <section className="main">
        <article className="article">
          <h1 className="title">Pourquoi apprendre TypeScript en 2026</h1>
          <p className="meta">Publié le 3 mars 2026</p>
          <h2 className="small-title">Un typage qui rassure</h2>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          <h2 className="small-title">Un écosystème mature</h2>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </article>

        <button className="like-btn" onClick={() => alert("Merci pour le like !")}>
          👍 J'aime cet article
        </button>

        <section className="newsletter">
          <h2 className="small-title">Reste informé</h2>
          <label htmlFor="newsletter-email">Ton adresse e-mail</label>
          <input type="email" id="newsletter-email" placeholder="ton@email.fr" />
          <button className="submit-btn" onClick={() => alert('Inscription envoyée')}>
            S'inscrire
          </button>
        </section>
      </section>

      <footer className="footer">© 2026 DevBlog</footer>
    </main>
  )
}

export default App
