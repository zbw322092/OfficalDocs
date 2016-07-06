angular.module('sceExample', ['ngSanitize'])
	.controller('SceController', ['$http', '$templateCache', '$sce', 
		function($http, $templateCache, $sce) {
			var self = this;
			$http.get("test_data.json", {cache: $templateCache}).success(function(userComments) {
				console.log(userComments);
				self.userComments = userComments;
			});

			self.explicitlyTrustedHtml = $sce.trustAsHtml(
				'<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
        'sanitization.&quot;">Hover over this text.</span>'
			);

			// 只有将json文件中的html片段设置成可信的，才会显示html上面的onmouseover效果，如果没有设置成
			// 可信，直接引入文件，显示原本的文本是没有问题的，但是onmouseover将不会被显示
			// 这里定义一个function，可以在HTML文件中使用它来将不可信的html过滤成可信的。
			this.trustAsHtml = function(html) {
				return $sce.trustAsHtml(html);
			}
		}]);