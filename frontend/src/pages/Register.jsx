/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const roles = [
    { value: 'mod', label: 'Modérateur' },
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'Utilisateur' },
  ];
  const register = async ({ username, password, email, role }) => {
    const result = await fetch('http://localhost:8443/api/auth/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role,
      }),
    });
    if (result.status === 200) {
      toast.success('Utilisateur créé');
      navigate('/login');
    } else {
      toast.error('Erreur lors de la création');
    }
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      role: [],
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string("L'username doit être une chaine de caractère")
        .min(3, "L'username doit faire au minimum 3 caractères")
        .required("L'username est requis"),
      email: Yup.string("L'email doit être une chaine de caractère")
        .email("Le format de l'email n'est pas correct")
        .required("L'email est requis"),
      password: Yup.string('Le password doit être une chaine de caractère')
        .min(3, 'Le password doit faire au minimum 3 caractères')
        .required('Le password est requis'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Les mots de passe doivent correspondre',
      ),
      role: Yup.array()
        .min(1, 'Vous devez fournir au moins un rôle')
        .required('Le rôle est requis'),
    }),
    onSubmit: (values) => {
      register(values);
    },
  });
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Atelier DevOps</h1>
          <h2 className="text-white font-bold text-2xl font-sans text-center">
            Création du compte
          </h2>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form
          className="bg-white"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}>
          <h1 className="text-gray-800 font-bold text-2xl mb-3">Créer un compte</h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8 relative">
            <input
              className="pl-2 outline-none border-none w-64"
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              placeholder="Nom d'utilisateur"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="absolute -bottom-6 text-xs text-red-600">
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8 relative">
            <input
              className="pl-2 outline-none border-none w-64"
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Adresse email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="absolute -bottom-6 text-xs text-red-600">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8 relative">
            <input
              className="pl-2 outline-none border-none w-64"
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Mot de passe"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="absolute -bottom-6 text-xs text-red-600">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8 relative">
            <input
              className="pl-2 outline-none border-none w-64"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirmer mot de passe"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="absolute -bottom-6 text-xs text-red-600">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className="flex items-center rounded-2xl relative">
            <Select
              options={roles}
              isMulti
              isSearchable={false}
              className="border-gray-300 pl-2 outline-none border-none w-64 rounded-2xl"
              placeholder="Sélectionner des rôles"
              onChange={(options) => {
                formik.setFieldValue(
                  'role',
                  options.map((o) => o.value),
                );
              }}
            />
            {formik.errors.role ? (
              <div className="absolute -bottom-5 text-sm text-red-600">
                {formik.errors.role}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-8 py-2 rounded-2xl text-white font-semibold mb-2">
            Créer un compte
          </button>
          <NavLink
            className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
            to="/login">
            Retourner au login
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
