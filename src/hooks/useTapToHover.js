import { useEffect } from 'react';

/**
 * Hover effects don't exist on touch screens. Clicking/tapping an element marked
 * with `data-card` adds `.is-tapped`, which the hover styles also match
 * (see the hover / group-hover variants in tailwind.config.js). Tapping the same
 * card again, another card, or anywhere else clears it.
 */
export default function useTapToHover() {
  useEffect(() => {
    let active = null;

    const onClick = (e) => {
      const card = e.target.closest?.('[data-card]');
      if (active && active !== card) active.classList.remove('is-tapped');
      if (card) card.classList.toggle('is-tapped');
      active = card?.classList.contains('is-tapped') ? card : null;
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      active?.classList.remove('is-tapped');
    };
  }, []);
}
