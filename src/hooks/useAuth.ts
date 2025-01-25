import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export function useAuth(): User | null {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/et');
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return user;
}
