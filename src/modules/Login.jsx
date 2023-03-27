import { auth } from "../firbase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const Login = async (username, password) => {
    if (username === "" || password === "") {
      alert("False Email or Password");
    } else {
      try {
        const user = await signInWithEmailAndPassword(auth, username, password);
      } catch (error) {
        console.log(error);
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          alert("Bitte geben Sie eine gültige Email an.");
        }
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          alert("Falsche Email oder Passwort");
        }
      }
    }
  };

  return (
    <>
      <div className="flex justify-center mt-28">
        <div className="flex flex-col items-center p-6 bg-gray-300 rounded-xl">
          <h1 className="text-3xl font-bold">ANMELDUNG</h1>
          <form
            className="flex flex-col items-center gap-3 mt-2"
            onSubmit={(e) => {
              e.preventDefault();
              Login(e.target[0].value, e.target[1].value);
            }}
          >
            <input
              type="text"
              placeholder="EMAIL"
              name="email"
              className="bg-gray-400 placeholder:text-white p-2 rounded-3xl text-white text-lg"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              name="password"
              className="bg-gray-400 placeholder:text-white p-2 rounded-3xl text-white text-lg"
            />
            <input
              type="submit"
              value="LOGIN"
              className="bg-blue-600 p-2 rounded-3xl w-32 text-white text-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
