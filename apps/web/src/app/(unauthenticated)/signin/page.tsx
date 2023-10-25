import Link from 'next/link';

import { SignInForm } from '~/components/forms/signin';

export default function SignInPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Faça login em sua conta</h1>

      <p className="text-muted-foreground/60 mt-2 text-sm">Bem vindo de volta!</p>

      <SignInForm className="mt-4" />

      <p className="text-muted-foreground mt-6 text-center text-sm">
        Não tem uma conta?{' '}
        <Link href="/signup" className="text-primary duration-200 hover:opacity-70">
          Cadastrar-se
        </Link>
      </p>

      <p className="mt-2.5 text-center">
        <Link
          href="/forgot-password"
          className="text-muted-foreground text-sm duration-200 hover:opacity-70"
        >
          Esqueceu sua senha?
        </Link>
      </p>
    </div>
  );
}
