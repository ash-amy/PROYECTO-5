import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//Proveedor de Google
const provider = new GoogleAuthProvider();

function Login({ onLogin, cambiarVista}) {
    //Iniciar sesion con email y password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //Redireccionar
    const navigate = useNavigate();

    //funcion para iniciar con correo y contraseña
    const iniciarSesion = async() => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Se inicio sesion");
            //onLogin(user);
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al iniciar sesion");
        });
    }
    //--------------------------------------------------

    const iniciarSesionGoogle = () => {
        // Documentacion de Firebase
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("Iniciaste sesion con Google");
            //onLogin(user);
            navigate("/");
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("Error al iniciar con Google");
            console.log(error);
        });
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Iniciar Sesion</h1>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                    type="email" 
                    placeholder="Escribe tu email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input 
                    type="password"
                    placeholder="Escribe tu contraseña"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-30 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all m-1" onClick={iniciarSesion}>Iniciar Sesion</button>
                <button className="w-60 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all m-1" onClick={iniciarSesionGoogle}> <i className="bi bi-google"></i>Iniciar Sesion con Google</button>
                <p className="mt-6 text-center text-sm text-gray-600">No tienes una cuenta?</p>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all m-1" onClick={cambiarVista}>Crear cuenta</button>
            </div>
        </div>
    )
}
export default Login;