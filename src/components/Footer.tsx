import Link from 'next/link'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="border-t-2 border-dark20">
      <div className="flex flex-col px-8 py-12 text-left sm:flex-row sm:py-6 sm:items-center sm:justify-between">
        <Button type="footer">PT-BR</Button>
        <nav className="mt-16 sm:mt-0">
          <ul className="flex flex-col gap-6 sm:flex-row">
            <Link className="text-lg" href={'/'}>
              Sobre
            </Link>
            <Link className="text-lg" href={'/'}>
              Termos de serviço
            </Link>
            <Link className="text-lg" href={'/'}>
              Política de privacidade
            </Link>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
