import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="hidden sm:block py-8 lg:pt-12">
      <ul className="flex items-center justify-center gap-12 text-lg">
        <Link href={'/'}>INÍCIO</Link>
        <Link href={'/'}>CATEGORIAS</Link>
        <Link href={'/'}>SOBRE</Link>
        <Link href={'/'}>CONTATO</Link>
      </ul>
    </nav>
  )
}
