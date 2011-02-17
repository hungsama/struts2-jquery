<?xml version="1.0" encoding="utf-8"?>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sjm" uri="/struts-jquery-mobile-tags"%>
<!DOCTYPE html>
<html>
	<head>
    	<title>Struts2 jQuery Mobile Plugin Showcase</title>
    	<sjm:head />
	</head>
	<body>
		<div data-role="page" id="start">
			<div data-role="header">
				<h1>Struts2 jQuery Mobile Plugin Showcase</h1>
			</div> 
			<div data-role="content">
				<p>All Examples Links here.</p>
				<p><a href="#page2">Page 2</a></p>	
			</div> 
			<div data-role="footer">
				<h4>Footer</h4>
			</div> 
		</div>
		<div data-role="page" id="page2">

			<div data-role="header">
				<a data-rel="back">Back</a>
				<h1>Page 2 for Examples</h1>
			</div>

			<div data-role="content">	
				<p><a href="#start">Back to Start</a></p>	
			</div>

			<div data-role="footer">
				<h4>Footer</h4>
			</div>
		</div>
	</body>
</html>
