import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from 'pages/services/firabaseConfig';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert('Formato de email inválido. Por favor, insira um endereço de email válido.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      await signInWithEmailAndPassword(email, password);
      router.push('/menu');
    } catch (signInError) {
      console.error('Erro ao fazer login:', signInError);
    }
  };

  const validateEmail = (email: string) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleNomeChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <main className="apresentacao">
      <section className="apresentacao__conteudo">
        <h1 className="apresentacao__conteudo__titulo">
          Eleve seu conhecimento digital a outro nível
          <strong className="titulo-destaque">!</strong>
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="input-padrao"
            required
            placeholder="seuemail@dominio.com"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="input-padrao"
            required
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="apresentacao__links__link">
            Login
          </button>
        </form>
        <div className="apresentacao__links">
          <a id="Cadastrar" className="apresentacao__links__link" href="cadastro">
            Cadastrar
          </a>
          <a className="apresentacao__links__link" href="recuperacao">
            Recuperar Senha
          </a>
        </div>
      </section>
    </main>
  );
}

