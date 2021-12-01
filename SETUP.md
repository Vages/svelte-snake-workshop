# Workshop installation guide

<!-- mdpo-disable -->
<!-- prettier-ignore-start -->

<!-- mdpo-enable-next-line -->
> Read in the language that you prefer:
>
> - [🇬🇧 English][setup-eng]
> - [🇳🇴 Norsk bokmål][setup-nob]

<!-- prettier-ignore-end -->

<!-- mdpo-enable -->

Guide to installing a code editor, package manager and git.

## Code editor

When it comes to editors, you are free to choose for yourself. Visual Studio Code is widely used among frontend developers, and you can add Svelte support to it.

Follow the instructions on the following page to install Visual Studio Code: <https://code.visualstudio.com/download>

## Git, runtime environment and package manager

You must have Git installed on your machine to download the project. You need Node to build and run the project on your machine.

### Mac

1. Install Homebrew as described at <https://brew.sh/>
1. Install everything using `brew install git node`

### Windows

There are multiple ways to install these on Windows. Below are two options:

#### With Chocolatey

1. Install Chocolatey as described at <https://chocolatey.org/install>
1. Install the packages using `choco install nodejs git`

#### With git bash and exe files

Download and install Node from the official page: <https://nodejs.org/en/download/>

### Linux

On Linux, the installation process varies from distro to distro, and we have only met Linux users who know how to install things :D

## Git

Git is code version control, and you need it to fetch the workshop. It comes pre-installed with all Macs, but you must install it on Windows and Linux machines.

### Install Git for Windows

Download Git for Windows here: https://gitforwindows.org/

## Clone repo, install and run the app

1. When you have installed an editor, Git and Node, clone the repo in the command line/terminal: `git clone https://github.com/Vages/svelte-snake-workshop.git`
1. Go to the `svelte-snake-workshop` directory and run `npm install` to install the dependencies. If you run `npm run dev`, the app should startin development mode. If it works, you're ready for the workshop!

[setup-eng]: .
[setup-nob]: ./locale/nob/SETUP.md
