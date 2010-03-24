<#--
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
-->

<#if parameters.customBasepath?if_exists == "">
  <#assign basePath="struts/themes">
<#else>
  <#assign basePath="${parameters.customBasepath?string}">
</#if>
<#if parameters.compressed?default(true)>
  <#assign jqueryFile="jquery-1.4.2.min.js">
  <#assign jqueryUICoreFile="jquery.ui.core.min.js">
  <#assign jqueryRequireFile="jquery.require.min.js">
  <#assign jquerySubscribeFile="jquery.subscribe.1.2.min.js">
  <#assign jqueryHistoryFile="jquery.ba-bbq.min.js">
  <#assign jqueryStrutsFile="jquery.struts2.min.js">
  <#assign jqueryGoogle="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js">
  <#assign jqueryUiGoogle="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js">
<#else>
  <#assign jqueryFile="jquery-1.4.2.js">
  <#assign jqueryUICoreFile="jquery.ui.core.js">
  <#assign jqueryRequireFile="jquery.require.js">
  <#assign jquerySubscribeFile="jquery.subscribe.1.2.js">
  <#assign jqueryHistoryFile="jquery.ba-bbq.js">
  <#assign jqueryStrutsFile="jquery.struts2.js">
  <#assign jqueryGoogle="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js">
  <#assign jqueryUiGoogle="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.js">
</#if>

<#if parameters.loadFromGoogle?default(false)>
<script type="text/javascript" src="${jqueryGoogle}"></script>
<script type="text/javascript" src="${jqueryUiGoogle}"></script>
<#else>
  <script type="text/javascript" src="${base}/struts/js/base/${jqueryFile}"></script>
	<#if parameters.jqueryui?default(true)>
    <script type="text/javascript" src="${base}/struts/js/base/${jqueryUICoreFile}"></script>
	</#if>
</#if>

  <script type="text/javascript" src="${base}/struts/js/plugins/${jquerySubscribeFile}"></script>
<#if parameters.ajaxhistory?default(false)>
  <script type="text/javascript" src="${base}/struts/js/plugins/${jqueryHistoryFile}"></script>
</#if>
<#if parameters.jqueryui?default(false)>
    <#if parameters.jquerytheme?if_exists != "">
		<#if parameters.loadFromGoogle?default(false) && basePath == "struts/themes">
        	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/${parameters.jquerytheme?string}/jquery-ui.css" type="text/css"/>
		<#else>
        	<link rel="stylesheet" href="${base}/${basePath}/${parameters.jquerytheme?string}/jquery-ui.css" type="text/css"/>
		</#if>
    <#else>
        <link rel="stylesheet" href="${base}/${basePath}/smoothness/jquery-ui.css" type="text/css"/>
    </#if>
</#if>
  <script type="text/javascript" src="${base}/struts/js/struts2/${jqueryStrutsFile}"></script>
<script type="text/javascript">
$(document).ready(function () {
  	$.scriptPath = "${base}/struts/";
<#if !parameters.compressed?default(true)>
	$.struts2_jquery.minSuffix = "";
</#if>
<#if parameters.jqueryLocale?if_exists != "" && parameters.jqueryLocale?if_exists != "en">
  $.struts2_jquery.local = "${parameters.jqueryLocale?string}";
</#if>
<#if parameters.gridLocale??>
  $.struts2_jquery.gridLocal = "${parameters.gridLocale?default('en')}";
</#if>
<#if parameters.ajaxhistory?default(false)>
	$.struts2_jquery.ajaxhistory = true;
</#if>
	<#if parameters.defaultIndicator?if_exists != "">
	$.struts2_jquery.defaultIndicator="${parameters.defaultIndicator?string}";
	</#if>
	$.ajaxSettings.traditional = true;

	$.ajaxSetup ({
	<#if parameters.ajaxcache?default(false)>
		cache: true
	<#else>
		cache: false
	</#if>
	});
<#if parameters.ajaxhistory?default(false)>
	$(window).trigger('hashchange');
</#if>
});
</script>

  