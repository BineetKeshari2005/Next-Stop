// src/components/Navbar/Navbar.jsx  — KEY CHANGES ONLY
// 
// REMOVE these imports:
//   import { auth } from '../../Firebase/Firebase';
//   import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
//            signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
//
// ADD this import:
//   import { useAuth } from '../../context/AuthContext';
//
// Then replace the auth logic as shown below.

// ---- REPLACE the auth state block ----
// BEFORE (Firebase):
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => { ... });
//     return () => unsub();
//   }, []);
//
// AFTER (MERN):
//   const { user, isLoggedIn, login, register, logout } = useAuth();
//   const userName = user?.name || '';   // user comes from AuthContext

// ---- REPLACE handleAuthSubmit ----
// BEFORE (Firebase):
//   const handleAuthSubmit = async (e) => {
//     if (isSignup) {
//       await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(user, { displayName: name });
//     } else {
//       await signInWithEmailAndPassword(auth, email, password);
//     }
//   };
//
// AFTER (MERN):
const handleAuthSubmit = async (e) => {
  e.preventDefault();
  const { name, email, password } = formData;
  try {
    if (isSignup) {
      await register(name, email, password);   // from useAuth()
    } else {
      await login(email, password);             // from useAuth()
    }
    setShowAuthForm(false);
    setFormData({ name: '', email: '', password: '' });
  } catch (error) {
    alert(error.message);
  }
};

// ---- REPLACE logout button ----
// BEFORE: onClick={() => signOut(auth)}
// AFTER:  onClick={() => logout()}        // logout from useAuth()

// Everything else in Navbar stays EXACTLY the same — all the JSX, styles, dropdown, mobile menu.
// Just swap out the Firebase calls with the useAuth equivalents above.

export { handleAuthSubmit };
