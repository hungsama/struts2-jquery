<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sjm" uri="/struts-jquery-mobile-tags"%>
		<sjm:div role="page" id="checkbox">
			<sjm:div role="header">
				<sjm:a button="true" buttonIcon="arrow-l" data-rel="back">Back</sjm:a>
				<h1>Examples for Checkbox Tag</h1>
				<sjm:a href="#start" button="true" buttonIcon="home">Back to Start</sjm:a>
			</sjm:div>

			<sjm:div role="content">
				<form>
					<sjm:checkbox
			    		id="checkbox"
			    		name="checkbox"
			            label="I Agree"
			        />
					<sjm:checkbox
			    		id="checkbox"
			    		name="checkbox"
			            label="I love it"
			            required="true"
			        />
				</form>	
			</sjm:div>

			<jsp:include page="inc.footer.jsp" />
		</sjm:div>
