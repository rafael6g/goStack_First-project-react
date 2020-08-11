import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/32769977?s=460&u=35b733bc7331058902d2e1a4be96e9ca760a39d7&v=4"
            alt="Rafael Fernandes"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
