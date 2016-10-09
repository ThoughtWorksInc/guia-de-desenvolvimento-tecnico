'use strict';

var markdownLinkCheck = require('markdown-link-check');

var stream = process.stdin;
var markdown = '';

var statusLabels = {
  alive: "OK",
  dead: "ERROR"
};

var isAbsoluteUrl = function (result) {
  return result.link.indexOf('://') > -1;
};

var printResultsAndCountFailedUrls = function (results) {
  return results.filter(isAbsoluteUrl)
    .reduce(function (f, result) {
      console.log('[%s] %s', statusLabels[result.status], result.link);
      return (result.status === 'dead') ? f + 1 : f;
    }, 0);
};

var failTestIfBrokenLinks = function (finalNumberOfFailedUrls) {
  if (finalNumberOfFailedUrls > 0) {
    console.log('\nTEST FAILED');
    console.log('Number of broken urls: ' + finalNumberOfFailedUrls);
    process.exit(1);
  }
};

var checkMarkdown = function (markdown) {
  markdownLinkCheck(markdown, function (err, results) {
    var totalFailedUrls = printResultsAndCountFailedUrls(results);

    failTestIfBrokenLinks(totalFailedUrls);
  });
};

stream.on('data', function (chunk) {
  markdown += chunk.toString();
}).on('end', function () {
  checkMarkdown(markdown);
});
