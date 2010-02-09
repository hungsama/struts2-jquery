<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>
<div id="col1">
  <div id="col1_content" class="clearfix">
    <ul>
      <li><s:url id="urlautocompleter" action="autocompleter"/><sj:a id="autocompleterlink" href="%{urlautocompleter}" targets="main">Autocompleter</sj:a></li>
    </ul>
  </div>
</div>
<div id="col3">
  <div id="col3_content" class="clearfix">
    <h2>Autocompleter</h2>
    <p>
        A simple Autocompleter that handle a String Array from Action.
    </p>
    <sj:autocompleter id="languages" list="%{languages}"/>
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
