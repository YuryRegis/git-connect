import Python from './Python.js'
import JavaScript from './JavaScript.js'
import Java from './Java.js'
import CoffeeScript from './CoffeeScript.js'
import ObjectiveC from './ObjectiveC.js'
import Go from './Go.js'
import TypeScript from './TypeScript.js'
import Ruby from './Ruby.js'
import Cpp from './Cpp.js'
import Php from './Php.js'
import CSharp from './Csharp.js'
import C from './C.js'
import PowerShell from './PowerShell.js'
import Flutter from './Flutter.js'
import Rust from './Rust.js'
import Kotlin from './Kotlin.js'
import Swift from './Swift.js'
import Groovy from './Groovy.js'
import Elixir from './Elixir.js'
import Default from './Default.js'
import Perl from './Perl.js'
import Lua from './Lua.js'
import EmacsLisp from './Lisp.js'
import Ocaml from './Ocaml.js'
import Haskell from './Haskell.js'
import Clojure from './Clojure.js'
import Erlang from './Erlang.js'
import VimScript from './VimScript.js'
import R from './R.js'
import Julia from './Julia.js'
import Coq from './Coq.js'
import Jsonnet from './Jsonnet.js'
import Matlab from './Matlab.js'
import Puppet from './Puppet.js'
import Fortran from './Fortran.js'
import SystemVerilog from './SystemVerilog.js'
import Vba from './Vba.js'
import WebAssembly from './WebAssembly.js'
import PureScript from './PureScript.js'
import CommonLisp from './CommonLisp.js'
import CSS from './CSS.js'



const languages = {
    Default: {
        icon: Default
    },
    CSS: { icon: CSS },
    HTML: { icon: Default },
    JavaScript: {name:'JavaScript',
     icon: JavaScript},
    Python: {name:'Python',
     icon: Python},    
    Java: {name:'Java',
     icon: Java},
    Go: {name:'Go',
     icon: Go},
    Ruby: {name:'Ruby',
     icon: Ruby},
    TypeScript:{name:'TypeScript',
     icon: TypeScript},
    'C++':{name:'C++',
     icon: Cpp},
    PHP: {name:'PHP',
     icon: Php},
    'C#': {name:'C#',
     icon: CSharp},
    C: {name:'C',
     icon: C},
    Shell: {name:'Shell',
     icon: PowerShell},
    Dart: {name:'Dart',
     icon: Flutter},
    Rust: {name:'Rust',
     icon: Rust},
    Kotlin: {name:'Kotlin',
     icon: Kotlin},
    Swift: {name:'Swift',
     icon: Swift},
    PowerShell: {name:'PowerShell',
     icon: PowerShell},
    Groovy: {name:'Groovy',
     icon: Groovy},
    Elixir: {name:'Elixir',
     icon: Elixir},
    DM: {name:'DM',
     icon: Default},
    'Objective-C': {name:'Objective-C',
     icon: ObjectiveC},
    CoffeeScript: {name:'CoffeeScript',
     icon: CoffeeScript},
    Perl: {name:'Perl',
     icon: Perl},
    Lua: {name:'Lua',
     icon: Lua},
    'Emacs Lisp': {name:'Emacs Lisp',
     icon: EmacsLisp},
    OCaml: {name:'OCaml',
     icon: Ocaml},
    Haskell: {name:'Haskell',
     icon: Haskell},
    Clojure: {name:'Clojure',
     icon: Clojure},
    Erlang: {name:'Erlang',
     icon: Erlang},
    TSQL: {name:'TSQL',
     icon: Default},
    'Vim script': {name:'Vim script',
     icon: VimScript},
    R: {name:'R',
     icon: R},
    Julia: {name:'Julia',
     icon: Julia},
    Coq: {name:'Coq',
     icon: Coq},
    Roff: {name:'Roff',
     icon: Default},
    Jsonnet: {name:'Jsonnet',
     icon: Jsonnet},
    MATLAB: {name:'MATLAB',
     icon: Matlab},
    Puppet: {name:'Puppet',
     icon: Puppet},
    Fortran: {name:'Fortran',
     icon: Fortran},
    SystemVerilog: {name:'SystemVerilog',
     icon: SystemVerilog},
    'Visual Basic .NET': {name:'Visual Basic .NET',
     icon: Vba},
    'F#': {name:'F#',
     icon: Default},
    Elm: {name:'Elm',
     icon: require('./elm-brands.svg')},
    Smalltalk: {name:'Smalltalk',
     icon: Default},
    WebAssembly: {name:'WebAssembly',
     icon: WebAssembly},
    PureScript: {name:'PureScript',
     icon: PureScript},
    'Objective-C++': {name:'Objective-C++',
     icon: ObjectiveC},
    Vala: {name:'Vala',
     icon: require('./Vala-brands.svg')},
    'Common Lisp': {name:'Common Lisp',
     icon: CommonLisp},
    NASL: {name:'NASL',
     icon: Default},
}

export default languages