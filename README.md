# Svelte Snake Workshop

Welcome to the Svelte Snake Workshop!

## Get started

Install the dependencies …

```bash
yarn install
```

… then start [Rollup](https://rollupjs.org):

```bash
yarn run dev
```

**Important**: it's `yarn run dev`, _not_ `yarn run start`.

Navigate to [localhost:5000](http://localhost:5000). You should see your app
running. Edit a component file in `src`, save it, and reload the page to see
your changes.

Once this is running, you'll be ready to try out
[the tasks (Norwegian bokmål)](tasks/nb-NO.md).

## Building and running in production mode

To create an optimised version of the app:

```bash
yarn run build
```

You can run the newly built app with `yarn run start`. This uses
[sirv](https://github.com/lukeed/sirv), which is included in your package.json's
`dependencies` so that the app will work when you deploy to platforms like
[Heroku](https://heroku.com).

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
yarn add -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and
simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
yarn add -g surge
```

Then, from within your project folder:

```bash
yarn run build
surge public my-project.surge.sh
```
