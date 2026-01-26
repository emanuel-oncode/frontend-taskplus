import { Calendar, Lock, Mail, User } from "lucide-react";

function RegisterPage() {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="min-h-screen w-full bg-black fixed top-0 left-0 -z-1">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
        <div className="w-full h-150 flex flex-col justify-center gap-10 px-10 bg-black text-white">
          <h1 className="text-5xl font-bold">¡Crea tu cuenta!</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            atque tempore unde esse libero, accusamus modi perferendis possimus
            aperiam maxime?
          </p>
        </div>

        <form className=" h-150 flex flex-col gap-2 py-20 px-8 mx-auto bg-white">
          <h1 className="text-4xl text-center font-bold mb-20">¡Registrate!</h1>

          {/* User Name */}
          <div className="w-full flex gap-2 items-start">
            <div className="w-full flex gap-2 items-center border-b rounded-md border-cyan-300 p-2 bg-neutral-200">
              <div>
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="User Name"
                className="w-full  focus:outline-none"
              />
            </div>
            <div className="w-full flex gap-2 items-center border-b rounded-md border-cyan-300 p-2 bg-neutral-200">
              <div>
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full  focus:outline-none"
              />
            </div>
          </div>

          <div className="w-full flex gap-2 items-center border-b rounded-md border-cyan-300 p-2 bg-neutral-200">
            <div>
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full focus:outline-none"
            />
          </div>

          <div className="w-full flex gap-2 items-center border-b rounded-md border-cyan-300 p-2 bg-neutral-200">
            <div>
              <Lock className="w-5 h-5" />
            </div>
            <input
              type="password"
              placeholder="password"
              className="w-full focus:outline-none"
            />
          </div>

          <div className="w-full flex gap-2 items-center border-b rounded-md border-cyan-300 p-2 bg-neutral-200">
            <div>
              <Calendar className="w-5 h-5" />
            </div>
            <input type="date" className="w-full focus:outline-none" />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-neutral-950 text-white font-bold mt-10 rounded-full cursor-pointer hover:bg-neutral-900 transition ease-in-out duration-200"
          >
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
