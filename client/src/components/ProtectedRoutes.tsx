import type { JSX } from 'react/jsx-runtime';
import { useAuth } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { session, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return session ? children : <Navigate to="/signin" />;
}
