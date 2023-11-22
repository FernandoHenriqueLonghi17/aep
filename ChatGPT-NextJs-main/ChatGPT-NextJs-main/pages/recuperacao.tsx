import React, { useState, ChangeEvent, FormEvent } from 'react';
//import Image from 'next/image';


const Recuperacao: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Perform email validation
        if (!validateEmail(email)) {
            alert('Formato de email inválido. Por favor, insira um endereço de email válido.');
            return;
        }

        // Continue with form submission or other actions
        // ...

        // For demonstration purposes, display the entered email in the console
        console.log('Email:', email);
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
                    <h1 className="apresentacao__conteudo__titulo">Recuperação de Senha</h1>
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
                        <button type="submit" className="apresentacao__links__link">
                            Enviar Email de Recuperação
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

export default Recuperacao;