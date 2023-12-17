import Link from 'next/link'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="border-t-2 border-dark20">
      <div className="flex flex-col px-8 py-12 text-left">
        <Button type="footer">PT-BR</Button>
        <nav className="mt-16">
          <ul className="flex flex-col gap-y-6">
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
