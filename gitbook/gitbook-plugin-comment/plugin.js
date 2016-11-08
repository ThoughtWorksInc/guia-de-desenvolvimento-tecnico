require(["gitbook","jQuery"],function(t,n){function e(t){var e=n("<img>",{"class":"comment-avatar",src:t.user.urls.avatar}),a=n("<div>",{"class":"comment-body "}),o=n("<a>",{"class":"comment-user",target:"_blank",href:t.user.urls.profile,text:t.user.name}),i=""
t.title&&(i+=t.title,t.body&&(i+="<br>")),t.body&&(i+=t.body)
var s=n("<div>",{"class":"comment-content",html:i})
a.append(o),a.append(s)
var c=n("<div>")
return c.append(e),c.append(a),c.html()}function a(t){var e=n("<div>",{"class":"thread-body"}),a=n("<div>",{"class":"thread-title",text:t.title}),o=n("<div>",{"class":"thread-user",text:"#"+t.number+" posted by "+t.user.name})
e.append(a),e.append(o)
var i=n("<div>")
return i.append(e),i.html()}function o(n,e){var a=t.state.$book.find(".page-wrapper"),o=a.find(".page-inner"),i=t.state.$book.find(".navigation.navigation-next")
if(a.toggleClass("comments-open",n),t.events.trigger("comment.toggled",[e,n]),a.hasClass("comments-open")){var s=330,c=o.width(),r=a.width(),p=0==i.length?0:i.width(),m=(r-c)/2-p,u=m-s
u=Math.max(u,-s),u=Math.min(u,0),o.css("left",u+"px")}else o.css("left","0px")}function i(n){return(t.state.bookRoot+"gitbook/api/"+n).replace(/([^:]\/)\/+/g,"$1")}function s(){location.href=i("login")}function c(t){var n=window.open(t,"_blank")
n.focus()}function r(t,e,a,o){n.ajax({method:t,dataType:"json",url:i(e),data:a,success:function(t,n,e){G=!0,E=!!e.getResponseHeader("X-GitBook-Auth"),o(t)},error:function(t,n){if(G){var e=(t.responseJSON?t.responseJSON.error:"")||t.responseText||n
alert("Error with inline comments: "+e),console.log(t,n)}}})}function p(){return t.state.innerLanguage?[t.state.innerLanguage,t.state.filepath].join("/"):t.state.filepath}function m(){r("GET","discussions",{filename:p(),state:"open"},function(t){N=t.list,$()})}function u(t){r("GET","discussions/"+t+"/comments",{limit:M},function(n){A[t]=n,P(t)})}function l(n,e,a,o){r("POST","discussions",{title:n,body:e,context:{filename:p(),chapterTitle:t.state.chapterTitle,section:a}},o)}function d(t){N=n.grep(N,function(n){return n.number!=t}),$(),r("POST","discussions/"+t,{state:"closed"},function(){m()})}function f(t,n,e){r("POST","discussions/"+t+"/comments",{body:n},function(n){A[t]=A[t]||[],A[t].total=A[t].total+1,A[t].list.push(n),P(t),u(t),e(n)})}function h(t){var e=t.split(" "),a=n.map(N,function(t){var a=(t.context.section||"").split(" "),o=n.grep(a,function(t){return-1!==n.inArray(t,e)}),i=n.grep(e,function(t){return-1!==n.inArray(t,a)}),s=(o.length/a.length+i.length/e.length)/2
return{matching:s,thread:t}})
return a=n.grep(a,function(t){return t.matching>.8}),n.map(a,function(t){return t.thread})}function v(t){return t.clone().find(".comments-area,.comments-icon").remove().end().text()}function g(t,e){var a,o,i,c=n("<div>",{"class":"comments-post"})
E?(a=n("<input>",{type:"text",placeholder:"Start a new discussion"}),o=n("<input>",{type:"text",placeholder:"Optional comment"}),i=k([{text:"Post",click:function(){l(a.val(),o.val(),v(e),function(n){N.push(n),$(),w(t,e,n)})}}]),o.hide(),a.keyup(function(t){a.val().length>3?o.show():o.val()||o.hide()}),c.append(a),c.append(o),c.append(i)):(i=k([{text:"Sign in to comment",click:s}]),c.append(i)),t.empty(),t.append(c),a&&a.focus()}function b(t){return n("<div>",{"class":"thread",html:a(t)})}function x(t,a){return n("<div>",{"class":"comment",html:e(t)})}function k(t){var e=n("<div>",{"class":"comments-toolbar"})
return n.each(t,function(t,a){var o=n("<a>",{href:"#",text:a.text,click:function(t){t.preventDefault(),a.click(n(this))}})
o.appendTo(e)}),e}function y(t,e){t.empty()
var a=n("<input>",{type:"text",placeholder:"Leave a comment"}),o=k([{text:"Post",click:function(){f(e.number,a.val(),function(){a.val("")})}}])
t.append(a),t.append(o),a.focus()}function w(t,e,a,o){u(a.number)
var i=[]
E?(a.permissions.comment&&i.push({text:"Comment",click:function(){y(c,a)}}),a.permissions.close&&i.push({text:"Close",click:function(t){S(e,o,t),d(a.number)}}),i.push({text:"New Thread",click:function(){g(t,e)}})):i=[{text:"Sign in to comment",click:s}]
var c=n("<div>",{"class":"comments-post"})
c.append(k(i))
var r=n("<div>",{"class":"comments-list","data-thcomments":a.number})
t.empty(),t.append(x(a)),t.append(r),t.append(c),P(a.number)}function T(t,e,a){var o=n("<div>",{"class":"comments-threads"})
n.each(a,function(n,a){var i=b(a)
i.click(function(n){w(t,e,a)}),o.append(i)})
var i
i=k(E?[{text:"New Thread",click:function(){g(t,e)}}]:[{text:"Sign in to create a thread",click:s}]),t.empty(),t.append(o),t.append(i)}function C(){t.state.$book.find(".page-wrapper .comments-section").removeClass("has-comments-open")}function S(t,e,a){var i=!t.hasClass("has-comments-open")
if(C(),t.toggleClass("has-comments-open",i),o(i,a),i){t.find(".comments-area").remove()
var s=n("<div>",{"class":"comments-area"})
t.append(s),e.length>1?T(s,t,e):1==e.length?w(s,t,e[0],e):g(s,t)}}function O(t){var e=v(t)
if(!(e.length<5)){var a=h(e),o=0
n.each(a,function(t,n){o+=n.comments+1})
var i=n("<div>",{"class":"marker",text:o?o:"+"})
i.on("click",function(){S(t,a,n(this))})
var s=n("<div>",{"class":"comments-icon"})
s.append(i),t.find(".comments-icon").remove(),t.addClass("comments-section"),t.toggleClass("has-comments",o>0),j.highlightCommented&&t.toggleClass("has-highlight-comments",o>0),t.append(s)}}function $(){var e=t.state.$book.find(".page-wrapper"),a=e.find(L)
a.each(function(){O(n(this))})}function P(e){var a=n.grep(N,function(t){return t.number==e}),o=a[0]
if(A[e]&&o){var i=t.state.$book.find('.page-wrapper div[data-thcomments="'+e+'"]')
if(0!=i.length){i.empty()
var s=Math.max(0,A[e].total-M)
s>0&&i.append(k([{text:"View "+s+" more comments",click:function(){c(o.urls.details)}}]))
var r=(A[e].list||[]).reverse()
n.each(r,function(t,n){i.append(x(n))})}}}var j={},N=[],A={},E=!1,G=!1,L="p",M=4
t.events.bind("start",function(t,n){j=n.comment||{}}),t.events.bind("page.change",function(){N=[],m()})})
