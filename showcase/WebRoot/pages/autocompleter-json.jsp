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
    <h2>Autocompleter with JSON Result</h2>
    <p>
        A Autocompleter that handle a JSON Result.
    </p>
	<s:url id="remoteurl" action="jsonlanguages"/> 
    <sj:autocompleter 
    	id="languages" 
    	href="%{remoteurl}" 
    	delay="50" 
    	loadMinimumCount="2"
    />
  </div>
  
  <div class="code ui-widget-content ui-corner-all">
    <strong>Code in JSP:</strong>
    <pre>
	&lt;s:url id=&quot;remoteurl&quot; action=&quot;jsonlanguages&quot;/&gt; 
    &lt;sj:autocompleter 
    	id=&quot;languages&quot; 
    	href=&quot;%{remoteurl}&quot; 
    	delay=&quot;50&quot; 
    	loadMinimumCount=&quot;2&quot;
    /&gt;
    </pre>
  </div>
  <!-- IE Column Clearing -->
  <div id="ie_clearing"> &#160; </div>
</div>
