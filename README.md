# Quokka Package Loader #

When you absolutely must load that file into Quokka...

## Disclaimer ##

Quokka is software which requires a paid license for certain features.  If you use Quokka on the regular and like the product, you might be well advised to pay for a license.

This package is for educational purposes only.

## Installation ##

Install the package like so:

`npm install quokka-package-loader --save-dev`

Add the package name to your Quokka configuration:

```javascript
{
    "plugins": [
        "quokka-package-loader"
    ]
}
```

Or add it to your package file:

```json
"quokka": {
    "plugins": [
        "quokka-package-loader"
    ]
}
```

That's it.

## Using Quokka Package Loader ##

Quokka package loader will allow you to hot-load files into a JS file being run with Quokka.  Do the following and you'll be all set:

```javascript
// This is the important bit
const loader = loaderFactory(__dirname);


// Now you can side-load modules into your file
const myLocalModule = loader.load('./path/to/module');

myLocalModule.doStuff();
```

