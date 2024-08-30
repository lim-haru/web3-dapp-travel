# StartToImpact: [Typescript, React e Web3 - Travel](https://web3-dapp-travel.vercel.app)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-blue)
![Wagmi](https://img.shields.io/badge/Wagmi-2.12.5-blue)
[![Ethereum](https://img.shields.io/badge/Powered%20by-Ethereum-blue)](https://ethereum.org/)

## Descrizione

Benvenuti nell'applicazione decentralizzata (DApp) sviluppata per promuovere viaggi consapevoli e sostenibili. Questa piattaforma permette agli utenti di esplorare e acquistare pacchetti viaggio con un impatto ambientale ridotto, utilizzando Ethereum (ETH). Gli utenti possono connettere il proprio wallet tramite estensioni browser, applicazioni per smartphone, o registrandosi tramite email o social media. Una volta scelto il pacchetto desiderato, è possibile finalizzare l'acquisto con una transazione sicura e sostenibile direttamente sulla blockchain di Ethereum.

### [Presentazione](https://www.canva.com/design/DAGPT-iTX_c/UyhXJluKCee8yBLa6gpWNw/view?utm_content=DAGPT-iTX_c&utm_campaign=designshare&utm_medium=link&utm_source=editor)

<div align="center">
  <img width="85%" src="./github/image/home.png">
</div>

## Utilizzo 🌐

1. **Collegamento Wallet:**

   - Visita la homepage e clicca su "Collega Wallet".
   - Scegli il metodo di collegamento preferito: estensione browser (es. MetaMask), app mobile o registrazione via email/social.

2. **Esplora i pacchetti:**

   - Sfoglia la galleria dei pacchetti di viaggio disponibili.
   - Scegli un pacchetto da acquistare.

3. **Acquisto:**
   - Premi il pulsante "Acquista" sulla pagina del pacchetto scelto.
   - Conferma la transazione tramite il tuo wallet.
   - Dopo la conferma, il pagamento sarà registrato sulla blockchain e riceverai i dettagli del tuo viaggio.

## Installazione

1. Clona il repository sul tuo computer:

```bash
git clone https://github.com/lim-haru/web3-dapp-travel.git
```

2. Entrare nella directory del progetto

```bash
cd web3-dapp-travel
```

3. Installare le dipendenze

```bash
npm install
```

4. Crea le variabili ambiente nel tuo sistema o crea un file nel root del progetto chiamandolo ".env.local" e aggiungi le seguenti variabili(Guida compilazione variabili):

```
NEXT_PUBLIC_WC_PROJECT_ID=id_del_progetto_walletconnect
NEXT_PUBLIC_IPFS_GATEWAY=dominio_gateway_ipfs
NEXT_PUBLIC_CRYPTO_PAYMENT_ADDRESS=address_del_wallet_dove_ricevere_i_pagamenti
```

5. Avviare l'applicazione

```bash
npm run dev
```

6. Apri il browser e vai all'indirizzo: [localhost:3000](http://localhost:3000)

## Tecnologie Utilizzate

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/CSS%20Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Wagmi-7B3FE4?style=for-the-badge&logo=wagmi&logoColor=white" alt="Wagmi" />
  <img src="https://img.shields.io/badge/WalletConnect-3B99FC?style=for-the-badge&logo=walletconnect&logoColor=white" alt="WalletConnect" />
</div>

## Licenza 📄

Questo progetto è sotto licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.
