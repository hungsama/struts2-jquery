<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sjm" uri="/struts-jquery-mobile-tags"%>
		<sjm:div role="page" id="start">
			<sjm:div role="header">
				<h1>Struts2 jQuery Mobile Plugin Showcase</h1>
			</sjm:div>
			
			<sjm:div role="content">
				<p>All Examples Links here.</p>
				<sjm:list inset="true" filter="true">
					<sjm:listItem divider="true">AJAX</sjm:listItem>
					<s:url id="url_checkboxlist" action="checkboxlist"/>
					<sjm:listItem id="checkboxlist_link" href="%{url_checkboxlist}">AJAX Form Examples</sjm:listItem>
					<sjm:listItem divider="true">Form Elements</sjm:listItem>
					<s:url id="url_textfield" action="textfield"/>
					<sjm:listItem id="textfield_link" href="%{url_textfield}">Textfield</sjm:listItem>
					<s:url id="url_textarea" action="textarea"/>
					<sjm:listItem id="textarea_link" href="%{url_textarea}">Textarea</sjm:listItem>
					<s:url id="url_password" action="password"/>
					<sjm:listItem id="password_link" href="%{url_password}">Password</sjm:listItem>
					<s:url id="url_searchfield" action="searchfield"/>
					<sjm:listItem id="searchfield_link" href="%{url_searchfield}">Searchfield</sjm:listItem>
					<s:url id="url_checkbox" action="checkbox"/>
					<sjm:listItem id="checkbox_link" href="%{url_checkbox}">Checkbox</sjm:listItem>
					<s:url id="url_checkboxlist" action="checkboxlist"/>
					<sjm:listItem id="checkboxlist_link" href="%{url_checkboxlist}">Checkbox List</sjm:listItem>
					<s:url id="url_radio" action="radio"/>
					<sjm:listItem id="radio_link" href="%{url_radio}">Radio Buttons</sjm:listItem>
				</sjm:list>
			</sjm:div>
			
			<jsp:include page="inc.footer.jsp" />
		</sjm:div>
