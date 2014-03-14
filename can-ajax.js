(function (root, factory) {
  if (typeof steal === 'function') {
    steal('can', factory);
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['can'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('can'));
  } else {
    // Browser globals (root is window)
    root.CanAjax = factory(root.can);
  }
}(this, function (can) {
  var ajax = can.ajax;

  var map = function(arr, fn) {
    var items = [];
    can.each(arr, function(val) {
      items.push(fn(val));
    });
    return items;
  };

  var filter = function(arr, fn) {
    var items = [];
    can.each(arr, function(val) {
      if(fn(val)) items.push(val);
    });
    return items;
  };

  return can.Component.extend({
    tag: 'can-ajax',
    template: '<content/>',
    scope: {
      /**
       * @property url
       * The url to request
       */
      url: '@',

      /**
       * @property method
       * The HTTP method to use
       */
      method: '@',

      /**
       * @property data
       * The data returned by the xhr request
       */
      data: null
    },
    events: {
      init: function(el) {
        var scope = this.scope;
        var query = this.query();

        ajax({
          url: el.attr('url'),
          type: el.attr('method') || 'GET',
          data: query
        }).then(function(data) {
          scope.attr('data', data);
        });
      },
      query: function() {
        // Get all attributes
        var attrs = this.element.get(0).attributes;

        // Find the attributes that are named like `query-foo`
        var params = filter(attrs, function(a) {
          return (a.name || '').indexOf('query') === 0;
        });

        // Map out the query string by combining the attribute name and value
        return map(params, function(a) {
          // query-foo: We only want foo
          var name = a.name.substr(6);
          return name + '=' + a.value;
        }).join('&');
      }
    }
  });

}));
