var tar = require('tar-fs')
var ignore = require('ignore-file')
var path = require('path')
var duplexify = require('duplexify')

module.exports = function (folder) {
  folder = path.resolve(process.cwd(), folder || '.')

  var stream = duplexify()
  stream.setWritable(false)

  var onfilter = function (filter) {
    if (stream.destroyed) return
    stream.setReadable(tar.pack(folder, {
      ignore: function (p) {
        p = p.slice(folder.length + 1)
        if (p === '.git' || p.indexOf('.git' + path.sep) === 0) return true
        return filter(p)
      }
    }))
  }

  ignore(path.join(folder, '.tacoignore'), function (_, filter) {
    if (filter) return onfilter(filter)
    ignore(path.join(folder, '.gitignore'), function (_, filter) {
      if (filter) return onfilter(filter)
      onfilter(ignore.compile('node_modules'))
    })
  })

  return stream
}
