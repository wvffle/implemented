module.exports = function (Class, Target, self, methods = []) {
  if (Target === Class) {
    throw new Error(`new ${Class.name}() cannot be called directly.`)
  }

  for (const method of methods) {
    if (self[method] === Class.prototype[method]) {
      throw new Error(`Class '${Target.name}' has to implement method '${method}'.`)
    }
  }
}
