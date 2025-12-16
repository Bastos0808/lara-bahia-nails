# Lara Bahia Nails - Landing Page

Landing page moderna e delicada para nail designer desenvolvida com Next.js, TypeScript, Tailwind CSS e GSAP.

## 🎨 Características

- Design moderno e delicado
- Animações fluidas com GSAP
- Totalmente responsivo (mobile-first)
- Performance otimizada
- SEO configurado

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (animações)
- **React Icons**

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 🎨 Paleta de Cores

- **Branco**: #FFFFFF
- **Azul Escuro**: #003E7D
- **Rosa/Magenta**: #FBB3FF

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/
│   ├── sections/        # Seções da página
│   └── ui/              # Componentes reutilizáveis
├── lib/
│   ├── gsap.ts          # Configuração GSAP
│   └── utils.ts         # Funções utilitárias
└── public/
    └── images/          # Imagens da galeria
```

## 📝 Personalização

### Adicionar Imagens na Galeria

Coloque suas imagens na pasta `public/images/` com os nomes:
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- etc.

### Atualizar Informações de Contato

Edite os arquivos:
- `components/ui/Footer.tsx`
- `components/sections/Contact.tsx`

### Configurar Redes Sociais

Atualize os links em `components/ui/Footer.tsx`

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📄 Licença

Este projeto é privado e pertence a Lara Bahia Nails.

