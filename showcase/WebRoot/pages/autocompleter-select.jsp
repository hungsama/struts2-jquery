<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<div id="col1">
  <div id="col1_content" class="clearfix">
    <ul>
      <li><s:url id="urlautocompleter" action="autocompleter"/><sj:a id="autocompletersimple" href="%{urlautocompleter}" targets="main">Autocompleter</sj:a></li>
      <li><s:url id="urlautocompleterjson" action="autocompleter-json"/><sj:a id="autocompleterjson" href="%{urlautocompleterjson}" targets="main">Autocompleter JSON</sj:a></li>
      <li><s:url id="urlautocompleterselect" action="autocompleter-select"/><sj:a id="autocompleterselect" href="%{urlautocompleterselect}" targets="main">Autocompleter (Select Box)</sj:a></li>
    </ul>
  </div>
</div>
<div id="col3">
  <div id="col3_content" class="clearfix">
    <h2>Autocompleter</h2>
    <p>
        A Autocompleter that handle a List from Action as Select Box.
    </p>
    <strong>Result Div :</strong>
	<div id="formResult" class="result ui-widget-content ui-corner-all">Submit form bellow.</div>
    
    <s:form id="form" action="echo" theme="simple" cssClass="yform">
        <fieldset>
            <legend>Form with Autocompleter</legend>
	        <div class="type-select">
	            <label for="echo">Echo: </label>
    			<sj:autocompleter 
    				id="customers" 
    				name="echo" 
    				list="%{customers}" 
    				listValue="name" 
    				listKey="id" 
    				selectBox="true"
    			/>
	        </div>
	        <div>
	            <sj:submit 
	            	targets="formResult" 
	            	value="AJAX Submit" 
	            	indicator="indicator"
	            	button="true"
	            	/>
   				<img id="indicator" src="images/indicator.gif" alt="Loading..." style="display:none"/>    
	        </div>
        </fieldset>
    </s:form>
  </div>
  
  <div class="code ui-widget-content ui-corner-all">
    <strong>Code in JSP:</strong>
    <pre>
&lt;sj:autocompleter id=&quot;languages&quot; list=&quot;%{languages}&quot;/&gt;
    </pre>
  </div>
  <!-- IE Column Clearing -->
  <div id="ie_clearing"> &#160; </div>
</div>
