# <can-ajax>

`<can-ajax>` is a [can.Component](http://canjs.com/docs/can.Component.html) for performing XHR requests. You might be thinking that XHR is not something that belongs in markup, and you may be right, but `<can-ajax>` is an experiment in using the power of can.Component's scoping to allow a greater degree of dynamism within your templates. For example, with `<can-ajax>` it is trivial to decouple components from the data they use *and* conditionally display loading indicators:

```html
<can-ajax url="/todos">
  {{#if loading}}
    <img src="loading.gif"/>
  {{else}}
  <todo-list todos="data"></todo-list>
  {{/if}}
</can-ajax>
```

## Installation

The easiest way to install `<can-ajax>` is with [Bower](http://bower.io/):

```shell
bower install can-ajax
```

## Attributes

The following attributes can be used to control `<can-ajax>`:

### url

The string url to load, for example `/todos`.

### method

**Optional** [http method](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) to use for the request. Defaults to `GET` if none is selected.

### query

**Optional** query string to include with the request (you can also just provide the query string as part of the [#url](url).

## License

[MIT](http://opensource.org/licenses/MIT)
