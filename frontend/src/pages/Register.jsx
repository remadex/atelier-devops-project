import { NavLink } from "react-router-dom";

const Register = () => (
  <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Atelier DevOps</h1>
          <h2 className="text-white font-bold text-2xl font-sans text-center">Création du compte</h2>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-3">Créer un compte</h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg> */}
            <input
              className="pl-2 outline-none border-none w-64"
              type="text"
              name=""
              id=""
              placeholder="Adresse email"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              className="pl-2 outline-none border-none w-64"
              type="text"
              name=""
              id=""
              placeholder="Mot de passe"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <input
              className="pl-2 outline-none border-none w-64"
              type="text"
              name=""
              id=""
              placeholder="Confirmer mot de passe"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            Se connecter
          </button>
          <NavLink className="text-sm ml-2 hover:text-blue-500 cursor-pointer" to="/login">
            Retourner au login
          </NavLink>
        </form>
      </div>
    </div>
)

export default Register;