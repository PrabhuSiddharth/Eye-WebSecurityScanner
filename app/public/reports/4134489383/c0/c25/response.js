var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Wed, 20 Nov 2013 19:56:51 GMT\x0aServer: Apache\x0aLast-Modified: Wed, 20 Jun 2012 23:13:57 GMT\x0aAccept-Ranges: bytes\x0aContent-Length: 3369\x0aContent-Range: bytes 0-3368/3369\x0aKeep-Alive: timeout=2, max=96\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0d\x0a * jQuery Scrollspy Plugin\x0d\x0a * Author: @sxalexander\x0d\x0a * Licensed under the MIT license\x0d\x0a */\x0d\x0a\x0d\x0a\x0d\x0a;(function ( $, window, document, undefined ) {\x0d\x0a\x0d\x0a    $.fn.extend({\x0d\x0a      scrollspy: function ( options ) {\x0d\x0a        \x0d\x0a          var defaults = {\x0d\x0a            min: 0,\x0d\x0a            max: 0,\x0d\x0a            mode: \x27vertical\x27,\x0d\x0a            buffer: 0,\x0d\x0a            container: window,\x0d\x0a            onEnter: options.onEnter ? options.onEnter : [],\x0d\x0a            onLeave: options.onLeave ? options.onLeave : [],\x0d\x0a            onTick: options.onTick ? options.onTick : []\x0d\x0a          }\x0d\x0a          \x0d\x0a          var options = $.extend( {}, defaults, options );\x0d\x0a\x0d\x0a          return this.each(function (i) {\x0d\x0a\x0d\x0a              var element = this;\x0d\x0a              var o = options;\x0d\x0a              var $container = $(o.container);\x0d\x0a              var mode = o.mode;\x0d\x0a              var buffer = o.buffer;\x0d\x0a              var enters = leaves = 0;\x0d\x0a              var inside = false;\x0d\x0a                            \x0d\x0a              /* add listener to container */\x0d\x0a              $container.bind(\x27scroll\x27, function(e){\x0d\x0a                  var position = {top: $(this).scrollTop(), left: $(this).scrollLeft()};\x0d\x0a                  var xy = (mode == \x27vertical\x27) ? position.top + buffer : position.left + buffer;\x0d\x0a                  var max = o.max;\x0d\x0a                  var min = o.min;\x0d\x0a                  \x0d\x0a                  /* fix max */\x0d\x0a                  if($.isFunction(o.max)){\x0d\x0a                    max = o.max();\x0d\x0a                  }\x0d\x0a\x0d\x0a                  /* fix max */\x0d\x0a                  if($.isFunction(o.min)){\x0d\x0a                    min = o.min();\x0d\x0a                  }\x0d\x0a\x0d\x0a                  if(max == 0){\x0d\x0a                      max = (mode == \x27vertical\x27) ? $container.height() : $container.outerWidth() + $(element).outerWidth();\x0d\x0a                  }\x0d\x0a                  \x0d\x0a                  /* if we have reached the minimum bound but are below the max ... */\x0d\x0a                  if(xy \x3e= o.min && xy \x3c= max){\x0d\x0a                    /* trigger enter event */\x0d\x0a                    if(!inside){\x0d\x0a                       inside = true;\x0d\x0a                       enters++;\x0d\x0a                       \x0d\x0a                       /* fire enter event */\x0d\x0a                       $(element).trigger(\x27scrollEnter\x27, {position: position})\x0d\x0a                       if($.isFunction(o.onEnter)){\x0d\x0a                         o.onEnter(element, position);\x0d\x0a                       }\x0d\x0a                      \x0d\x0a                     }\x0d\x0a                     \x0d\x0a                     /* triger tick event */\x0d\x0a                     $(element).trigger(\x27scrollTick\x27, {position: position, inside: inside, enters: enters, leaves: leaves})\x0d\x0a                     if($.isFunction(o.onTick)){\x0d\x0a                       o.onTick(element, position, inside, enters, leaves);\x0d\x0a                     }\x0d\x0a                  }else{\x0d\x0a                    \x0d\x0a                    if(inside){\x0d\x0a                      inside = false;\x0d\x0a                      leaves++;\x0d\x0a                      /* trigger leave event */\x0d\x0a                      $(element).trigger(\x27scrollLeave\x27, {position: position, leaves:leaves})\x0d\x0a\x0d\x0a                      if($.isFunction(o.onLeave)){\x0d\x0a                        o.onLeave(element, position);\x0d\x0a                      }\x0d\x0a                    }\x0d\x0a                  }\x0d\x0a              }); \x0d\x0a\x0d\x0a          });\x0d\x0a      }\x0d\x0a\x0d\x0a    })\x0d\x0a\x0d\x0a    \x0d\x0a})( jQuery, window );'}