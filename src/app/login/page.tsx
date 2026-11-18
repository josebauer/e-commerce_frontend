export default function Login() {
  return (
    <main className="flex justify-center items-center">
      <form className="w-lg h-100 flex flex-col justify-center items-center bg-red-600 rounded-lg p-4 text-white">
        <h2 className="text-2xl py-5">Entre na sua conta</h2>
        <p>Ainda não possui uma conta? <a className="hover:underline" href="/register">Registre-se</a> agora!</p>
        <div className="flex flex-col p-3">
          <label htmlFor="email">E-mail</label>
          <input className="rounded p-2 w-sm" type="text" id="email" name="email" typeof="email" />
        </div>

        <div className="flex flex-col p-3">
          <label htmlFor="password">Senha</label>
          <input className="rounded p-2 w-sm" type="password" id="password" name="password" typeof="password" />
        </div> 

        <a className="hover:underline px-15 italic self-start" href="">Esqueci minha senha</a>
        <button className="cursor-pointer w-xs bg-white my-4 p-3 rounded-lg text-red-600" type="submit">Entrar</button>
      </form>
    </main>
  )
}