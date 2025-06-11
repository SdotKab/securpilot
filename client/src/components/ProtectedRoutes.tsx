// src/components/ProtectedRoute.tsx
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import type { JSX } from 'react/jsx-runtime'


export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="text-center mt-10">Loading...</div>

  return session ? children : <Navigate to="/login" />
}
