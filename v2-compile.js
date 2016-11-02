(function() {
  "use strict";

  angular.module("v2.compile", [])
    .directive("v2Compile", v2Compile);

  function v2Compile($compile, $window) {
    var v2CompileDirective = {
      restrict: "A",
      replace: false,
      terminal: true,
      priority: 1000,
      link: v2CompileLink
    };

    function v2CompileLink(scope, element, attrs) {
      var listToCompile = scope.$eval(attrs.v2Compile);

      angular.forEach(listToCompile, function(directive) {
        for (var key in directive) {
          console.log(key)
        }
      });

      element.attr("uib-tooltip", "Hello World!");
      element.attr("tooltip-placement", "bottom");
      element.removeAttr("v2-compile");
      element.removeAttr("data-v2-compile");

      $compile(element)(scope);
    }

    return v2CompileDirective;
  }
  v2Compile.$inject = ["$compile", "$window"]
})();