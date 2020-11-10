# Installasjonsguide for workshop
Guide for installasjon av editor, pakkebehandler og git.

## Editor:
Når det gjelder Editor står dere fritt til å velge selv, men f.eks VS Code er mye brukt blant frontendutviklere og lar deg installere støtte for Svelte.

Følg instruksjonene her for å installere Visual Studio Code: https://code.visualstudio.com/download

## Pakkebehandler
Du må ha en pakkebehandler installert på maskinen for å bygge og kjøre prosjektet lokalt. 

### Mac
Vi anbefaler å bruke HomeBrew som er en pakkebehandler for Mac: https://brew.sh/index_nb. Du kan installere denne på din maskin ved å åpne en terminal og kopiere inn følge kommando: 

``` /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ```

For å installere yarn (https://classic.yarnpkg.com/en/docs/install/#mac-stable) med homebrew kjører du følgende kommando i terminalen din.
``` brew install yarn ```

### Windows
For å installere Yarn trenger du først å ha Node.js installert. Om du ikke har Node.js på din maskin kan du laste det ned her: https://nodejs.org/en/download/

Følg denne guiden for å laste ned og installere Yarn: https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Git
Git er versjonskontroll for kode, og det du trenger for å hente koden vår. Mac har det installert, men på Windows må du installere det manuelt.

## Installer Git for Windows
Last ned Git for Windows her: https://gitforwindows.org/

### Takk til
Takk til talepre og maynkj for at vi kunne gjenbruke deler av deres guide: https://github.com/knowit/react-dashboard-workshop/blob/master/SETUP.md
