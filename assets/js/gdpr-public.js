!function(e){"use strict";var r=location.search,t=location.protocol+"//"+location.host+location.pathname;-1!==r.indexOf("notify=1")&&window.history.replaceState({},document.title,t),e(function(){var r=JSON.parse(d("gdpr_approved_cookies"));function t(e,r,t){if(t){var d=new Date;d.setTime(d.getTime()+24*t*60*60*1e3);var n="; expires="+d.toGMTString()}else n="";document.cookie=e+"="+r+n+"; path=/"}function d(e){for(var r=e+"=",t=document.cookie.split(";"),d=0;d<t.length;d++){for(var n=t[d];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(r))return n.substring(r.length,n.length)}return null}var n=[];function p(p){setInterval(function(){n[p]?d(p)!=n[p]&&(n[p]=d(p),function(d){e.inArray(d,r.site_cookies)||t(d,"",-1)}(p)):n[p]=d(p)},100)}function a(){var r=[];e('input[type="checkbox"]:checked',".gdpr-privacy-preferences-frm").each(function(){var t=JSON.parse(e(this).val());if(e.isArray(t))t.forEach(function(e){r.push(e)});else{var d=Object.keys(t);r.hasOwnProperty(d)?r[d[0]].push(t[d[0]]):r[d[0]]=[t[d[0]]]}}),t("gdpr_approved_cookies",JSON.stringify(r)),e(".gdpr.gdpr-privacy-preferences .gdpr-wrapper, .gdpr-overlay, .gdpr.gdpr-privacy-bar").fadeOut()}["__utma","_gid"].forEach(function(e){p(e)}),e(document).on("click",".gdpr-preferences",function(){e(this).data("type");e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-privacy-preferences .gdpr-wrapper").fadeIn()}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-close",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-privacy-preferences .gdpr-wrapper").fadeOut()}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-tabs button",function(){var r="."+e(this).data("target");e(".gdpr.gdpr-privacy-preferences .gdpr-tab-content > div").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tab-content "+r).addClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").hasClass("gdpr-mobile-expanded")&&(e(".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").toggle()),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs button").removeClass("gdpr-active"),e(".gdpr-subtabs li button").removeClass("gdpr-active"),e(this).hasClass("gdpr-tab-button")?(e(this).addClass("gdpr-active"),e(this).hasClass("gdpr-cookie-settings")&&e(".gdpr-subtabs").find("li button").first().addClass("gdpr-active")):(e(".gdpr-cookie-settings").addClass("gdpr-active"),e(this).addClass("gdpr-active"))}),e(document).on("click",".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button",function(r){e(this).toggleClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").toggle().addClass("gdpr-mobile-expanded")}),e(window).resize(function(){e(window).width()>640&&e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").hasClass("gdpr-mobile-expanded")&&(e(".gdpr.gdpr-privacy-preferences .gdpr-mobile-menu button").removeClass("gdpr-active"),e(".gdpr.gdpr-privacy-preferences .gdpr-tabs").removeClass("gdpr-mobile-expanded").removeAttr("style"))}),e(document).on("submit",".gdpr-privacy-preferences-frm",function(e){e.preventDefault(),a()}),e(document).on("click",".gdpr.gdpr-privacy-bar .gdpr-agreement",function(){a()}),e("form.gdpr-add-to-deletion-requests").on("submit",function(r){e(this).hasClass("confirmed")||(r.preventDefault(),e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-delete-confirmation .gdpr-wrapper").css({display:"flex"}).hide().fadeIn())}),e(document).on("click",".gdpr.gdpr-delete-confirmation .gdpr-close",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-delete-confirmation .gdpr-wrapper").fadeOut()}),e(document).on("click",".gdpr.gdpr-delete-confirmation button.gdpr-delete-account",function(){e("form.gdpr-add-to-deletion-requests").addClass("confirmed"),e("form.gdpr-add-to-deletion-requests.confirmed").submit(),e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-delete-confirmation .gdpr-wrapper").fadeOut()}),e(".gdpr-general-confirmation").length>0&&(e(".gdpr-overlay").fadeIn(),e(".gdpr.gdpr-general-confirmation .gdpr-wrapper").css({display:"flex"}).hide().fadeIn(),e(document).on("click",".gdpr.gdpr-general-confirmation button.gdpr-accept-confirmation",function(){e(".gdpr-overlay").fadeOut(),e(".gdpr.gdpr-general-confirmation .gdpr-wrapper").fadeOut()})),e(".gdpr-consent-modal").length>0&&e("body").css("overflow","hidden"),e(document).on("click",".gdpr-agree",function(r){r.preventDefault();var t=e(this);e.post(GDPR.ajaxurl,{action:"agree_with_terms",nonce:e(this).data("nonce")},function(r){r.success&&t.closest(".gdpr-consent-modal").fadeOut(300,function(){e(this).remove(),0==e(".gdpr-consent-modal").length&&e("body").css("overflow","auto")})})}),e(document).on("click",".gdpr-disagree",function(r){r.preventDefault(),e.post(GDPR.ajaxurl,{action:"disagree_with_terms",nonce:e(this).data("nonce")},function(e){e.success&&location.reload()})})})}(jQuery);