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
<#if parameters.label?if_exists != "">
	<#include "/${parameters.templateDir}/xhtml/controlheader.ftl" />
</#if>
<#if parameters.form?exists && parameters.form.validate?default(false) == true>
	<#-- can't mutate the data model in freemarker -->
    <#if parameters.onblur?exists>
        ${tag.addParameter('onblur', "validate(this);${parameters.onblur}")}
    <#else>
        ${tag.addParameter('onblur', "validate(this);")}
    </#if>
</#if>
<input type="hidden"
  <#if parameters.widgetid?if_exists != "">
    id="${parameters.widgetid?html}"<#rt/>
  </#if>
    value="${parameters.value?default('0')}"<#rt/>
  <#if parameters.name?if_exists != "">
    name="${parameters.name?html}"<#rt/>
  </#if>
  <#if parameters.disabled?default(false)>
    disabled="disabled"<#rt/>
  </#if>
/>
<div
  <#if parameters.widgetid?if_exists != "">
    hiddenid="${parameters.widgetid?html}"<#rt/>
  </#if>
  <#if parameters.animate?default(false)>
    animate="true"<#rt/>
  </#if>
  <#if parameters.range?if_exists != "">
    range="${parameters.range?html}"<#rt/>
  </#if>
    value="${parameters.value?default('0')}"<#rt/>
  <#if parameters.max?if_exists != "">
    max="${parameters.max?html}"<#rt/>
  </#if>
  <#if parameters.min?if_exists != "">
    min="${parameters.min?html}"<#rt/>
  </#if>
  <#if parameters.orientation?if_exists != "">
    orientation="${parameters.orientation?html}"<#rt/>
  </#if>
  <#if parameters.step?if_exists != "">
    step="${parameters.step?html}"<#rt/>
  </#if>
  <#if parameters.displayValueElement?if_exists != "">
    displayvalueelement="${parameters.displayValueElement?html}"<#rt/>
  </#if>
<#include "/${parameters.templateDir}/jquery/base.ftl" />
<#include "/${parameters.templateDir}/jquery/interactive.ftl" />
<#include "/${parameters.templateDir}/jquery/topics.ftl" />
<#include "/${parameters.templateDir}/simple/scripting-events.ftl" />
<#include "/${parameters.templateDir}/simple/common-attributes.ftl" />
<#include "/${parameters.templateDir}/simple/dynamic-attributes.ftl" />
>
