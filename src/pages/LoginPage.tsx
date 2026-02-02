import { Lock, Mail } from "lucide-react";
import { useState } from "react";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function loginFetch(
    URL: RequestInfo | URL,
    data: { email: string; password: string },
  ) {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

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
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full  focus:outline-none"
            />
          </div>
          <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors text-center cursor-pointer">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
