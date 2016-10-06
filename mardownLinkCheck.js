'use strict';

var markdownLinkCheck = require('markdown-link-check');

var totalFailedUrls = 0;
var stream = process.stdin;
var markdown = '';

var statusLabels = {
	alive: "OK",
	dead: "ERROR"
};

var isFailedRelativeUrl = function (result) {
	return result.status === 'dead' && !result.link.includes('://');
};

var isNotRelativeUrl = function (result) {
	return result.link.includes('://');
};

var printResultsAndCountFailedUrls = function (results) {
	return results.filter(isNotRelativeUrl)
		.reduce(function (f, result) {
			console.log('[%s] %s', statusLabels[result.status], result.link);
			return (result.status === 'dead') ? f + 1 : f;
		}, 0);
};

var tryAgainWithRelativeUrls = function (results) {
	results.filter(isFailedRelativeUrl)
		.forEach(function (result) {
			var completeMarkdownUrl = '[relative url](http://localhost:4000' + result.link + ')';
			checkMarkdown(completeMarkdownUrl, failTestIfBrokenLinks);
		});
};

var checkMarkdown = function (markdown, callback) {
	markdownLinkCheck(markdown, function (err, results) {
		totalFailedUrls += printResultsAndCountFailedUrls(results);
		tryAgainWithRelativeUrls(results);

		if(callback) callback(totalFailedUrls);
	});
};

var failTestIfBrokenLinks = function (finalNumberOfFailedUrls) {
	if (finalNumberOfFailedUrls > 0) {
		console.log('\nTEST FAILED');
		console.log('Number of broken urls: ' + finalNumberOfFailedUrls);
		process.exit(1);
	}
};

stream.on('data', function (chunk) {
	markdown += chunk.toString();
}).on('end', function () {
	checkMarkdown(markdown);
});
