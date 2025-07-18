// import { useState } from "react";
// import { auth } from "../../Firebase/Firebase";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,updateProfile
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [name, setName] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");

//   try {
//     if (isSignup) {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // ✅ Update the user profile to include the name
//       await updateProfile(user, {
//         displayName: name, // assumes you added `const [name, setName] = useState("")`
//       });
//     } else {
//       await signInWithEmailAndPassword(auth, email, password);
//     }

//     navigate("/"); // Redirect to home after login/signup
//   } catch (err) {
//     setError(err.message);
//   }
// };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           {isSignup ? "Create Account" : "Login"}
//         </h2>

//         {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           {isSignup && (
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border p-2 rounded"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border p-2 rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border p-2 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             {isSignup ? "Create Account" : "Login"}
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           {isSignup ? (
//             <p>
//               Already have an account?{" "}
//               <button
//                 className="text-blue-600 underline"
//                 onClick={() => setIsSignup(false)}
//               >
//                 Login
//               </button>
//             </p>
//           ) : (
//             <p>
//               Don't have an account?{" "}
//               <button
//                 className="text-blue-600 underline"
//                 onClick={() => setIsSignup(true)}
//               >
//                 Create Account
//               </button>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
