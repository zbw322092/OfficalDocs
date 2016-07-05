angular.module('ngBindHtmlExample', ['ngSanitize'])
	.controller('NgBindHtmlCtrl', function($scope) {
		$scope.htmlSnippet = 
			'I am an <code class="code-color">HTML</code> string with ' +
			'<a href="#">links!</a> and other <em>stuff</em>';
	});

	// 如果不使用ngSanitize，则会报错:
	// Error: [$sce:unsafe] Attempting to use an unsafe value in a safe context.

	// 上面的HTML片段中是可以写入引用css样式的