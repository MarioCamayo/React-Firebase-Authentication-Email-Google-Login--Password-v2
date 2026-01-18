import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import "./Login.css";

const provider = new GoogleAuthProvider();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome back 👋</h1>
        <p>Sign in to your account</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn primary" onClick={login}>
          Sign In
        </button>

        <button className="btn secondary" onClick={register}>
          Create Account
        </button>

        <div className="divider">OR</div>

        <button className="btn google" onClick={loginGoogle}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Sign in with Google
        </button>

        <span className="footer-text">
          Built with React & Firebase ⚡
        </span>
      </div>
    </div>
  );
}
