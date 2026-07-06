# Plantão+

Dashboard hospitalar fictício desenvolvido em React para apoio visual à gestão de plantão.

## Sobre o projeto

O Plantão+ é uma interface front-end criada para simular um painel de acompanhamento hospitalar, exibindo informações como pacientes, leitos, classificação de risco, sinais vitais, medicações pendentes e alertas do plantão.

Este projeto foi desenvolvido com foco em portfólio, utilizando dados fictícios e sem armazenar informações reais de pacientes.

## Funcionalidades atuais

- Dashboard geral do plantão
- Cards de resumo com indicadores principais
- Mapa de leitos
- Lista de pacientes fictícios
- Classificação de risco por status
- Alertas de medicação e pacientes críticos
- Layout responsivo

## Testes automatizados

O projeto possui testes end-to-end com Playwright, validando os principais fluxos da aplicação.

### Cenários testados

- Carregamento do dashboard principal
- Exibição dos pacientes iniciais
- Cadastro de novo paciente
- Persistência dos dados após recarregar a página
- Restauração dos dados iniciais

### Rodar os testes

```bash
npx playwright test

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS

## Objetivo do projeto

Demonstrar habilidades em desenvolvimento front-end, organização de componentes, criação de interfaces responsivas e construção de dashboards com dados dinâmicos.

## Próximas melhorias

- Formulário para cadastrar novos pacientes
- Filtros por risco e status
- Modal com detalhes do paciente
- Salvamento no LocalStorage
- Testes automatizados com Playwright
- Deploy online

## Aviso

Este projeto é fictício e utiliza apenas dados simulados. Não deve ser usado para atendimento real, prontuário eletrônico ou tomada de decisão clínica.