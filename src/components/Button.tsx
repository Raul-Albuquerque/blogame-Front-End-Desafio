type Props = {
  children: string
}

export default function Button({ children }: Props) {
  return (
    <button type="button" className="flex items-center mx-auto p-3 text-dark10">
      <span className="flex text-lg mr-4">{children}</span>
      <img src="/images/caret.png" alt="cursor para baixo" />
    </button>
  )
}
