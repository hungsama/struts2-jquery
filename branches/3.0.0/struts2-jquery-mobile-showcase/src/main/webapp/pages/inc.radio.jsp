<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sjm" uri="/struts-jquery-mobile-tags"%>
		<sjm:div role="page" id="radio">
			<sjm:div role="header">
				<sjm:a button="true" buttonIcon="arrow-l" data-rel="back">Back</sjm:a>
				<h1>Examples for Radio Tag</h1>
				<sjm:a href="#start" button="true" buttonIcon="home">Back to Start</sjm:a>
			</sjm:div>

			<sjm:div role="content">
			<form>
				<sjm:radio
		    		id="radio1"
		    		name="radio1"
		            label="Friends"
		            list="{'Patrick', 'Jason', 'Jay', 'Toby', 'Rene'}"
		        />
			</form>	
			<form>
				<sjm:radio
		    		id="radio2"
		    		name="radio2"
		            label="Friends"
		            required="true"
		            horizontal="true"
		            list="{'Patrick', 'Jason', 'Jay', 'Toby', 'Rene'}"
		        />
			</form>	
			</sjm:div>

			<jsp:include page="inc.footer.jsp" />
		</sjm:div>
