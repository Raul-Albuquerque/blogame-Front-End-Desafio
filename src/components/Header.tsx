import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex p-6 bg-dark30 border-b-2 border-dark20">
      <div className="flex justify-between items-center max-w-[1024px] w-[100%] mx-auto">
        <ul className="hidden gap-8 lg:flex">
          <Link href={'/'}>
            <img src="/images/facebook.png" alt="facebook" />
          </Link>
          <Link href={'/'}>
            <img src="/images/twitter.png" alt="twitter" />
          </Link>
          <Link href={'/'}>
            <img src="/images/twitch.png" alt="twitch" />
          </Link>
          <Link href={'/'}>
            <img src="/images/discord.png" alt="discord" />
          </Link>
        </ul>
        <Link href={'/'}>
          <h1 className="font-logo text-3xl me-14 lg:text-[56px] lg:leading-[68px]">
            BLOGAMES
          </h1>
        </Link>
        <ul className="flex justify-between items-center h-10">
          <Link href={'/'}>
            <img className="h-6 w-6" src="/images/profile.png" alt="perfil" />
          </Link>
          <Link href={'/'}>
            <img
              className="h-6 w-6 mx-8"
              src="/images/search.png"
              alt="pesquisar"
            />
          </Link>
          <Link href={'/'}>
            <img className="h-6 w-6" src="/images/hamburger.png" alt="lista" />
          </Link>
        </ul>
      </div>
    </header>
  )
}
