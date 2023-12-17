type Props = {
  children: string
  type: 'body' | 'footer'
}

export default function Button({ children, type }: Props) {
  return (
    <>
      {type === 'body' ? (
        <button type="button" className="flex items-center text-dark10 p-3">
          <span className="flex text-lg mr-4">{children}</span>
          <img src="/images/caret.png" alt="cursor para baixo" />
        </button>
      ) : (
        <button type="button" className="flex items-center text-dark10">
          <span className="flex text-lg mr-4">{children}</span>
          <img src="/images/caret.png" alt="cursor para baixo" />
        </button>
      )}
    </>
  )
}
