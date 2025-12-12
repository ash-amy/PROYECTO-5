import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegistrarUsuario({onRegister, cambiarVista}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Funcion para registrar
    const registrar = async() =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Cuenta creada con exito");
            onRegister(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al registrar el usuario");
            console.log(errorCode);
            console.log(errorMessage);            
        });
    }

    return(

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 p-6">
           <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Registrar Usuario</h1>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                    type="email"
                    placeholder="Escribe tu Email"
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
                <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all mx-0 my-1" onClick={onRegister}>Registrar</button>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-all mx-0 my-1" onClick={cambiarVista}>Iniciar sesion</button>
            </div>
        </div>
    )
}

export default RegistrarUsuario