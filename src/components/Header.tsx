import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex p-6 bg-dark30 border-b-2 border-dark20">
      <div className="flex justify-between items-center w-[100%] mx-auto">
        <Link href={'/'}>
          <h1 className="font-logo text-3xl me-14">BLOGAMES</h1>
        </Link>
        <div className="flex justify-between items-center h-10">
          <img className="h-6 w-6" src="/images/profile.png" alt="perfil" />
          <img
            className="h-6 w-6 mx-8"
            src="/images/search.png"
            alt="pesquisar"
          />
          <img className="h-6 w-6" src="/images/hamburger.png" alt="lista" />
        </div>
      </div>
    </header>
  )
}
