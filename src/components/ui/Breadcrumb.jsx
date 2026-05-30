import { Link } from 'react-router-dom';
import { BsChevronRight, BsHouseDoor } from 'react-icons/bs';

export default function Breadcrumb({ currentPage, parentPage }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 border-y border-navy-slate/30 bg-navy-card/30 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm">
        {/* Home Item */}
        <Link 
          to="/" 
          className="flex items-center gap-1.5 text-slate-400 hover:text-brand-cyan transition-colors"
        >
          <BsHouseDoor className="w-4 h-4" />
          <span>Home</span>
        </Link>
        
        {/* Parent Link if present */}
        {parentPage && (
          <>
            <BsChevronRight className="w-3 h-3 text-slate-500" />
            <Link 
              to={parentPage.path} 
              className="text-slate-400 hover:text-brand-cyan transition-colors"
            >
              {parentPage.label}
            </Link>
          </>
        )}

        {/* Current Active Item */}
        <BsChevronRight className="w-3 h-3 text-slate-500" />
        <span className="text-brand-cyan font-medium">{currentPage}</span>
      </div>
    </nav>
  );
}
