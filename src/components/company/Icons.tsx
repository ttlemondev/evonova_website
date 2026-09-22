export function Arrow({ diagonal = false, className = '' }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function BrandMark({ className = '' }: { className?: string }) {
  return <svg className={className} width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M3 5h26v6H19v18h-6V11H3z" fill="currentColor" /><path d="M3 16h6v13H3zM23 16h6v13h-6z" fill="currentColor" opacity=".4" /></svg>;
}

export function PlayStore() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m4 3 10 9L4 21V3Zm2-1 12 7-3 2L6 2Zm10 10 3-2 3 2-3 2-3-2Zm-1 1 3 2-12 7 9-9Z" /></svg>;
}

export function AppleStore() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.8 2c.1 1.3-.4 2.5-1.2 3.4-.8.9-2 1.5-3.2 1.4-.2-1.2.4-2.5 1.2-3.4.8-.8 2.1-1.4 3.2-1.4ZM20 17.5c-.5 1.2-.8 1.8-1.5 2.8-1 1.3-2.3 2.9-3.8 2.9-1.3 0-1.6-.8-3.4-.8-1.8 0-2.2.8-3.5.8-1.5 0-2.7-1.4-3.7-2.8C1.3 16.4.7 10.5 3.5 8.1c1.1-.9 2.5-1.4 3.9-1.4 1.5 0 2.5.8 3.7.8 1.2 0 2.2-.8 3.9-.8 1.2 0 2.7.6 3.8 1.8-3.4 1.9-2.8 6.9 1.2 9Z" transform="translate(2 0) scale(.9)" /></svg>;
}
