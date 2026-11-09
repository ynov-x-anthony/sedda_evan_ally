import { useEffect, useRef, type KeyboardEvent, type RefObject } from 'react'

type Props = {
  onClose: () => void
  returnFocusRef: RefObject<HTMLButtonElement>
}

const focusableSelector = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export default function Modal({ onClose, returnFocusRef }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modal = ref.current
    if (!modal) return

    const focusableElements = () =>
      Array.from(modal.querySelectorAll<HTMLElement>(focusableSelector))

    focusableElements()[0]?.focus()

    return () => returnFocusRef.current?.focus()
  }, [returnFocusRef])

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
      return
    }

    if (e.key !== 'Tab') return

    const focusableElements = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>(focusableSelector),
    )
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault()
      lastElement.focus()
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault()
      firstElement.focus()
    }
  }

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="m-title"
        ref={ref}
        onKeyDown={handleKeyDown}
      >
        <h2 id="m-title">Préférences avancées</h2>
        <label htmlFor="lang">Langue</label>
        <select id="lang">
          <option>Français</option>
          <option>English</option>
        </select>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}
