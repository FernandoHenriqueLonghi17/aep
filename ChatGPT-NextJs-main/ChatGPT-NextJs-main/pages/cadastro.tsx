import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from 'pages/services/firabaseConfig';
//import iconepath from '@/public/staric/icone.png';

const Cadastro: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


        const [
            createUserWithEmailAndPassword,user,loading,error,
          ] = useCreateUserWithEmailAndPassword(auth);
    
          function handleSignIn(e: { preventDefault: () => void; }){
            e.preventDefault();
    
            createUserWithEmailAndPassword(senha,email);
    
          }
    
          if(loading){
            return <p> carregando... </p>;
          }
          
          if (user) {
            return (
              <div className="erro_login">
                <p>Usuario Registrado {user.user.email}</p>
              </div>
            );
          }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Perform email validation
        if (!validateEmail(email)) {
            alert('Email inválido. Por favor, coloque um email válido.');
            return;
        }

        // Continue with form submission or other actions
        // ...

        // For demonstration purposes, display the entered data in the console
        console.log('Email:', email);
        console.log('Senha:', senha);
    };

    const validateEmail = (email: string) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <main className="apresentacao">
                <section className="apresentacao__conteudo">
                    <h1 className="apresentacao__conteudo__titulo">
                        Cadastre-se <strong className="titulo-destaque">agora</strong>
                    </h1>
                    <form onSubmit={handleSubmit} method="POST">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="input-padrao"
                            required
                            placeholder="seuemail@dominio.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            className="input-padrao"
                            required
                            placeholder="Senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        <button onClick={() => createUserWithEmailAndPassword(email,senha)} type="submit" className="apresentacao__links__link">
                            Cadastrar
                        </button>
                    </form>
                    <div className="apresentacao__links">
                        <a className="apresentacao__links__link" href="/">
                            Cancelar
                        </a>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    );
};

export default Cadastro;
