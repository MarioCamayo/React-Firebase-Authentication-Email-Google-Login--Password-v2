import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import './dashboard.css'


export default function Dashboard({ user }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <img className="dashboard-image" src={user.photoURL} alt="avatar" />
        <h1>Welcome {user.displayName || user.email}</h1>
        <p>{user.email}</p>

        <button onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  );
}

// import "./Dashboard.css";

// export default function Dashboard({ user, onLogout }) {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-card">
//         <img
//           src={user.photoURL}
//           alt="Avatar"
//           className="avatar"
//           referrerPolicy="no-referrer"
//         />

//         <h1 className="welcome">
//           Bienvenido <span>{user.displayName}</span>
//         </h1>

//         <p className="email">{user.email}</p>

//         <button className="logout-btn" onClick={onLogout}>
//           Cerrar sesión
//         </button>
//       </div>
//     </div>
//   );
// }
