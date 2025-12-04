# 🗓️ Datas Comemorativas - TCI Modulares

Sistema web para visualização de feriados nacionais, estaduais e municipais das unidades da TCI Modulares.

## 📋 Sobre o Projeto

Aplicação desenvolvida para consulta rápida e organizada de feriados e datas comemorativas nas cidades onde a TCI Modulares possui operação (Macapá-AP e Goiânia-GO).

## 🎯 Funcionalidades

- ✅ Visualização de feriados por mês
- ✅ Seleção entre as cidades: Macapá-AP e Goiânia-GO
- ✅ Integração com API Brasil API para feriados nacionais
- ✅ Feriados estaduais e municipais específicos de cada localidade
- ✅ Interface responsiva e intuitiva
- ✅ Categorização por tipo de feriado (Nacional, Estadual, Municipal, Facultativo)
- ✅ Sistema de cores para identificação visual

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e design responsivo
- **JavaScript (Vanilla)** - Lógica e integração com API
- **Brasil API** - Fonte de dados de feriados nacionais

## 📁 Estrutura do Projeto

```
/
├── Index.html          # Página principal
├── Css/
│   └── Styles.css     # Estilos da aplicação
└── Js/
    └── Script.js      # Lógica e integração com API
```

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
2. **Abra o arquivo `Index.html` em um navegador**
3. **Selecione a cidade desejada** (Macapá ou Goiânia)
4. **Escolha o mês** para visualizar os feriados

> **Nota:** A aplicação funciona diretamente no navegador, sem necessidade de servidor.

## 🎨 Legenda de Cores

- 🔴 **Vermelho** - Feriados Nacionais
- 🟡 **Amarelo** - Feriados Estaduais
- 🟢 **Verde** - Feriados Municipais
- 🟣 **Roxo** - Pontos Facultativos

## 📡 Integração com API

