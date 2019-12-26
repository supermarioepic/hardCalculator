'use strict';

(function($){
	$(document).ready(function() {
		// Code

		$("#plus").click("click", function() {
			output("+");
		});

		$("#minus").click("click", function() {
			output("-");
		});

		$("#multiply").click("click", function() {
			output("*");
		});

		$("#divide").click("click", function() {
			output("/");
		});

		$("#sev").click("click", function() {
			output("7");
		});

		$("#eig").click("click", function() {
			output("8");
		});

		$("#nin").click("click", function() {
			output("9");
		});

		$("#lscob").click("click", function() {
			output("(");
		});

		$("#for").click("click", function() {
			output("4");
		});

		$("#fiv").click("click", function() {
			output("5");
		});

		$("#six").click("click", function() {
			output("6");
		});

		$("#rscob").click("click", function() {
			output(")");
		});

		$("#one").click("click", function() {
			output("1");
		});

		$("#two").click("click", function() {
			output("2");
		});

		$("#thr").click("click", function() {
			output("3");
		});

		$("#zer").click("click", function() {
			output("0");
		});

		$("#pin").click("click", function() {
			output(".");
		});

		$(".clean-all").click("click", function() {
			cleanAll();
		});

		$(".clean-one").click("click", function() {
			cleanOne();
		});

		$(".eaqual").click("click", function() {
			eaqual();
		});

		function output(num) {
			$(".input").val($(".input").val() + num);
		}

		function cleanAll() {
			$(".input").val("");
		}

		function cleanOne() {
			let str = $(".input").val();
			$(".input").val(str.substr(0, str.length-1));
		}

		function eaqual() {
			let str = $(".input").val();
			if(str) {
				$(".input").val(eval(str));
			}
		}
	});
})(jQuery);
