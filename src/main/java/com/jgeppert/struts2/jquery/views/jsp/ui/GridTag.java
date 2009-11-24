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

package com.jgeppert.struts2.jquery.views.jsp.ui;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.components.Component;

import com.jgeppert.struts2.jquery.components.Anchor;
import com.jgeppert.struts2.jquery.components.Grid;
import com.opensymphony.xwork2.util.ValueStack;

/**
 * @see Anchor
 */
public class GridTag extends AbstractRemoteTag {

  private static final long serialVersionUID = 2134613468009192567L;
  
  protected String                      width;
  protected String                      height;
  protected String                      pager;
  protected String                      rowNum;
  protected String                      sortname;
  protected String                      viewrecords;
  protected String                      sortorder;
  protected String                      loadonce;
  protected String                      multiselect;
  protected String                      editurl;
  protected String                      caption;
  protected String                      shrinkToFit;
  protected String                      gridModel;

  public Component getBean(ValueStack stack, HttpServletRequest req, HttpServletResponse res)
  {
    return new Grid(stack, req, res);
  }

  protected void populateParams()
  {
    super.populateParams();

    Grid grid = (Grid) component;
    grid.setWidth(width);
    grid.setHeight(height);
    grid.setPager(pager);
    grid.setRowNum(rowNum);
    grid.setSortname(sortname);
    grid.setViewrecords(viewrecords);
    grid.setSortorder(sortorder);
    grid.setLoadonce(loadonce);
    grid.setMultiselect(multiselect);
    grid.setEditurl(editurl);
    grid.setCaption(caption);
    grid.setGridModel(gridModel);
    grid.setShrinkToFit(shrinkToFit);
  }

  public void setWidth(String width)
  {
    this.width = width;
  }

  public void setHeight(String height)
  {
    this.height = height;
  }

  public void setPager(String pager)
  {
    this.pager = pager;
  }

  public void setRowNum(String rowNum)
  {
    this.rowNum = rowNum;
  }

  public void setSortname(String sortname)
  {
    this.sortname = sortname;
  }

  public void setViewrecords(String viewrecords)
  {
    this.viewrecords = viewrecords;
  }

  public void setSortorder(String sortorder)
  {
    this.sortorder = sortorder;
  }

  public void setLoadonce(String loadonce)
  {
    this.loadonce = loadonce;
  }

  public void setMultiselect(String multiselect)
  {
    this.multiselect = multiselect;
  }

  public void setEditurl(String editurl)
  {
    this.editurl = editurl;
  }

  public void setCaption(String caption)
  {
    this.caption = caption;
  }

  public void setShrinkToFit(String shrinkToFit) 
  {
	this.shrinkToFit = shrinkToFit;
  }

  public void setGridModel(String gridModel) 
  {
	this.gridModel = gridModel;
  }

}
