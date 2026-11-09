import { useCallback, useRef, useState } from 'react'
import Modal from './Modal'
import './App.css'

// Mission : débranche ta souris. Tab/Shift+Tab/Entrée/Échap doivent suffire
// à tout utiliser. Il y a 4 problèmes volontaires dans ce starter.

function App() {
  const [open, setOpen] = useState(false)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <div className="page">
      <h1>Paramètres du compte</h1>

      <a className="skip-link" href="#form">Aller au formulaire</a>

      <form id="form" className="form" tabIndex={-1}>
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <button ref={openButtonRef} type="button" onClick={() => setOpen(true)}>
          Ouvrir les préférences avancées
        </button>
      </form>

      {open && <Modal onClose={closeModal} returnFocusRef={openButtonRef} />}
    </div>
  )
}

export default App
