import Button from './Button'
import Card from './Card'

export default function CardList() {
  return (
    <main className="flex flex-col px-6 py-8 gap-8 items-center">
      <Card
        altDescription="xbox"
        image="/images/xbox.png"
        title="Xbox: consoles ganham atualização com novos recursos"
        date="19 de outubro, 2023"
      />
      <Card
        altDescription="cyberpunk"
        image="/images/cyberpunk.png"
        title="Cyberpunk vai ganhar novo jogo"
        date="4 de outubro, 2023"
      />
      <Card
        altDescription="multiversus"
        image="/images/coringa.png"
        title="Coringa pode aparecer em MultiVersus em breve"
        date="27 de setembro, 2023"
      />
      <Card
        altDescription="Imagem de um carro"
        image="/images/eagames.png"
        title="EA Games confirma novo jogo e janela de lançamento"
        date="30 de agosto, 2023"
      />
      <Button type="body">CARREGAR MAIS</Button>
    </main>
  )
}
