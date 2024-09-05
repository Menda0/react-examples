import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Registro efectuado</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>
              Parabéns! O seu registo foi concluído com sucesso. Para garantir a segurança da sua conta e finalizar o processo de inscrição, enviámos um email de boas-vindas para o endereço que nos forneceu. Este email contém um link de confirmação que deverá clicar para ativar a sua conta.
            </p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Aceder ao Login
              </button>
              <button
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Navegar para a página principal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
