import { Lock, Mail } from "lucide-react";
import { useState } from "react";

function LoginPage() {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [messageError, setMessageError] = useState("");

  async function loginFetch(
    URL: RequestInfo | URL,
    data: { userEmail: string; userPassword: string },
  ) {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const result = await res.json();

    if (result.success) {
      console.log("Login exitoso:", result);
      // Aquí rediriges al usuario o actualizas el contexto global
      window.location.href = "/HomePage";
    } else {
      console.error("Error en login:", result.message);
      setMessageError(result.message);
    }

    console.log(result);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);

    loginFetch("http://localhost:1234/user/login", formData);
  };

  return (
    <section>
      <div className="w-full max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold mb-20">
          ¡Inicia Sesión!
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="w-full flex gap-2 items-center border-b rounded-md border-cyan-300 p-2 bg-neutral-200">
            <div>
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="Email"
              value={formData.userEmail}
              onChange={handleInputChange}
              className="w-full  focus:outline-none"
            />
          </div>
          <div className="w-full flex gap-2 items-center border-b rounded-md border-cyan-300 p-2 bg-neutral-200">
            <div>
              <Lock className="w-5 h-5" />
            </div>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              placeholder="Password"
              value={formData.userPassword}
              onChange={handleInputChange}
              className="w-full  focus:outline-none"
            />
          </div>
          <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors text-center cursor-pointer">
            Iniciar Sesión
          </button>
          <div>
            {messageError && (
              <p className="text-red-500 text-sm text-center">{messageError}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
