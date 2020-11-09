import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';


const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Git hub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form >
        <input type="text" placeholder="Digite o nome do repositório">
        </input>

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img src="https://avatars2.githubusercontent.com/u/59258828?s=460&u=75015b114e5d47359f91f78023db14e023ffcb0c&v=4" alt="Avatar"
          />
          <div>
            <strong>fernandomarca/aircnc</strong>
            <p>O Aircnc é um projeto que visa conectar empresas que querem abrir spots e desenvolvedores que procuram um lugar para trocar ideias com devs, conhecer a empresa e trabalhar lá por um período.</p>
          </div>

          <FiChevronRight size={70} />
        </a>

        <a href="#">
          <img src="https://avatars2.githubusercontent.com/u/59258828?s=460&u=75015b114e5d47359f91f78023db14e023ffcb0c&v=4" alt="Avatar"
          />
          <div>
            <strong>fernandomarca/aircnc</strong>
            <p>O Aircnc é um projeto que visa conectar empresas que querem abrir spots e desenvolvedores que procuram um lugar para trocar ideias com devs, conhecer a empresa e trabalhar lá por um período.</p>
          </div>

          <FiChevronRight size={70} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;