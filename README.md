# @schema-forms-data/react

> Meta-pacote all-in-one: re-exporta `core` + `templates` + `renderer` + `builder`.

[![npm](https://img.shields.io/npm/v/@schema-forms-data/react)](https://www.npmjs.com/package/@schema-forms-data/react)
[![license](https://img.shields.io/npm/l/@schema-forms-data/react)](./LICENSE)

Ponto de entrada único para quem quer tudo em uma só instalação. Se você precisar do builder e do renderer na mesma app, use este pacote — se precisar apenas de um deles, prefira instalar o específico para tree-shaking melhor.

## Install

```bash
pnpm add @schema-forms-data/react
```

## O que inclui

Tudo que os 4 pacotes abaixo exportam, disponível de um único import:

| Pacote | O que faz |
|---|---|
| `@schema-forms-data/core` | Tipos, enums, utilitários — base do ecossistema |
| `@schema-forms-data/templates` | Sistema de temas via CSS variables |
| `@schema-forms-data/renderer` | Renderiza `FormSchema` como formulário multi-step |
| `@schema-forms-data/builder` | Editor visual drag-and-drop de schemas |

```ts
// Tudo acessível de um único lugar
import { FormSchema, FormRenderer, BuilderWrapper } from '@schema-forms-data/react';
```

## Peer dependencies

```bash
pnpm add react react-dom react-hook-form lucide-react \
  @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
```

## Dependências em outros pacotes

`@schema-forms-data/react` depende de todos os pacotes do ecossistema. Ao instalar este, todos chegam automaticamente como dependências transitivas.



## Licença

[MIT](LICENSE) © Inovex Tecnologia
