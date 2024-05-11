import nlwUniteIcon from '../assets/nlw-unite-icon.svg';
import { NavLink } from './NavLink';

export function Header(){
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="Ícone Nlw Unite" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </header>
  );
}