O sistema utiliza a [Brasil API](https://brasilapi.com.br/api/feriados/v1/2025) para buscar os feriados nacionais atualizados. Em caso de falha na conexão, o sistema carrega automaticamente dados locais como fallback.

**Endpoint utilizado:**
```
https://brasilapi.com.br/api/feriados/v1/2025
```

## 🏙️ Feriados por Cidade

### Macapá - AP
**Estaduais:**
- 19/03 - São José (Padroeiro do Amapá)
- 13/09 - Criação do Território Federal do Amapá
- 20/11 - Dia da Consciência Negra

**Municipais:**
- 04/02 - Aniversário de Macapá
- 25/07 - São Tiago (Padroeiro de Macapá)

### Goiânia - GO
**Estaduais:**
- 26/07 - Fundação do Estado de Goiás

**Municipais:**
- 24/10 - Aniversário de Goiânia

## 🔧 Manutenção

### Adicionar nova cidade

Para adicionar uma nova cidade, edite o arquivo `Script.js`:

1. Adicione a opção no objeto `localHolidays`:
```javascript
const localHolidays = {
    // ... cidades existentes
    novacidade: {
        estaduais: {
            mes: [
                { date: "DD/MM", name: "Nome do Feriado", type: "Estadual" }
            ]
        },
        municipais: {
            mes: [
                { date: "DD/MM", name: "Nome do Feriado", type: "Municipal" }
            ]
        }
    }
};
```

2. Adicione a opção no `Index.html`:
```html
<option value="novacidade">📍 Nova Cidade - UF</option>
```

### Atualizar ano dos feriados

Altere a constante `API_URL` no arquivo `Script.js`:
```javascript
const API_URL = 'https://brasilapi.com.br/api/feriados/v1/2026';
```

## 📱 Compatibilidade

- ✅ Chrome (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Edge (versão 90+)
- ✅ Dispositivos móveis (iOS e Android)

## 📄 Licença

Este projeto é de uso exclusivo da equipe de TI da **TCI Modulares**. Todos os direitos reservados.

---# 🗓️ Datas Comemorativas - TCI Modulares

Sistema web para visualização de feriados nacionais, estaduais e municipais das unidades da TCI Modulares.

## 📋 Sobre o Projeto

Aplicação desenvolvida para consulta rápida e organizada de feriados e datas comemorativas nas cidades onde a TCI Modulares possui operação (Macapá-AP e Goiânia-GO).

## 🎯 Funcionalidades

- ✅ Visualização de feriados por mês
- ✅ Seleção entre as cidades: Macapá-AP e Goiânia-GO
- ✅ Integração com API Brasil API para feriados nacionais
- ✅ Feriados estaduais e municipais específicos de cada localidade
- ✅ Interface responsiva e intuitiva
- ✅ Categorização por tipo de feriado (Nacional, Estadual, Municipal, Facultativo)
- ✅ Sistema de cores para identificação visual

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e design responsivo
- **JavaScript (Vanilla)** - Lógica e integração com API
- **Brasil API** - Fonte de dados de feriados nacionais

## 📁 Estrutura do Projeto

```
/
├── Index.html          # Página principal
├── Css/
│   └── Styles.css     # Estilos da aplicação
└── Js/
    └── Script.js      # Lógica e integração com API
```

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
2. **Abra o arquivo `Index.html` em um navegador**
3. **Selecione a cidade desejada** (Macapá ou Goiânia)
4. **Escolha o mês** para visualizar os feriados

> **Nota:** A aplicação funciona diretamente no navegador, sem necessidade de servidor.

## 🎨 Legenda de Cores

- 🔴 **Vermelho** - Feriados Nacionais
- 🟡 **Amarelo** - Feriados Estaduais
- 🟢 **Verde** - Feriados Municipais
- 🟣 **Roxo** - Pontos Facultativos

## 📡 Integração com API

O sistema utiliza a [Brasil API](https://brasilapi.com.br/api/feriados/v1/2025) para buscar os feriados nacionais atualizados. Em caso de falha na conexão, o sistema carrega automaticamente dados locais como fallback.

**Endpoint utilizado:**
```
https://brasilapi.com.br/api/feriados/v1/2025
```

## 🏙️ Feriados por Cidade

### Macapá - AP
**Estaduais:**
- 19/03 - São José (Padroeiro do Amapá)
- 13/09 - Criação do Território Federal do Amapá
- 20/11 - Dia da Consciência Negra

**Municipais:**
- 04/02 - Aniversário de Macapá
- 25/07 - São Tiago (Padroeiro de Macapá)

### Goiânia - GO
**Estaduais:**
- 26/07 - Fundação do Estado de Goiás

**Municipais:**
- 24/10 - Aniversário de Goiânia

## 🔧 Manutenção

### Adicionar nova cidade

Para adicionar uma nova cidade, edite o arquivo `Script.js`:

1. Adicione a opção no objeto `localHolidays`:
```javascript
const localHolidays = {
    // ... cidades existentes
    novacidade: {
        estaduais: {
            mes: [
                { date: "DD/MM", name: "Nome do Feriado", type: "Estadual" }
            ]
        },
        municipais: {
            mes: [
                { date: "DD/MM", name: "Nome do Feriado", type: "Municipal" }
            ]
        }
    }
};
```

2. Adicione a opção no `Index.html`:
```html
<option value="novacidade">📍 Nova Cidade - UF</option>
```

### Atualizar ano dos feriados

Altere a constante `API_URL` no arquivo `Script.js`:
```javascript
const API_URL = 'https://brasilapi.com.br/api/feriados/v1/2026';
```

## 📱 Compatibilidade

- ✅ Chrome (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Edge (versão 90+)
- ✅ Dispositivos móveis (iOS e Android)

## 📄 Licença

Este projeto é de uso exclusivo da equipe de TI da **TCI Modulares**. Todos os direitos reservados.

---