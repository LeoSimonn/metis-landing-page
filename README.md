# Metis — Landing e páginas públicas

Site estático (HTML + CSS + React via CDN e JSX transpilado no navegador com Babel). Não há passo de build: basta servir a pasta `public/`.

## Estrutura

```
├── README.md
├── netlify.toml
├── package.json
├── .gitignore
├── docs/
│   └── branding/              # PDF de style guide (não vai ao site)
└── public/                    # raiz publicada (Netlify → publish: public)
    ├── index.html             # landing marketing
    ├── suporte.html
    ├── privacidade.html
    ├── opcoes-privacidade.html
    ├── Landing.html
    ├── Support.html
    ├── Privacy Policy.html
    ├── Privacy Options.html   # redirecionam para as páginas canônicas
    └── assets/
        ├── css/
        ├── js/                # i18n.js (+ MetisLinks entre páginas)
        ├── jsx/
        └── images/            # metis-icon.png
```

## Rodar localmente

É obrigatório usar um servidor HTTP (abrir o HTML direto em `file://` quebra o carregamento dos módulos JSX).

### Com npm (recomendado)

```bash
cd "Metis Landing Page"
npm start
```

Abre em **http://localhost:4173** (usa `serve` via `npx`).

### Sem npm

```bash
cd "Metis Landing Page/public"
python3 -m http.server 8080
```

Abra **http://localhost:8080/**.

### Netlify CLI (opcional)

```bash
npm i -g netlify-cli
cd "Metis Landing Page"
netlify dev
```

## Deploy (Netlify)

1. **Publish directory:** `public` (já definido em `netlify.toml`).
2. **Build command:** deixe vazio — não há build.
3. Arraste a pasta do projeto ou conecte o repositório Git; o Netlify usa `public/` como raiz do site.

URLs amigáveis: `/suporte` → `suporte.html`, `/privacidade` → `privacidade.html`, `/marketing` → `index.html`.

## Ícone da marca

O arquivo `public/assets/images/metis-icon.png` alimenta o quadrado da logo no header (`shared.css`). Se remover o arquivo, o fallback de cor continua visível.

## Documentação de branding

O guia compactado em PDF fica em `docs/branding/` (fora de `public/`, não é enviado ao Netlify).

## Edição rápida (landing)

No `public/index.html`, o bloco `window.METIS_TWEAKS` e o painel de ajustes (dev) controlam seções e cor de destaque da home.
