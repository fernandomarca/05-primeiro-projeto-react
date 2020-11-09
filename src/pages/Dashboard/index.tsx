import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handlerAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="Git hub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handlerAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="ss">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={40} />
          </a>
        ))}

      </Repositories>
    </>
  );
};

export default Dashboard;
