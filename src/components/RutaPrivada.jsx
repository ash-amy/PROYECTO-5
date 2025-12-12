import { getAuth } from "firebase/auth"
import app from '../firebase'
import { Navigate } from "react-router-dom";

function RutaPrivada({ children }) {
    const auth = getAuth(app);
    const user = auth.currentUser;

    // Si no existe usuario
    if (!user) {
        return <Navigate to="/Login" />
    }
    return children;
}

export default RutaPrivada;