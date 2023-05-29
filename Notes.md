## 1. Data types

JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined - Empty value | Just declared not initalized.
6. Null
7. Symbol
8. Object
9. BigInt

The object data type can contain:

1. An object
2. An array
3. A date


## 2. Variables creation

The variable can be created by 
let | var | const.

1. let -> if you want to mutant the variable,declare. Blocked scope
2. const -> constant variable, must be initialized.
3. var - > old way to define variable. Function scoped.

To Create variable use `var`. Use camelcase for syntatics.

var foo = 1; // declared properly (locally)

bar = 2; // implied global

window.baz = 3; // global via window object

## 3. String 
Conacatenation is possible

* mystring.length - to count the number of characters.
* mystring.slice(start,end) - returns the string [start,end)
* mystring.toUpperCase()

### Template Strings

use this ``

Also you can use this for `` for regular strings.
You can use this for `` multi line strings.

```
let myvar = 4;
let dis = ` hello ${myvar}` 
```

## 4. Type conversion and Coercion

Conversion : Done by programmer.
Coercion : Done by JS.

* Number() : To convert string to number.
* String() : To convert number to string.

There are 5 falsy values:
0, '', NaN, null, undefined

## 5. Operator

== and === (strict equality)

'18'==18  returns true because  of Coercion.
'18' ===18 return false . Advised to use this.


## Arrays.

* arr.length
* arr.includes(3)
 
## . Functions

```
function myfun(){
    ..
    ..
    ..
}
```