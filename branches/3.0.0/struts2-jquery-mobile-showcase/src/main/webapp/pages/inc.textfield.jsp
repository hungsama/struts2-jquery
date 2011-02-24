<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sjm" uri="/struts-jquery-mobile-tags"%>
		<sjm:div role="page" id="textfield">
			<sjm:div role="header">
				<sjm:a button="true" buttonIcon="arrow-l" data-rel="back">Back</sjm:a>
				<h1>Examples for Textfield Tag</h1>
				<sjm:a href="#start" button="true" buttonIcon="home">Back to Start</sjm:a>
			</sjm:div>

			<sjm:div role="content">
				<form>
					<sjm:textfield
						id="textfield"
			    		name="textfield"
			            label="Enter Your Name"
			        />
				</form>	
			</sjm:div>

			<jsp:include page="inc.footer.jsp" />
		</sjm:div>
