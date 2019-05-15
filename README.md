@waff/implemented
---

```js
const implemented = require('@waff/implemented')

class A {
  constructor () {
    implemented(A, new.target, this, [
      'say'
    ])
  }

  say () {}
}

class B extends A {}
class C extends A {
  say () {}
}

new A() // Thrown: new A() cannot be called directly.
new B() // Thrown: Class 'B' has to implement method 'say'.
new C() // Works okay
```
