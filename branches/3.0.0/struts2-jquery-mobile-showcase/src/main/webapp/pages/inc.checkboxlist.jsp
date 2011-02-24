<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sjm" uri="/struts-jquery-mobile-tags"%>
		<sjm:div role="page" id="checkboxlist">
			<sjm:div role="header">
				<sjm:a button="true" buttonIcon="arrow-l" data-rel="back">Back</sjm:a>
				<h1>Examples for Checkbox List Tag</h1>
				<sjm:a href="#start" button="true" buttonIcon="home">Back to Start</sjm:a>
			</sjm:div>

			<sjm:div role="content">
			<form>
				<sjm:checkboxlist
		    		id="checkboxlist1"
		    		name="checkboxlist1"
		            label="Friends"
		            list="{'Patrick', 'Jason', 'Jay', 'Toby', 'Rene'}"
		        />
			</form>	
			<form>
				<sjm:checkboxlist
		    		id="checkboxlist2"
		    		name="checkboxlist2"
		            label="Friends"
		            required="true"
		            horizontal="true"
		            list="{'Patrick', 'Jason', 'Jay', 'Toby', 'Rene'}"
		        />
			</form>	
			</sjm:div>

			<jsp:include page="inc.footer.jsp" />
		</sjm:div>
