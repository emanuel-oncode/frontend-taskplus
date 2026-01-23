import { Lock, Mail, User } from "lucide-react";

function LoginPage() {
  return (
    <section className="min-h-screen flex items-center">
      <form className="w-full max-w-4xl mx-auto p-2 bg-neutral-950 text-white">
        <h1 className="text-4xl text-center mb-5">¡Registrate!</h1>

        {/* User Name */}
        <div className="w-full flex gap-2 items-start">
          <div className="w-full flex gap-1 items-start focus-within:outline p-2 rounded-2xl">
            <div>
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="User Name"
              className="w-full focus:outline-none"
            />
          </div>
          <div className="w-full flex gap-1 items-start focus-within:outline p-2 rounded-2xl">
            <div>
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="w-full flex gap-1 items-start focus-within:outline p-2 rounded-2xl">
          <div>
            <Mail className="w-5 h-5" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full focus:outline-none"
          />
        </div>

        <div className="w-full flex gap-1 items-center focus-within:outline p-2 rounded-2xl">
          <div>
            <Lock className="w-5 h-5" />
          </div>
          <input
            type="password"
            placeholder="password"
            className="w-full focus:outline-none"
          />
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
