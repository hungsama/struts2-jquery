/*!
 * jquery.tree.struts2.js
 *
 * Integration of trees with struts 2
 *
 * Requires use of jquery.struts2.js
 *
 * Copyright (c) 2010 Johannes Geppert http://www.jgeppert.com
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

/*global jQuery, window,  */
(function($) {

	/**
	 * Bind a Tree to Struts2 Component
	 */
	$.struts2_jquery_tree = {

		debugPrefix : '[struts2_jquery_tree] ',

		// Render a Tree
		tree : function($elem, o) {
			var self = this;
			if (!self.loadAtOnce) {
				self.require("js/base/jquery.cookie" + self.minSuffix + ".js");
			}
			self.require("js/jstree/jquery.hotkeys" + self.minSuffix + ".js");
			self.require("js/jstree/jquery.jstree" + self.minSuffix + ".js");
			if(o.treetheme) {
				self.requireCss("js/jstree/themes/"+o.treetheme+"/style.css");
				//o.themes = {};
				//o.themes.theme = o.treetheme;
			}
			else {
				o.plugins = [ "html_data", "ui", "themeroller" ]; 
				//self.requireCss("js/jstree/themes/default/style.css");
			}
			
			$elem.jstree(o);
		}
	};

	// Extend it from orginal plugin
	$.extend($.struts2_jquery_tree, $.struts2_jquery);

})(jQuery);