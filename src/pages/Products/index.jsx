import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function Products() {
  useDocumentTitle('Solutions | DEVELTRIXSECURE TECHNOLOGIES LLP', 'DEVELTRIXSECURE provides enterprise cybersecurity and IT solutions. See our full service portfolio.');
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/services', { replace: true });
  }, [navigate]);

  return null;
}
