<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sjm" uri="/struts-jquery-mobile-tags"%>
		<sjm:div role="page" id="start">
			<sjm:div role="header">
				<h1>Struts2 jQuery Mobile Plugin Showcase</h1>
			</sjm:div>
			
			<sjm:div role="content">
				<p>All Examples Links here.</p>
				<h2>AJAX</h2>
				<sjm:div>
					<ul>
						<s:url id="url_checkboxlist" action="checkboxlist"/>
						<li><sjm:a id="checkboxlist_link" href="%{url_checkboxlist}">AJAX Form Examples</sjm:a></li>
					</ul>	
				</sjm:div>
				<h2>Form Elements</h2>
				<sjm:div>
					<ul>
						<s:url id="url_textfield" action="textfield"/>
						<li><sjm:a id="textfield_link" href="%{url_textfield}">Textfield</sjm:a></li>
						<s:url id="url_textarea" action="textarea"/>
						<li><sjm:a id="textarea_link" href="%{url_textarea}">Textarea</sjm:a></li>
						<s:url id="url_password" action="password"/>
						<li><sjm:a id="password_link" href="%{url_password}">Password</sjm:a></li>
						<s:url id="url_searchfield" action="searchfield"/>
						<li><sjm:a id="searchfield_link" href="%{url_searchfield}">Searchfield</sjm:a></li>
						<s:url id="url_checkbox" action="checkbox"/>
						<li><sjm:a id="checkbox_link" href="%{url_checkbox}">Checkbox</sjm:a></li>
						<s:url id="url_checkboxlist" action="checkboxlist"/>
						<li><sjm:a id="checkboxlist_link" href="%{url_checkboxlist}">Checkbox List</sjm:a></li>
						<s:url id="url_radio" action="radio"/>
						<li><sjm:a id="radio_link" href="%{url_radio}">Radio Buttons</sjm:a></li>
					</ul>	
				</sjm:div>
			</sjm:div>
			
			<jsp:include page="inc.footer.jsp" />
		</sjm:div>
