# taco-pack

Pack a directory into a tarball (ignoring files in .tacoignore or .gitignore).

```
npm install -g taco-pack
```

## Usage

```
taco-pack | ssh user@server.com 'taco-build npm install | taco-deploy-mongroup'
```

## Programmatic usage

``` js
var pack = require('taco-pack')

pack('/my/folder').pipe(process.stdout)
```

## License

MIT
