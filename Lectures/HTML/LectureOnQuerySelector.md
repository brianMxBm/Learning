# How Does JS Communicate with HTML

To get interactivity with HTML we may utilize JS either inline or from an external file utilzing the `<script>` tag.

There are a myriad of ways to target elements from our HTML from within our JS or CSS modules.

# Important Attributes

In HTML tags we may provide properties to the tags such as:

`id` which sets the value of the id attribute of an element.

```
html:

<div id="foo"/>

css:

#foo{
    background-color: black
}

js:

const divElement = document.getElementById()

```

`class` which is used to point to a class name in a style sheet or to use with JS. Typically this is meant moreso for styling.

```
html:

<div class="foo"/>

css:

.foo{
    background-color: red
}
```

In JavaScript we may utilize the `document.getElementsByClassName` function to obtain the element via the className.

```
html:

<div class="foo"/>

js:

const divElement = document.getElementsByClassName("foo")
```

`data` which is similar to class, any prefixed name can be used and then referenced with JS.

In JavaScript we may obtain elements with elements that have the prefix `data-`

```
html:

<div data-foo/>

js:

const divElement = document.querySelector("[data-cell]")
```

In essense we have various ways to maintain _state_ in our HTML.
