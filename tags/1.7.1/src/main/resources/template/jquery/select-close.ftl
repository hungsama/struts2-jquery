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
<script type='text/javascript'>
$(document).ready(function () { 
	var options_${parameters.id?html} = {};
	options_${parameters.id?html}.datatype = "json";
	options_${parameters.id?html}.type = 'select';
<#if parameters.emptyOption?default(false)>
	options_${parameters.id?html}.emptyoption = true;
</#if>
<#if parameters.headerKey?? && parameters.headerValue??>
	options_${parameters.id?html}.headerkey = "${parameters.headerKey?html}";
	options_${parameters.id?html}.headervalue = "${parameters.headerValue?html}";
</#if>
<#if parameters.list??>
	options_${parameters.id?html}.list = "${parameters.list?html}";
</#if>
<#if parameters.listKey??>
	options_${parameters.id?html}.listkey = "${parameters.listKey?html}";
</#if>
<#if parameters.listValue??>
	options_${parameters.id?html}.listvalue = "${parameters.listValue?html}";
</#if>
<#if parameters.bindOn?if_exists != ""> 
	options_${parameters.id?html}.bindon = "${parameters.bindOn?html}";
</#if>
<#if parameters.events?if_exists != ""> 
	options_${parameters.id?html}.events = "${parameters.events?html}";
</#if>
  <#include "/${parameters.templateDir}/jquery/base.ftl" />
  <#include "/${parameters.templateDir}/jquery/interactive.ftl" />
  <#include "/${parameters.templateDir}/jquery/topics.ftl" />
  <#include "/${parameters.templateDir}/jquery/action.ftl" />
  <#include "/${parameters.templateDir}/jquery/draggable.ftl" />
  <#include "/${parameters.templateDir}/jquery/droppable.ftl" />
  <#include "/${parameters.templateDir}/jquery/resizable.ftl" />
  <#include "/${parameters.templateDir}/jquery/selectable.ftl" />
  <#include "/${parameters.templateDir}/jquery/sortable.ftl" />

  <#include "/${parameters.templateDir}/jquery/jquery-bind.ftl" />
 });  
</script>