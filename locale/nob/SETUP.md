# Installasjonsguide for kurset

> Les på det språket du foretrekker:
>
> - [🇬🇧 English][setup-eng]
> - [🇳🇴 Norsk bokmål][setup-nob]

Guide for installasjon av kodeverktøy, pakkebehandler og git.

## Kodeverktøy

Når det gjelder kodeverktøy, står du fritt til å velge selv, men for eksempel er Visual Studio Code mye brukt blant frontendutviklere, og du kan installere støtte for Svelte i det.

Følg instruksjonene her for å installere Visual Studio Code: <https://code.visualstudio.com/download>

## Git, kjøremiljøet og pakkebehandler

Du må ha Git for å laste ned prosjektet og kjøremiljøet Node på maskinen for å bygge og kjøre prosjektet lokalt.

### Mac

1. Installer Homebrew som beskrevet på <https://brew.sh/>
1. Installer alt med `brew install git node`

### Windows

På Windows er det flere måter å gjøre dette på. Under har vi listet opp to:

#### Med Chocolatey

1. Installer Chocolatey som beskrevet på <https://chocolatey.org/install>
1. Installer pakkene med `choco install nodejs git`

#### Med git bash og exe-filer

Installer Node herfra: <https://nodejs.org/en/download/>

### Linux

På Linux varierer fremgangsmåten fra distro til distro, og vi har hittil bare opplevd at Linux-brukere vet bedre enn oss hvordan ting skal installeres :D

## Git

Git er versjonskontroll for kode, og det du trenger for å hente koden vår. Mac har det installert, men på Windows og Linux må du installere det manuelt.

### Installer Git for Windows

Last ned Git for Windows her: https://gitforwindows.org/

## Klone repo og installere og kjøre appen

1. Når du har installert disse, kloner du repoet i kommandolinjen/terminalen: `git clone https://github.com/Vages/svelte-snake-workshop.git`
1. Bytt til mappen `svelte-snake-workshop` og skriv `npm install` for å installere avhengighetene. Hvis du skriver `npm run dev` skal den starte appen i utviklingsmodus. Hvis dette fungerer, er du klar for workshoppen!

[setup-eng]: ../../SETUP.md
[setup-nob]: ./SETUP.md
