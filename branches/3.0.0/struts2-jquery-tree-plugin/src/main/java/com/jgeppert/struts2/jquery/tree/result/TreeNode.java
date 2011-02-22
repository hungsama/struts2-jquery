package com.jgeppert.struts2.jquery.tree.result;

import java.util.HashMap;
import java.util.Map;

public class TreeNode {

	public static final String NODE_STATE_CLOSED = "closed";
	public static final String NODE_STATE_OPEN = "open";

	private String title;
	private String state = TreeNode.NODE_STATE_CLOSED;
	private TreeNode[] children;
	private String icon;
	private Map<String, Object> attr;

	public TreeNode() {
		super();
	}

	public TreeNode(String title) {
		super();
		this.title = title;
	}

	public TreeNode(String title, TreeNode[] children) {
		super();
		this.title = title;
		this.children = children;
	}

	/**
	 * Get the Tree Node Title
	 */
	public String getData() {
		return title;
	}

	/**
	 * Set the Tree Node Title
	 * 
	 * @param title
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	public String getState() {
		return state;
	}

	/**
	 * Set the Tree Node State open or closed
	 * 
	 * @param state
	 */
	public void setState(String state) {
		this.state = state;
	}

	public TreeNode[] getChildren() {
		return children;
	}

	/**
	 * Set the Tree Node Childrens
	 * 
	 * @param children
	 */
	public void setChildren(TreeNode[] children) {
		this.children = children;
	}

	public String getIcon() {
		return icon;
	}

	/**
	 * Set the Tree Node Icon
	 * 
	 * @param icon
	 */
	public void setIcon(String icon) {
		this.icon = icon;
	}

	/**
	 * Set the Tree Node Id
	 * 
	 * @param icon
	 */
	public void setId(String id) {

		if (this.attr == null) {
			attr = new HashMap<String, Object>();
		}

		if (this.attr.containsKey("id")) {
			this.attr.remove("id");
		}
		this.attr.put("id", id);
	}

	public Map<String, Object> getAttr() {
		return attr;
	}

	public void setAttr(Map<String, Object> attr) {
		this.attr = attr;
	}
}
