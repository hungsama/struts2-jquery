/**
 * jqGrid extension for form editing Grid Data
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 **/
(function (b) {
    var a = {};
    b.jgrid.extend({searchGrid: function (c) {
        c = b.extend(true, {recreateFilter: false, drag: true, sField: "searchField", sValue: "searchString", sOper: "searchOper", sFilter: "filters", loadDefaults: true, beforeShowSearch: null, afterShowSearch: null, onInitializeSearch: null, afterRedraw: null, afterChange: null, closeAfterSearch: false, closeAfterReset: false, closeOnEscape: false, searchOnEnter: false, multipleSearch: false, multipleGroup: false, top: 0, left: 0, jqModal: true, modal: false, resize: true, width: 450, height: "auto", dataheight: "auto", showQuery: false, errorcheck: true, sopt: null, stringResult: undefined, onClose: null, onSearch: null, onReset: null, toTop: true, overlay: 30, columns: [], tmplNames: null, tmplFilters: null, tmplLabel: " Template: ", showOnLoad: false, layer: null, operands: {eq: "=", ne: "<>", lt: "<", le: "<=", gt: ">", ge: ">=", bw: "LIKE", bn: "NOT LIKE", "in": "IN", ni: "NOT IN", ew: "LIKE", en: "NOT LIKE", cn: "LIKE", nc: "NOT LIKE", nu: "IS NULL", nn: "ISNOT NULL"}}, b.jgrid.search, c || {});
        return this.each(function () {
            var t = this;
            if (!t.grid) {
                return
            }
            var d = "fbox_" + t.p.id, i = true, m = true, f = {themodal: "searchmod" + d, modalhead: "searchhd" + d, modalcontent: "searchcnt" + d, scrollelm: d}, g = t.p.postData[c.sFilter];
            if (typeof g === "string") {
                g = b.jgrid.parse(g)
            }
            if (c.recreateFilter === true) {
                b("#" + b.jgrid.jqID(f.themodal)).remove()
            }
            function h(x) {
                i = b(t).triggerHandler("jqGridFilterBeforeShow", [x]);
                if (i === undefined) {
                    i = true
                }
                if (i && b.isFunction(c.beforeShowSearch)) {
                    i = c.beforeShowSearch.call(t, x)
                }
                if (i) {
                    b.jgrid.viewModal("#" + b.jgrid.jqID(f.themodal), {gbox: "#gbox_" + b.jgrid.jqID(d), jqm: c.jqModal, modal: c.modal, overlay: c.overlay, toTop: c.toTop});
                    b(t).triggerHandler("jqGridFilterAfterShow", [x]);
                    if (b.isFunction(c.afterShowSearch)) {
                        c.afterShowSearch.call(t, x)
                    }
                }
            }

            if (b("#" + b.jgrid.jqID(f.themodal))[0] !== undefined) {
                h(b("#fbox_" + b.jgrid.jqID(+t.p.id)))
            } else {
                var u = b("<div><div id='" + d + "' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_" + b.jgrid.jqID(t.p.id)), s = "left", j = "";
                if (t.p.direction === "rtl") {
                    s = "right";
                    j = " style='text-align:left'";
                    u.attr("dir", "rtl")
                }
                var e = b.extend([], t.p.colModel), p = "<a id='" + d + "_search' class='fm-button ui-state-default ui-corner-all fm-button-icon-right ui-reset'><span class='ui-icon ui-icon-search'></span>" + c.Find + "</a>", w = "<a id='" + d + "_reset' class='fm-button ui-state-default ui-corner-all fm-button-icon-left ui-search'><span class='ui-icon ui-icon-arrowreturnthick-1-w'></span>" + c.Reset + "</a>", r = "", k = "", n, o = false, v, q = -1;
                if (c.showQuery) {
                    r = "<a id='" + d + "_query' class='fm-button ui-state-default ui-corner-all fm-button-icon-left'><span class='ui-icon ui-icon-comment'></span>Query</a>"
                }
                if (!c.columns.length) {
                    b.each(e, function (y, B) {
                        if (!B.label) {
                            B.label = t.p.colNames[y]
                        }
                        if (!o) {
                            var x = (B.search === undefined) ? true : B.search, A = (B.hidden === true), z = (B.searchoptions && B.searchoptions.searchhidden === true);
                            if ((z && x) || (x && !A)) {
                                o = true;
                                n = B.index || B.name;
                                q = y
                            }
                        }
                    })
                } else {
                    e = c.columns;
                    q = 0;
                    n = e[0].index || e[0].name
                }
                if ((!g && n) || c.multipleSearch === false) {
                    var l = "eq";
                    if (q >= 0 && e[q].searchoptions && e[q].searchoptions.sopt) {
                        l = e[q].searchoptions.sopt[0]
                    } else {
                        if (c.sopt && c.sopt.length) {
                            l = c.sopt[0]
                        }
                    }
                    g = {groupOp: "AND", rules: [
                        {field: n, op: l, data: ""}
                    ]}
                }
                o = false;
                if (c.tmplNames && c.tmplNames.length) {
                    o = true;
                    k = c.tmplLabel;
                    k += "<select class='ui-template'>";
                    k += "<option value='default'>Default</option>";
                    b.each(c.tmplNames, function (x, y) {
                        k += "<option value='" + x + "'>" + y + "</option>"
                    });
                    k += "</select>"
                }
                v = "<table class='EditTable' style='border:0px none;margin-top:5px' id='" + d + "_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='EditButton' style='text-align:" + s + "'>" + w + k + "</td><td class='EditButton' " + j + ">" + r + p + "</td></tr></tbody></table>";
                d = b.jgrid.jqID(d);
                b("#" + d).jqFilter({columns: e, filter: c.loadDefaults ? g : null, showQuery: c.showQuery, errorcheck: c.errorcheck, sopt: c.sopt, groupButton: c.multipleGroup, ruleButtons: c.multipleSearch, afterRedraw: c.afterRedraw, ops: c.odata, operands: c.operands, ajaxSelectOptions: t.p.ajaxSelectOptions, groupOps: c.groupOps, onChange: function () {
                    if (this.p.showQuery) {
                        b(".query", this).html(this.toUserFriendlyString())
                    }
                    if (b.isFunction(c.afterChange)) {
                        c.afterChange.call(t, b("#" + d), c)
                    }
                }, direction: t.p.direction, id: t.p.id});
                u.append(v);
                if (o && c.tmplFilters && c.tmplFilters.length) {
                    b(".ui-template", u).bind("change", function () {
                        var x = b(this).val();
                        if (x === "default") {
                            b("#" + d).jqFilter("addFilter", g)
                        } else {
                            b("#" + d).jqFilter("addFilter", c.tmplFilters[parseInt(x, 10)])
                        }
                        return false
                    })
                }
                if (c.multipleGroup === true) {
                    c.multipleSearch = true
                }
                b(t).triggerHandler("jqGridFilterInitialize", [b("#" + d)]);
                if (b.isFunction(c.onInitializeSearch)) {
                    c.onInitializeSearch.call(t, b("#" + d))
                }
                c.gbox = "#gbox_" + d;
                if (c.layer) {
                    b.jgrid.createModal(f, u, c, "#gview_" + b.jgrid.jqID(t.p.id), b("#gbox_" + b.jgrid.jqID(t.p.id))[0], "#" + b.jgrid.jqID(c.layer), {position: "relative"})
                } else {
                    b.jgrid.createModal(f, u, c, "#gview_" + b.jgrid.jqID(t.p.id), b("#gbox_" + b.jgrid.jqID(t.p.id))[0])
                }
                if (c.searchOnEnter || c.closeOnEscape) {
                    b("#" + b.jgrid.jqID(f.themodal)).keydown(function (y) {
                        var x = b(y.target);
                        if (c.searchOnEnter && y.which === 13 && !x.hasClass("add-group") && !x.hasClass("add-rule") && !x.hasClass("delete-group") && !x.hasClass("delete-rule") && (!x.hasClass("fm-button") || !x.is("[id$=_query]"))) {
                            b("#" + d + "_search").focus().click();
                            return false
                        }
                        if (c.closeOnEscape && y.which === 27) {
                            b("#" + b.jgrid.jqID(f.modalhead)).find(".ui-jqdialog-titlebar-close").focus().click();
                            return false
                        }
                    })
                }
                if (r) {
                    b("#" + d + "_query").bind("click", function () {
                        b(".queryresult", u).toggle();
                        return false
                    })
                }
                if (c.stringResult === undefined) {
                    c.stringResult = c.multipleSearch
                }
                b("#" + d + "_search").bind("click", function () {
                    var A = b("#" + d), y = {}, x, z = A.jqFilter("filterData");
                    if (c.errorcheck) {
                        A[0].hideError();
                        if (!c.showQuery) {
                            A.jqFilter("toSQLString")
                        }
                        if (A[0].p.error) {
                            A[0].showError();
                            return false
                        }
                    }
                    if (c.stringResult) {
                        try {
                            x = xmlJsonClass.toJson(z, "", "", false)
                        } catch (C) {
                            try {
                                x = JSON.stringify(z)
                            } catch (B) {
                            }
                        }
                        if (typeof x === "string") {
                            y[c.sFilter] = x;
                            b.each([c.sField, c.sValue, c.sOper], function () {
                                y[this] = ""
                            })
                        }
                    } else {
                        if (c.multipleSearch) {
                            y[c.sFilter] = z;
                            b.each([c.sField, c.sValue, c.sOper], function () {
                                y[this] = ""
                            })
                        } else {
                            y[c.sField] = z.rules[0].field;
                            y[c.sValue] = z.rules[0].data;
                            y[c.sOper] = z.rules[0].op;
                            y[c.sFilter] = ""
                        }
                    }
                    t.p.search = true;
                    b.extend(t.p.postData, y);
                    m = b(t).triggerHandler("jqGridFilterSearch");
                    if (m === undefined) {
                        m = true
                    }
                    if (m && b.isFunction(c.onSearch)) {
                        m = c.onSearch.call(t, t.p.filters)
                    }
                    if (m !== false) {
                        b(t).trigger("reloadGrid", [
                            {page: 1}
                        ])
                    }
                    if (c.closeAfterSearch) {
                        b.jgrid.hideModal("#" + b.jgrid.jqID(f.themodal), {gb: "#gbox_" + b.jgrid.jqID(t.p.id), jqm: c.jqModal, onClose: c.onClose})
                    }
                    return false
                });
                b("#" + d + "_reset").bind("click", function () {
                    var x = {}, y = b("#" + d);
                    t.p.search = false;
                    if (c.multipleSearch === false) {
                        x[c.sField] = x[c.sValue] = x[c.sOper] = ""
                    } else {
                        x[c.sFilter] = ""
                    }
                    y[0].resetFilter();
                    if (o) {
                        b(".ui-template", u).val("default")
                    }
                    b.extend(t.p.postData, x);
                    m = b(t).triggerHandler("jqGridFilterReset");
                    if (m === undefined) {
                        m = true
                    }
                    if (m && b.isFunction(c.onReset)) {
                        m = c.onReset.call(t)
                    }
                    if (m !== false) {
                        b(t).trigger("reloadGrid", [
                            {page: 1}
                        ])
                    }
                    if (c.closeAfterReset) {
                        b.jgrid.hideModal("#" + b.jgrid.jqID(f.themodal), {gb: "#gbox_" + b.jgrid.jqID(t.p.id), jqm: c.jqModal, onClose: c.onClose})
                    }
                    return false
                });
                h(b("#" + d));
                b(".fm-button:not(.ui-state-disabled)", u).hover(function () {
                    b(this).addClass("ui-state-hover")
                }, function () {
                    b(this).removeClass("ui-state-hover")
                })
            }
        })
    }, editGridRow: function (c, d) {
        d = b.extend(true, {top: 0, left: 0, width: 300, datawidth: "auto", height: "auto", dataheight: "auto", modal: false, overlay: 30, drag: true, resize: true, url: null, mtype: "POST", clearAfterAdd: true, closeAfterEdit: false, reloadAfterSubmit: true, onInitializeForm: null, beforeInitData: null, beforeShowForm: null, afterShowForm: null, beforeSubmit: null, afterSubmit: null, onclickSubmit: null, afterComplete: null, onclickPgButtons: null, afterclickPgButtons: null, editData: {}, recreateForm: false, jqModal: true, closeOnEscape: false, addedrow: "first", topinfo: "", bottominfo: "", saveicon: [], closeicon: [], savekey: [false, 13], navkeys: [false, 38, 40], checkOnSubmit: false, checkOnUpdate: false, _savedData: {}, processing: false, onClose: null, ajaxEditOptions: {}, serializeEditData: null, viewPagerButtons: true, overlayClass: "ui-widget-overlay"}, b.jgrid.edit, d || {});
        a[b(this)[0].p.id] = d;
        return this.each(function () {
            var e = this;
            if (!e.grid || !c) {
                return
            }
            var B = e.p.id, y = "FrmGrid_" + B, S = "TblGrid_" + B, v = "#" + b.jgrid.jqID(S), j = {themodal: "editmod" + B, modalhead: "edithd" + B, modalcontent: "editcnt" + B, scrollelm: y}, C = b.isFunction(a[e.p.id].beforeShowForm) ? a[e.p.id].beforeShowForm : false, K = b.isFunction(a[e.p.id].afterShowForm) ? a[e.p.id].afterShowForm : false, J = b.isFunction(a[e.p.id].beforeInitData) ? a[e.p.id].beforeInitData : false, p = b.isFunction(a[e.p.id].onInitializeForm) ? a[e.p.id].onInitializeForm : false, V = true, F = 1, r = 0, D, A, E;
            y = b.jgrid.jqID(y);
            if (c === "new") {
                c = "_empty";
                E = "add";
                d.caption = a[e.p.id].addCaption
            } else {
                d.caption = a[e.p.id].editCaption;
                E = "edit"
            }
            if (d.recreateForm === true && b("#" + b.jgrid.jqID(j.themodal))[0] !== undefined) {
                b("#" + b.jgrid.jqID(j.themodal)).remove()
            }
            var m = true;
            if (d.checkOnUpdate && d.jqModal && !d.modal) {
                m = false
            }
            function U() {
                b(v + " > tbody > tr > td > .FormElement").each(function () {
                    var ab = b(".customelement", this);
                    if (ab.length) {
                        var Z = ab[0], X = b(Z).attr("name");
                        b.each(e.p.colModel, function () {
                            if (this.name === X && this.editoptions && b.isFunction(this.editoptions.custom_value)) {
                                try {
                                    D[X] = this.editoptions.custom_value.call(e, b("#" + b.jgrid.jqID(X), v), "get");
                                    if (D[X] === undefined) {
                                        throw"e1"
                                    }
                                } catch (ac) {
                                    if (ac === "e1") {
                                        b.jgrid.info_dialog(b.jgrid.errors.errcap, "function 'custom_value' " + b.jgrid.edit.msg.novalue, b.jgrid.edit.bClose)
                                    } else {
                                        b.jgrid.info_dialog(b.jgrid.errors.errcap, ac.message, b.jgrid.edit.bClose)
                                    }
                                }
                                return true
                            }
                        })
                    } else {
                        switch (b(this).get(0).type) {
                            case"checkbox":
                                if (b(this).is(":checked")) {
                                    D[this.name] = b(this).val()
                                } else {
                                    var Y = b(this).attr("offval");
                                    D[this.name] = Y
                                }
                                break;
                            case"select-one":
                                D[this.name] = b("option:selected", this).val();
                                break;
                            case"select-multiple":
                                D[this.name] = b(this).val();
                                if (D[this.name]) {
                                    D[this.name] = D[this.name].join(",")
                                } else {
                                    D[this.name] = ""
                                }
                                var aa = [];
                                b("option:selected", this).each(function (ac, ad) {
                                    aa[ac] = b(ad).text()
                                });
                                break;
                            case"password":
                            case"text":
                            case"textarea":
                            case"button":
                                D[this.name] = b(this).val();
                                break
                        }
                        if (e.p.autoencode) {
                            D[this.name] = b.jgrid.htmlEncode(D[this.name])
                        }
                    }
                });
                return true
            }

            function t(Z, ag, ad, ab) {
                var an, ah, Y, ac = 0, af, am, X, aj = [], aa = false, ai = "<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>", al = "", ae;
                for (ae = 1; ae <= ab; ae++) {
                    al += ai
                }
                if (Z !== "_empty") {
                    aa = b(ag).jqGrid("getInd", Z)
                }
                b(ag.p.colModel).each(function (aq) {
                    an = this.name;
                    if (this.editrules && this.editrules.edithidden === true) {
                        ah = false
                    } else {
                        ah = this.hidden === true ? true : false
                    }
                    am = ah ? "style='display:none'" : "";
                    if (an !== "cb" && an !== "subgrid" && this.editable === true && an !== "rn") {
                        if (aa === false) {
                            af = ""
                        } else {
                            if (an === ag.p.ExpandColumn && ag.p.treeGrid === true) {
                                af = b("td[role='gridcell']:eq(" + aq + ")", ag.rows[aa]).text()
                            } else {
                                try {
                                    af = b.unformat.call(ag, b("td[role='gridcell']:eq(" + aq + ")", ag.rows[aa]), {rowId: Z, colModel: this}, aq)
                                } catch (ao) {
                                    af = (this.edittype && this.edittype === "textarea") ? b("td[role='gridcell']:eq(" + aq + ")", ag.rows[aa]).text() : b("td[role='gridcell']:eq(" + aq + ")", ag.rows[aa]).html()
                                }
                                if (!af || af === "&nbsp;" || af === "&#160;" || (af.length === 1 && af.charCodeAt(0) === 160)) {
                                    af = ""
                                }
                            }
                        }
                        var ap = b.extend({}, this.editoptions || {}, {id: an, name: an}), av = b.extend({}, {elmprefix: "", elmsuffix: "", rowabove: false, rowcontent: ""}, this.formoptions || {}), ar = parseInt(av.rowpos, 10) || ac + 1, au = parseInt((parseInt(av.colpos, 10) || 1) * 2, 10);
                        if (Z === "_empty" && ap.defaultValue) {
                            af = b.isFunction(ap.defaultValue) ? ap.defaultValue.call(e) : ap.defaultValue
                        }
                        if (!this.edittype) {
                            this.edittype = "text"
                        }
                        if (e.p.autoencode) {
                            af = b.jgrid.htmlDecode(af)
                        }
                        X = b.jgrid.createEl.call(e, this.edittype, ap, af, false, b.extend({}, b.jgrid.ajaxOptions, ag.p.ajaxSelectOptions || {}));
                        if (a[e.p.id].checkOnSubmit || a[e.p.id].checkOnUpdate) {
                            a[e.p.id]._savedData[an] = af
                        }
                        b(X).addClass("FormElement");
                        if (b.inArray(this.edittype, ["text", "textarea", "password", "select"]) > -1) {
                            b(X).addClass("ui-widget-content ui-corner-all")
                        }
                        Y = b(ad).find("tr[rowpos=" + ar + "]");
                        if (av.rowabove) {
                            var at = b("<tr><td class='contentinfo' colspan='" + (ab * 2) + "'>" + av.rowcontent + "</td></tr>");
                            b(ad).append(at);
                            at[0].rp = ar
                        }
                        if (Y.length === 0) {
                            Y = b("<tr " + am + " rowpos='" + ar + "'></tr>").addClass("FormData").attr("id", "tr_" + an);
                            b(Y).append(al);
                            b(ad).append(Y);
                            Y[0].rp = ar
                        }
                        b("td:eq(" + (au - 2) + ")", Y[0]).html(av.label === undefined ? ag.p.colNames[aq] : av.label);
                        b("td:eq(" + (au - 1) + ")", Y[0]).append(av.elmprefix).append(X).append(av.elmsuffix);
                        if (this.edittype === "custom" && b.isFunction(ap.custom_value)) {
                            ap.custom_value.call(e, b("#" + an, "#" + y), "set", af)
                        }
                        b.jgrid.bindEv.call(e, X, ap);
                        aj[ac] = aq;
                        ac++
                    }
                });
                if (ac > 0) {
                    var ak = b("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='" + (ab * 2 - 1) + "' class='DataTD'><input class='FormElement' id='id_g' type='text' name='" + ag.p.id + "_id' value='" + Z + "'/></td></tr>");
                    ak[0].rp = ac + 999;
                    b(ad).append(ak);
                    if (a[e.p.id].checkOnSubmit || a[e.p.id].checkOnUpdate) {
                        a[e.p.id]._savedData[ag.p.id + "_id"] = Z
                    }
                }
                return aj
            }

            function q(X, ae, aa) {
                var ai, ab = 0, af, ad, Y, ac, ag;
                if (a[e.p.id].checkOnSubmit || a[e.p.id].checkOnUpdate) {
                    a[e.p.id]._savedData = {};
                    a[e.p.id]._savedData[ae.p.id + "_id"] = X
                }
                var ah = ae.p.colModel;
                if (X === "_empty") {
                    b(ah).each(function () {
                        ai = this.name;
                        Y = b.extend({}, this.editoptions || {});
                        ad = b("#" + b.jgrid.jqID(ai), "#" + aa);
                        if (ad && ad.length && ad[0] !== null) {
                            ac = "";
                            if (this.edittype === "custom" && b.isFunction(Y.custom_value)) {
                                Y.custom_value.call(e, b("#" + ai, "#" + aa), "set", ac)
                            } else {
                                if (Y.defaultValue) {
                                    ac = b.isFunction(Y.defaultValue) ? Y.defaultValue.call(e) : Y.defaultValue;
                                    if (ad[0].type === "checkbox") {
                                        ag = ac.toLowerCase();
                                        if (ag.search(/(false|f|0|no|n|off|undefined)/i) < 0 && ag !== "") {
                                            ad[0].checked = true;
                                            ad[0].defaultChecked = true;
                                            ad[0].value = ac
                                        } else {
                                            ad[0].checked = false;
                                            ad[0].defaultChecked = false
                                        }
                                    } else {
                                        ad.val(ac)
                                    }
                                } else {
                                    if (ad[0].type === "checkbox") {
                                        ad[0].checked = false;
                                        ad[0].defaultChecked = false;
                                        ac = b(ad).attr("offval")
                                    } else {
                                        if (ad[0].type && ad[0].type.substr(0, 6) === "select") {
                                            ad[0].selectedIndex = 0
                                        } else {
                                            ad.val(ac)
                                        }
                                    }
                                }
                            }
                            if (a[e.p.id].checkOnSubmit === true || a[e.p.id].checkOnUpdate) {
                                a[e.p.id]._savedData[ai] = ac
                            }
                        }
                    });
                    b("#id_g", "#" + aa).val(X);
                    return
                }
                var Z = b(ae).jqGrid("getInd", X, true);
                if (!Z) {
                    return
                }
                b('td[role="gridcell"]', Z).each(function (am) {
                    ai = ah[am].name;
                    if (ai !== "cb" && ai !== "subgrid" && ai !== "rn" && ah[am].editable === true) {
                        if (ai === ae.p.ExpandColumn && ae.p.treeGrid === true) {
                            af = b(this).text()
                        } else {
                            try {
                                af = b.unformat.call(ae, b(this), {rowId: X, colModel: ah[am]}, am)
                            } catch (al) {
                                af = ah[am].edittype === "textarea" ? b(this).text() : b(this).html()
                            }
                        }
                        if (e.p.autoencode) {
                            af = b.jgrid.htmlDecode(af)
                        }
                        if (a[e.p.id].checkOnSubmit === true || a[e.p.id].checkOnUpdate) {
                            a[e.p.id]._savedData[ai] = af
                        }
                        ai = b.jgrid.jqID(ai);
                        switch (ah[am].edittype) {
                            case"password":
                            case"text":
                            case"button":
                            case"image":
                            case"textarea":
                                if (af === "&nbsp;" || af === "&#160;" || (af.length === 1 && af.charCodeAt(0) === 160)) {
                                    af = ""
                                }
                                b("#" + ai, "#" + aa).val(af);
                                break;
                            case"select":
                                var ak = af.split(",");
                                ak = b.map(ak, function (ao) {
                                    return b.trim(ao)
                                });
                                b("#" + ai + " option", "#" + aa).each(function () {
                                    if (!ah[am].editoptions.multiple && (b.trim(af) === b.trim(b(this).text()) || ak[0] === b.trim(b(this).text()) || ak[0] === b.trim(b(this).val()))) {
                                        this.selected = true
                                    } else {
                                        if (ah[am].editoptions.multiple) {
                                            if (b.inArray(b.trim(b(this).text()), ak) > -1 || b.inArray(b.trim(b(this).val()), ak) > -1) {
                                                this.selected = true
                                            } else {
                                                this.selected = false
                                            }
                                        } else {
                                            this.selected = false
                                        }
                                    }
                                });
                                break;
                            case"checkbox":
                                af = String(af);
                                if (ah[am].editoptions && ah[am].editoptions.value) {
                                    var aj = ah[am].editoptions.value.split(":");
                                    if (aj[0] === af) {
                                        b("#" + ai, "#" + aa)[e.p.useProp ? "prop" : "attr"]({checked: true, defaultChecked: true})
                                    } else {
                                        b("#" + ai, "#" + aa)[e.p.useProp ? "prop" : "attr"]({checked: false, defaultChecked: false})
                                    }
                                } else {
                                    af = af.toLowerCase();
                                    if (af.search(/(false|f|0|no|n|off|undefined)/i) < 0 && af !== "") {
                                        b("#" + ai, "#" + aa)[e.p.useProp ? "prop" : "attr"]("checked", true);
                                        b("#" + ai, "#" + aa)[e.p.useProp ? "prop" : "attr"]("defaultChecked", true)
                                    } else {
                                        b("#" + ai, "#" + aa)[e.p.useProp ? "prop" : "attr"]("checked", false);
                                        b("#" + ai, "#" + aa)[e.p.useProp ? "prop" : "attr"]("defaultChecked", false)
                                    }
                                }
                                break;
                            case"custom":
                                try {
                                    if (ah[am].editoptions && b.isFunction(ah[am].editoptions.custom_value)) {
                                        ah[am].editoptions.custom_value.call(e, b("#" + ai, "#" + aa), "set", af)
                                    } else {
                                        throw"e1"
                                    }
                                } catch (an) {
                                    if (an === "e1") {
                                        b.jgrid.info_dialog(b.jgrid.errors.errcap, "function 'custom_value' " + b.jgrid.edit.msg.nodefined, b.jgrid.edit.bClose)
                                    } else {
                                        b.jgrid.info_dialog(b.jgrid.errors.errcap, an.message, b.jgrid.edit.bClose)
                                    }
                                }
                                break
                        }
                        ab++
                    }
                });
                if (ab > 0) {
                    b("#id_g", v).val(X)
                }
            }

            function Q() {
                b.each(e.p.colModel, function (X, Y) {
                    if (Y.editoptions && Y.editoptions.NullIfEmpty === true) {
                        if (D.hasOwnProperty(Y.name) && D[Y.name] === "") {
                            D[Y.name] = "null"
                        }
                    }
                })
            }

            function k() {
                var ah, ag = [true, "", ""], X = {}, ac = e.p.prmNames, af, aa, ak, ad, ab;
                var ae = b(e).triggerHandler("jqGridAddEditBeforeCheckValues", [b("#" + y), E]);
                if (ae && typeof ae === "object") {
                    D = ae
                }
                if (b.isFunction(a[e.p.id].beforeCheckValues)) {
                    ae = a[e.p.id].beforeCheckValues.call(e, D, b("#" + y), E);
                    if (ae && typeof ae === "object") {
                        D = ae
                    }
                }
                for (ak in D) {
                    if (D.hasOwnProperty(ak)) {
                        ag = b.jgrid.checkValues.call(e, D[ak], ak);
                        if (ag[0] === false) {
                            break
                        }
                    }
                }
                Q();
                if (ag[0]) {
                    X = b(e).triggerHandler("jqGridAddEditClickSubmit", [a[e.p.id], D, E]);
                    if (X === undefined && b.isFunction(a[e.p.id].onclickSubmit)) {
                        X = a[e.p.id].onclickSubmit.call(e, a[e.p.id], D, E) || {}
                    }
                    ag = b(e).triggerHandler("jqGridAddEditBeforeSubmit", [D, b("#" + y), E]);
                    if (ag === undefined) {
                        ag = [true, "", ""]
                    }
                    if (ag[0] && b.isFunction(a[e.p.id].beforeSubmit)) {
                        ag = a[e.p.id].beforeSubmit.call(e, D, b("#" + y), E)
                    }
                }
                if (ag[0] && !a[e.p.id].processing) {
                    a[e.p.id].processing = true;
                    b("#sData", v + "_2").addClass("ui-state-active");
                    aa = ac.oper;
                    af = ac.id;
                    D[aa] = (b.trim(D[e.p.id + "_id"]) === "_empty") ? ac.addoper : ac.editoper;
                    if (D[aa] !== ac.addoper) {
                        D[af] = D[e.p.id + "_id"]
                    } else {
                        if (D[af] === undefined) {
                            D[af] = D[e.p.id + "_id"]
                        }
                    }
                    delete D[e.p.id + "_id"];
                    D = b.extend(D, a[e.p.id].editData, X);
                    if (e.p.treeGrid === true) {
                        if (D[aa] === ac.addoper) {
                            ad = b(e).jqGrid("getGridParam", "selrow");
                            var Y = e.p.treeGridModel === "adjacency" ? e.p.treeReader.parent_id_field : "parent_id";
                            D[Y] = ad
                        }
                        for (ab in e.p.treeReader) {
                            if (e.p.treeReader.hasOwnProperty(ab)) {
                                var aj = e.p.treeReader[ab];
                                if (D.hasOwnProperty(aj)) {
                                    if (D[aa] === ac.addoper && ab === "parent_id_field") {
                                        continue
                                    }
                                    delete D[aj]
                                }
                            }
                        }
                    }
                    D[af] = b.jgrid.stripPref(e.p.idPrefix, D[af]);
                    var Z = b.extend({url: a[e.p.id].url || b(e).jqGrid("getGridParam", "editurl"), type: a[e.p.id].mtype, data: b.isFunction(a[e.p.id].serializeEditData) ? a[e.p.id].serializeEditData.call(e, D) : D, complete: function (an, al) {
                        var am;
                        D[af] = e.p.idPrefix + D[af];
                        if (an.status >= 300 && an.status !== 304) {
                            ag[0] = false;
                            ag[1] = b(e).triggerHandler("jqGridAddEditErrorTextFormat", [an, E]);
                            if (b.isFunction(a[e.p.id].errorTextFormat)) {
                                ag[1] = a[e.p.id].errorTextFormat.call(e, an, E)
                            } else {
                                ag[1] = al + " Status: '" + an.statusText + "'. Error code: " + an.status
                            }
                        } else {
                            ag = b(e).triggerHandler("jqGridAddEditAfterSubmit", [an, D, E]);
                            if (ag === undefined) {
                                ag = [true, "", ""]
                            }
                            if (ag[0] && b.isFunction(a[e.p.id].afterSubmit)) {
                                ag = a[e.p.id].afterSubmit.call(e, an, D, E)
                            }
                        }
                        if (ag[0] === false) {
                            b("#FormError>td", v).html(ag[1]);
                            b("#FormError", v).show()
                        } else {
                            if (e.p.autoencode) {
                                b.each(D, function (aq, ap) {
                                    D[aq] = b.jgrid.htmlDecode(ap)
                                })
                            }
                            if (D[aa] === ac.addoper) {
                                if (!ag[2]) {
                                    ag[2] = b.jgrid.randId()
                                }
                                D[af] = ag[2];
                                if (a[e.p.id].reloadAfterSubmit) {
                                    b(e).trigger("reloadGrid")
                                } else {
                                    if (e.p.treeGrid === true) {
                                        b(e).jqGrid("addChildNode", ag[2], ad, D)
                                    } else {
                                        b(e).jqGrid("addRowData", ag[2], D, d.addedrow)
                                    }
                                }
                                if (a[e.p.id].closeAfterAdd) {
                                    if (e.p.treeGrid !== true) {
                                        b(e).jqGrid("setSelection", ag[2])
                                    }
                                    b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose})
                                } else {
                                    if (a[e.p.id].clearAfterAdd) {
                                        q("_empty", e, y)
                                    }
                                }
                            } else {
                                if (a[e.p.id].reloadAfterSubmit) {
                                    b(e).trigger("reloadGrid");
                                    if (!a[e.p.id].closeAfterEdit) {
                                        setTimeout(function () {
                                            b(e).jqGrid("setSelection", D[af])
                                        }, 1000)
                                    }
                                } else {
                                    if (e.p.treeGrid === true) {
                                        b(e).jqGrid("setTreeRow", D[af], D)
                                    } else {
                                        b(e).jqGrid("setRowData", D[af], D)
                                    }
                                }
                                if (a[e.p.id].closeAfterEdit) {
                                    b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose})
                                }
                            }
                            if (b.isFunction(a[e.p.id].afterComplete)) {
                                ah = an;
                                setTimeout(function () {
                                    b(e).triggerHandler("jqGridAddEditAfterComplete", [ah, D, b("#" + y), E]);
                                    a[e.p.id].afterComplete.call(e, ah, D, b("#" + y), E);
                                    ah = null
                                }, 500)
                            }
                            if (a[e.p.id].checkOnSubmit || a[e.p.id].checkOnUpdate) {
                                b("#" + y).data("disabled", false);
                                if (a[e.p.id]._savedData[e.p.id + "_id"] !== "_empty") {
                                    for (am in a[e.p.id]._savedData) {
                                        if (a[e.p.id]._savedData.hasOwnProperty(am) && D[am]) {
                                            a[e.p.id]._savedData[am] = D[am]
                                        }
                                    }
                                }
                            }
                        }
                        a[e.p.id].processing = false;
                        b("#sData", v + "_2").removeClass("ui-state-active");
                        try {
                            b(":input:visible", "#" + y)[0].focus()
                        } catch (ao) {
                        }
                    }}, b.jgrid.ajaxOptions, a[e.p.id].ajaxEditOptions);
                    if (!Z.url && !a[e.p.id].useDataProxy) {
                        if (b.isFunction(e.p.dataProxy)) {
                            a[e.p.id].useDataProxy = true
                        } else {
                            ag[0] = false;
                            ag[1] += " " + b.jgrid.errors.nourl
                        }
                    }
                    if (ag[0]) {
                        if (a[e.p.id].useDataProxy) {
                            var ai = e.p.dataProxy.call(e, Z, "set_" + e.p.id);
                            if (ai === undefined) {
                                ai = [true, ""]
                            }
                            if (ai[0] === false) {
                                ag[0] = false;
                                ag[1] = ai[1] || "Error deleting the selected row!"
                            } else {
                                if (Z.data.oper === ac.addoper && a[e.p.id].closeAfterAdd) {
                                    b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose})
                                }
                                if (Z.data.oper === ac.editoper && a[e.p.id].closeAfterEdit) {
                                    b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose})
                                }
                            }
                        } else {
                            b.ajax(Z)
                        }
                    }
                }
                if (ag[0] === false) {
                    b("#FormError>td", v).html(ag[1]);
                    b("#FormError", v).show()
                }
            }

            function H(aa, X) {
                var Y = false, Z;
                for (Z in aa) {
                    if (aa.hasOwnProperty(Z) && aa[Z] != X[Z]) {
                        Y = true;
                        break
                    }
                }
                return Y
            }

            function h() {
                var X = true;
                b("#FormError", v).hide();
                if (a[e.p.id].checkOnUpdate) {
                    D = {};
                    U();
                    A = H(D, a[e.p.id]._savedData);
                    if (A) {
                        b("#" + y).data("disabled", true);
                        b(".confirm", "#" + j.themodal).show();
                        X = false
                    }
                }
                return X
            }

            function T() {
                var X;
                if (c !== "_empty" && e.p.savedRow !== undefined && e.p.savedRow.length > 0 && b.isFunction(b.fn.jqGrid.restoreRow)) {
                    for (X = 0; X < e.p.savedRow.length; X++) {
                        if (e.p.savedRow[X].id == c) {
                            b(e).jqGrid("restoreRow", c);
                            break
                        }
                    }
                }
            }

            function G(Y, X) {
                var Z = X[1].length - 1;
                if (Y === 0) {
                    b("#pData", v + "_2").addClass("ui-state-disabled")
                } else {
                    if (X[1][Y - 1] !== undefined && b("#" + b.jgrid.jqID(X[1][Y - 1])).hasClass("ui-state-disabled")) {
                        b("#pData", v + "_2").addClass("ui-state-disabled")
                    } else {
                        b("#pData", v + "_2").removeClass("ui-state-disabled")
                    }
                }
                if (Y === Z) {
                    b("#nData", v + "_2").addClass("ui-state-disabled")
                } else {
                    if (X[1][Y + 1] !== undefined && b("#" + b.jgrid.jqID(X[1][Y + 1])).hasClass("ui-state-disabled")) {
                        b("#nData", v + "_2").addClass("ui-state-disabled")
                    } else {
                        b("#nData", v + "_2").removeClass("ui-state-disabled")
                    }
                }
            }

            function W() {
                var Y = b(e).jqGrid("getDataIDs"), X = b("#id_g", v).val(), Z = b.inArray(X, Y);
                return[Z, Y]
            }

            if (b("#" + b.jgrid.jqID(j.themodal))[0] !== undefined) {
                V = b(e).triggerHandler("jqGridAddEditBeforeInitData", [b("#" + b.jgrid.jqID(y)), E]);
                if (V === undefined) {
                    V = true
                }
                if (V && J) {
                    V = J.call(e, b("#" + y), E)
                }
                if (V === false) {
                    return
                }
                T();
                b(".ui-jqdialog-title", "#" + b.jgrid.jqID(j.modalhead)).html(d.caption);
                b("#FormError", v).hide();
                if (a[e.p.id].topinfo) {
                    b(".topinfo", v).html(a[e.p.id].topinfo);
                    b(".tinfo", v).show()
                } else {
                    b(".tinfo", v).hide()
                }
                if (a[e.p.id].bottominfo) {
                    b(".bottominfo", v + "_2").html(a[e.p.id].bottominfo);
                    b(".binfo", v + "_2").show()
                } else {
                    b(".binfo", v + "_2").hide()
                }
                q(c, e, y);
                if (c === "_empty" || !a[e.p.id].viewPagerButtons) {
                    b("#pData, #nData", v + "_2").hide()
                } else {
                    b("#pData, #nData", v + "_2").show()
                }
                if (a[e.p.id].processing === true) {
                    a[e.p.id].processing = false;
                    b("#sData", v + "_2").removeClass("ui-state-active")
                }
                if (b("#" + y).data("disabled") === true) {
                    b(".confirm", "#" + b.jgrid.jqID(j.themodal)).hide();
                    b("#" + y).data("disabled", false)
                }
                b(e).triggerHandler("jqGridAddEditBeforeShowForm", [b("#" + y), E]);
                if (C) {
                    C.call(e, b("#" + y), E)
                }
                b("#" + b.jgrid.jqID(j.themodal)).data("onClose", a[e.p.id].onClose);
                b.jgrid.viewModal("#" + b.jgrid.jqID(j.themodal), {gbox: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, jqM: false, overlay: d.overlay, modal: d.modal, overlayClass: d.overlayClass});
                if (!m) {
                    b("." + b.jgrid.jqID(d.overlayClass)).click(function () {
                        if (!h()) {
                            return false
                        }
                        b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose});
                        return false
                    })
                }
                b(e).triggerHandler("jqGridAddEditAfterShowForm", [b("#" + y), E]);
                if (K) {
                    K.call(e, b("#" + y), E)
                }
            } else {
                var s = isNaN(d.dataheight) ? d.dataheight : d.dataheight + "px", g = isNaN(d.datawidth) ? d.datawidth : d.datawidth + "px", P = b("<form name='FormPost' id='" + y + "' class='FormGrid' onSubmit='return false;' style='width:" + g + ";overflow:auto;position:relative;height:" + s + ";'></form>").data("disabled", false), z = b("<table id='" + S + "' class='EditTable' cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>");
                V = b(e).triggerHandler("jqGridAddEditBeforeInitData", [b("#" + y), E]);
                if (V === undefined) {
                    V = true
                }
                if (V && J) {
                    V = J.call(e, b("#" + y), E)
                }
                if (V === false) {
                    return
                }
                T();
                b(e.p.colModel).each(function () {
                    var X = this.formoptions;
                    F = Math.max(F, X ? X.colpos || 0 : 0);
                    r = Math.max(r, X ? X.rowpos || 0 : 0)
                });
                b(P).append(z);
                var I = b("<tr id='FormError' style='display:none'><td class='ui-state-error' colspan='" + (F * 2) + "'></td></tr>");
                I[0].rp = 0;
                b(z).append(I);
                I = b("<tr style='display:none' class='tinfo'><td class='topinfo' colspan='" + (F * 2) + "'>" + a[e.p.id].topinfo + "</td></tr>");
                I[0].rp = 0;
                b(z).append(I);
                var f = e.p.direction === "rtl" ? true : false, O = f ? "nData" : "pData", R = f ? "pData" : "nData";
                t(c, e, z, F);
                var l = "<a id='" + O + "' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>", n = "<a id='" + R + "' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>", i = "<a id='sData' class='fm-button ui-state-default ui-corner-all'>" + d.bSubmit + "</a>", u = "<a id='cData' class='fm-button ui-state-default ui-corner-all'>" + d.bCancel + "</a>";
                var M = "<table border='0' cellspacing='0' cellpadding='0' class='EditTable' id='" + S + "_2'><tbody><tr><td colspan='2'><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>" + (f ? n + l : l + n) + "</td><td class='EditButton'>" + i + u + "</td></tr>";
                M += "<tr style='display:none' class='binfo'><td class='bottominfo' colspan='2'>" + a[e.p.id].bottominfo + "</td></tr>";
                M += "</tbody></table>";
                if (r > 0) {
                    var x = [];
                    b.each(b(z)[0].rows, function (X, Y) {
                        x[X] = Y
                    });
                    x.sort(function (Y, X) {
                        if (Y.rp > X.rp) {
                            return 1
                        }
                        if (Y.rp < X.rp) {
                            return -1
                        }
                        return 0
                    });
                    b.each(x, function (X, Y) {
                        b("tbody", z).append(Y)
                    })
                }
                d.gbox = "#gbox_" + b.jgrid.jqID(B);
                var o = false;
                if (d.closeOnEscape === true) {
                    d.closeOnEscape = false;
                    o = true
                }
                var L = b("<div></div>").append(P).append(M);
                b.jgrid.createModal(j, L, d, "#gview_" + b.jgrid.jqID(e.p.id), b("#gbox_" + b.jgrid.jqID(e.p.id))[0]);
                if (f) {
                    b("#pData, #nData", v + "_2").css("float", "right");
                    b(".EditButton", v + "_2").css("text-align", "left")
                }
                if (a[e.p.id].topinfo) {
                    b(".tinfo", v).show()
                }
                if (a[e.p.id].bottominfo) {
                    b(".binfo", v + "_2").show()
                }
                L = null;
                M = null;
                b("#" + b.jgrid.jqID(j.themodal)).keydown(function (X) {
                    var Y = X.target;
                    if (b("#" + y).data("disabled") === true) {
                        return false
                    }
                    if (a[e.p.id].savekey[0] === true && X.which === a[e.p.id].savekey[1]) {
                        if (Y.tagName !== "TEXTAREA") {
                            b("#sData", v + "_2").trigger("click");
                            return false
                        }
                    }
                    if (X.which === 27) {
                        if (!h()) {
                            return false
                        }
                        if (o) {
                            b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: d.gbox, jqm: d.jqModal, onClose: a[e.p.id].onClose})
                        }
                        return false
                    }
                    if (a[e.p.id].navkeys[0] === true) {
                        if (b("#id_g", v).val() === "_empty") {
                            return true
                        }
                        if (X.which === a[e.p.id].navkeys[1]) {
                            b("#pData", v + "_2").trigger("click");
                            return false
                        }
                        if (X.which === a[e.p.id].navkeys[2]) {
                            b("#nData", v + "_2").trigger("click");
                            return false
                        }
                    }
                });
                if (d.checkOnUpdate) {
                    b("a.ui-jqdialog-titlebar-close span", "#" + b.jgrid.jqID(j.themodal)).removeClass("jqmClose");
                    b("a.ui-jqdialog-titlebar-close", "#" + b.jgrid.jqID(j.themodal)).unbind("click").click(function () {
                        if (!h()) {
                            return false
                        }
                        b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose});
                        return false
                    })
                }
                d.saveicon = b.extend([true, "left", "ui-icon-disk"], d.saveicon);
                d.closeicon = b.extend([true, "left", "ui-icon-close"], d.closeicon);
                if (d.saveicon[0] === true) {
                    b("#sData", v + "_2").addClass(d.saveicon[1] === "right" ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + d.saveicon[2] + "'></span>")
                }
                if (d.closeicon[0] === true) {
                    b("#cData", v + "_2").addClass(d.closeicon[1] === "right" ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + d.closeicon[2] + "'></span>")
                }
                if (a[e.p.id].checkOnSubmit || a[e.p.id].checkOnUpdate) {
                    i = "<a id='sNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>" + d.bYes + "</a>";
                    n = "<a id='nNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>" + d.bNo + "</a>";
                    u = "<a id='cNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>" + d.bExit + "</a>";
                    var w = d.zIndex || 999;
                    w++;
                    b("<div class='" + d.overlayClass + " jqgrid-overlay confirm' style='z-index:" + w + ";display:none;'>&#160;</div><div class='confirm ui-widget-content ui-jqconfirm' style='z-index:" + (w + 1) + "'>" + d.saveData + "<br/><br/>" + i + n + u + "</div>").insertAfter("#" + y);
                    b("#sNew", "#" + b.jgrid.jqID(j.themodal)).click(function () {
                        k();
                        b("#" + y).data("disabled", false);
                        b(".confirm", "#" + b.jgrid.jqID(j.themodal)).hide();
                        return false
                    });
                    b("#nNew", "#" + b.jgrid.jqID(j.themodal)).click(function () {
                        b(".confirm", "#" + b.jgrid.jqID(j.themodal)).hide();
                        b("#" + y).data("disabled", false);
                        setTimeout(function () {
                            b(":input:visible", "#" + y)[0].focus()
                        }, 0);
                        return false
                    });
                    b("#cNew", "#" + b.jgrid.jqID(j.themodal)).click(function () {
                        b(".confirm", "#" + b.jgrid.jqID(j.themodal)).hide();
                        b("#" + y).data("disabled", false);
                        b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose});
                        return false
                    })
                }
                b(e).triggerHandler("jqGridAddEditInitializeForm", [b("#" + y), E]);
                if (p) {
                    p.call(e, b("#" + y), E)
                }
                if (c === "_empty" || !a[e.p.id].viewPagerButtons) {
                    b("#pData,#nData", v + "_2").hide()
                } else {
                    b("#pData,#nData", v + "_2").show()
                }
                b(e).triggerHandler("jqGridAddEditBeforeShowForm", [b("#" + y), E]);
                if (C) {
                    C.call(e, b("#" + y), E)
                }
                b("#" + b.jgrid.jqID(j.themodal)).data("onClose", a[e.p.id].onClose);
                b.jgrid.viewModal("#" + b.jgrid.jqID(j.themodal), {gbox: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, overlay: d.overlay, modal: d.modal, overlayClass: d.overlayClass});
                if (!m) {
                    b("." + b.jgrid.jqID(d.overlayClass)).click(function () {
                        if (!h()) {
                            return false
                        }
                        b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose});
                        return false
                    })
                }
                b(e).triggerHandler("jqGridAddEditAfterShowForm", [b("#" + y), E]);
                if (K) {
                    K.call(e, b("#" + y), E)
                }
                b(".fm-button", "#" + b.jgrid.jqID(j.themodal)).hover(function () {
                    b(this).addClass("ui-state-hover")
                }, function () {
                    b(this).removeClass("ui-state-hover")
                });
                b("#sData", v + "_2").click(function () {
                    D = {};
                    b("#FormError", v).hide();
                    U();
                    if (D[e.p.id + "_id"] === "_empty") {
                        k()
                    } else {
                        if (d.checkOnSubmit === true) {
                            A = H(D, a[e.p.id]._savedData);
                            if (A) {
                                b("#" + y).data("disabled", true);
                                b(".confirm", "#" + b.jgrid.jqID(j.themodal)).show()
                            } else {
                                k()
                            }
                        } else {
                            k()
                        }
                    }
                    return false
                });
                b("#cData", v + "_2").click(function () {
                    if (!h()) {
                        return false
                    }
                    b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(B), jqm: d.jqModal, onClose: a[e.p.id].onClose});
                    return false
                });
                b("#nData", v + "_2").click(function () {
                    if (!h()) {
                        return false
                    }
                    b("#FormError", v).hide();
                    var Y = W();
                    Y[0] = parseInt(Y[0], 10);
                    if (Y[0] !== -1 && Y[1][Y[0] + 1]) {
                        b(e).triggerHandler("jqGridAddEditClickPgButtons", ["next", b("#" + y), Y[1][Y[0]]]);
                        var X;
                        if (b.isFunction(d.onclickPgButtons)) {
                            X = d.onclickPgButtons.call(e, "next", b("#" + y), Y[1][Y[0]]);
                            if (X !== undefined && X === false) {
                                return false
                            }
                        }
                        if (b("#" + b.jgrid.jqID(Y[1][Y[0] + 1])).hasClass("ui-state-disabled")) {
                            return false
                        }
                        q(Y[1][Y[0] + 1], e, y);
                        b(e).jqGrid("setSelection", Y[1][Y[0] + 1]);
                        b(e).triggerHandler("jqGridAddEditAfterClickPgButtons", ["next", b("#" + y), Y[1][Y[0]]]);
                        if (b.isFunction(d.afterclickPgButtons)) {
                            d.afterclickPgButtons.call(e, "next", b("#" + y), Y[1][Y[0] + 1])
                        }
                        G(Y[0] + 1, Y)
                    }
                    return false
                });
                b("#pData", v + "_2").click(function () {
                    if (!h()) {
                        return false
                    }
                    b("#FormError", v).hide();
                    var Y = W();
                    if (Y[0] !== -1 && Y[1][Y[0] - 1]) {
                        b(e).triggerHandler("jqGridAddEditClickPgButtons", ["prev", b("#" + y), Y[1][Y[0]]]);
                        var X;
                        if (b.isFunction(d.onclickPgButtons)) {
                            X = d.onclickPgButtons.call(e, "prev", b("#" + y), Y[1][Y[0]]);
                            if (X !== undefined && X === false) {
                                return false
                            }
                        }
                        if (b("#" + b.jgrid.jqID(Y[1][Y[0] - 1])).hasClass("ui-state-disabled")) {
                            return false
                        }
                        q(Y[1][Y[0] - 1], e, y);
                        b(e).jqGrid("setSelection", Y[1][Y[0] - 1]);
                        b(e).triggerHandler("jqGridAddEditAfterClickPgButtons", ["prev", b("#" + y), Y[1][Y[0]]]);
                        if (b.isFunction(d.afterclickPgButtons)) {
                            d.afterclickPgButtons.call(e, "prev", b("#" + y), Y[1][Y[0] - 1])
                        }
                        G(Y[0] - 1, Y)
                    }
                    return false
                })
            }
            var N = W();
            G(N[0], N)
        })
    }, viewGridRow: function (c, d) {
        d = b.extend(true, {top: 0, left: 0, width: 0, datawidth: "auto", height: "auto", dataheight: "auto", modal: false, overlay: 30, drag: true, resize: true, jqModal: true, closeOnEscape: false, labelswidth: "30%", closeicon: [], navkeys: [false, 38, 40], onClose: null, beforeShowForm: null, beforeInitData: null, viewPagerButtons: true, recreateForm: false}, b.jgrid.view, d || {});
        a[b(this)[0].p.id] = d;
        return this.each(function () {
            var y = this;
            if (!y.grid || !c) {
                return
            }
            var s = y.p.id, C = "ViewGrid_" + b.jgrid.jqID(s), u = "ViewTbl_" + b.jgrid.jqID(s), v = "ViewGrid_" + s, o = "ViewTbl_" + s, j = {themodal: "viewmod" + s, modalhead: "viewhd" + s, modalcontent: "viewcnt" + s, scrollelm: C}, B = b.isFunction(a[y.p.id].beforeInitData) ? a[y.p.id].beforeInitData : false, m = true, h = 1, g = 0;
            if (d.recreateForm === true && b("#" + b.jgrid.jqID(j.themodal))[0] !== undefined) {
                b("#" + b.jgrid.jqID(j.themodal)).remove()
            }
            function k() {
                if (a[y.p.id].closeOnEscape === true || a[y.p.id].navkeys[0] === true) {
                    setTimeout(function () {
                        b(".ui-jqdialog-titlebar-close", "#" + b.jgrid.jqID(j.modalhead)).focus()
                    }, 0)
                }
            }

            function p(M, S, Q, Y) {
                var I, L, T, W = 0, ab, ac, aa = [], R = false, X, N = "<td class='CaptionTD form-view-label ui-widget-content' width='" + d.labelswidth + "'>&#160;</td><td class='DataTD form-view-data ui-helper-reset ui-widget-content'>&#160;</td>", P = "", J = "<td class='CaptionTD form-view-label ui-widget-content'>&#160;</td><td class='DataTD form-view-data ui-widget-content'>&#160;</td>", O = ["integer", "number", "currency"], V = 0, U = 0, K, H, Z;
                for (X = 1; X <= Y; X++) {
                    P += X === 1 ? N : J
                }
                b(S.p.colModel).each(function () {
                    if (this.editrules && this.editrules.edithidden === true) {
                        L = false
                    } else {
                        L = this.hidden === true ? true : false
                    }
                    if (!L && this.align === "right") {
                        if (this.formatter && b.inArray(this.formatter, O) !== -1) {
                            V = Math.max(V, parseInt(this.width, 10))
                        } else {
                            U = Math.max(U, parseInt(this.width, 10))
                        }
                    }
                });
                K = V !== 0 ? V : U !== 0 ? U : 0;
                R = b(S).jqGrid("getInd", M);
                b(S.p.colModel).each(function (ae) {
                    I = this.name;
                    H = false;
                    if (this.editrules && this.editrules.edithidden === true) {
                        L = false
                    } else {
                        L = this.hidden === true ? true : false
                    }
                    ac = L ? "style='display:none'" : "";
                    Z = (typeof this.viewable !== "boolean") ? true : this.viewable;
                    if (I !== "cb" && I !== "subgrid" && I !== "rn" && Z) {
                        if (R === false) {
                            ab = ""
                        } else {
                            if (I === S.p.ExpandColumn && S.p.treeGrid === true) {
                                ab = b("td:eq(" + ae + ")", S.rows[R]).text()
                            } else {
                                ab = b("td:eq(" + ae + ")", S.rows[R]).html()
                            }
                        }
                        H = this.align === "right" && K !== 0 ? true : false;
                        var ai = b.extend({}, {rowabove: false, rowcontent: ""}, this.formoptions || {}), af = parseInt(ai.rowpos, 10) || W + 1, ah = parseInt((parseInt(ai.colpos, 10) || 1) * 2, 10);
                        if (ai.rowabove) {
                            var ag = b("<tr><td class='contentinfo' colspan='" + (Y * 2) + "'>" + ai.rowcontent + "</td></tr>");
                            b(Q).append(ag);
                            ag[0].rp = af
                        }
                        T = b(Q).find("tr[rowpos=" + af + "]");
                        if (T.length === 0) {
                            T = b("<tr " + ac + " rowpos='" + af + "'></tr>").addClass("FormData").attr("id", "trv_" + I);
                            b(T).append(P);
                            b(Q).append(T);
                            T[0].rp = af
                        }
                        b("td:eq(" + (ah - 2) + ")", T[0]).html("<b>" + (ai.label === undefined ? S.p.colNames[ae] : ai.label) + "</b>");
                        b("td:eq(" + (ah - 1) + ")", T[0]).append("<span>" + ab + "</span>").attr("id", "v_" + I);
                        if (H) {
                            b("td:eq(" + (ah - 1) + ") span", T[0]).css({"text-align": "right", width: K + "px"})
                        }
                        aa[W] = ae;
                        W++
                    }
                });
                if (W > 0) {
                    var ad = b("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='" + (Y * 2 - 1) + "' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='" + M + "'/></td></tr>");
                    ad[0].rp = W + 99;
                    b(Q).append(ad)
                }
                return aa
            }

            function n(K, M) {
                var H, N, J = 0, I, L;
                L = b(M).jqGrid("getInd", K, true);
                if (!L) {
                    return
                }
                b("td", L).each(function (O) {
                    H = M.p.colModel[O].name;
                    if (M.p.colModel[O].editrules && M.p.colModel[O].editrules.edithidden === true) {
                        N = false
                    } else {
                        N = M.p.colModel[O].hidden === true ? true : false
                    }
                    if (H !== "cb" && H !== "subgrid" && H !== "rn") {
                        if (H === M.p.ExpandColumn && M.p.treeGrid === true) {
                            I = b(this).text()
                        } else {
                            I = b(this).html()
                        }
                        H = b.jgrid.jqID("v_" + H);
                        b("#" + H + " span", "#" + u).html(I);
                        if (N) {
                            b("#" + H, "#" + u).parents("tr:first").hide()
                        }
                        J++
                    }
                });
                if (J > 0) {
                    b("#id_g", "#" + u).val(K)
                }
            }

            function q(I, H) {
                var J = H[1].length - 1;
                if (I === 0) {
                    b("#pData", "#" + u + "_2").addClass("ui-state-disabled")
                } else {
                    if (H[1][I - 1] !== undefined && b("#" + b.jgrid.jqID(H[1][I - 1])).hasClass("ui-state-disabled")) {
                        b("#pData", u + "_2").addClass("ui-state-disabled")
                    } else {
                        b("#pData", "#" + u + "_2").removeClass("ui-state-disabled")
                    }
                }
                if (I === J) {
                    b("#nData", "#" + u + "_2").addClass("ui-state-disabled")
                } else {
                    if (H[1][I + 1] !== undefined && b("#" + b.jgrid.jqID(H[1][I + 1])).hasClass("ui-state-disabled")) {
                        b("#nData", u + "_2").addClass("ui-state-disabled")
                    } else {
                        b("#nData", "#" + u + "_2").removeClass("ui-state-disabled")
                    }
                }
            }

            function i() {
                var I = b(y).jqGrid("getDataIDs"), H = b("#id_g", "#" + u).val(), J = b.inArray(H, I);
                return[J, I]
            }

            if (b("#" + b.jgrid.jqID(j.themodal))[0] !== undefined) {
                if (B) {
                    m = B.call(y, b("#" + C));
                    if (m === undefined) {
                        m = true
                    }
                }
                if (m === false) {
                    return
                }
                b(".ui-jqdialog-title", "#" + b.jgrid.jqID(j.modalhead)).html(d.caption);
                b("#FormError", "#" + u).hide();
                n(c, y);
                if (b.isFunction(a[y.p.id].beforeShowForm)) {
                    a[y.p.id].beforeShowForm.call(y, b("#" + C))
                }
                b.jgrid.viewModal("#" + b.jgrid.jqID(j.themodal), {gbox: "#gbox_" + b.jgrid.jqID(s), jqm: d.jqModal, jqM: false, overlay: d.overlay, modal: d.modal});
                k()
            } else {
                var A = isNaN(d.dataheight) ? d.dataheight : d.dataheight + "px", t = isNaN(d.datawidth) ? d.datawidth : d.datawidth + "px", E = b("<form name='FormPost' id='" + v + "' class='FormGrid' style='width:" + t + ";overflow:auto;position:relative;height:" + A + ";'></form>"), l = b("<table id='" + o + "' class='EditTable' cellspacing='1' cellpadding='2' border='0' style='table-layout:fixed'><tbody></tbody></table>");
                if (B) {
                    m = B.call(y, b("#" + C));
                    if (m === undefined) {
                        m = true
                    }
                }
                if (m === false) {
                    return
                }
                b(y.p.colModel).each(function () {
                    var H = this.formoptions;
                    h = Math.max(h, H ? H.colpos || 0 : 0);
                    g = Math.max(g, H ? H.rowpos || 0 : 0)
                });
                b(E).append(l);
                p(c, y, l, h);
                var z = y.p.direction === "rtl" ? true : false, G = z ? "nData" : "pData", f = z ? "pData" : "nData", w = "<a id='" + G + "' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></a>", x = "<a id='" + f + "' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></a>", F = "<a id='cData' class='fm-button ui-state-default ui-corner-all'>" + d.bClose + "</a>";
                if (g > 0) {
                    var e = [];
                    b.each(b(l)[0].rows, function (H, I) {
                        e[H] = I
                    });
                    e.sort(function (I, H) {
                        if (I.rp > H.rp) {
                            return 1
                        }
                        if (I.rp < H.rp) {
                            return -1
                        }
                        return 0
                    });
                    b.each(e, function (H, I) {
                        b("tbody", l).append(I)
                    })
                }
                d.gbox = "#gbox_" + b.jgrid.jqID(s);
                var D = b("<div></div>").append(E).append("<table border='0' class='EditTable' id='" + u + "_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='" + d.labelswidth + "'>" + (z ? x + w : w + x) + "</td><td class='EditButton'>" + F + "</td></tr></tbody></table>");
                b.jgrid.createModal(j, D, d, "#gview_" + b.jgrid.jqID(y.p.id), b("#gview_" + b.jgrid.jqID(y.p.id))[0]);
                if (z) {
                    b("#pData, #nData", "#" + u + "_2").css("float", "right");
                    b(".EditButton", "#" + u + "_2").css("text-align", "left")
                }
                if (!d.viewPagerButtons) {
                    b("#pData, #nData", "#" + u + "_2").hide()
                }
                D = null;
                b("#" + j.themodal).keydown(function (H) {
                    if (H.which === 27) {
                        if (a[y.p.id].closeOnEscape) {
                            b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: d.gbox, jqm: d.jqModal, onClose: d.onClose})
                        }
                        return false
                    }
                    if (d.navkeys[0] === true) {
                        if (H.which === d.navkeys[1]) {
                            b("#pData", "#" + u + "_2").trigger("click");
                            return false
                        }
                        if (H.which === d.navkeys[2]) {
                            b("#nData", "#" + u + "_2").trigger("click");
                            return false
                        }
                    }
                });
                d.closeicon = b.extend([true, "left", "ui-icon-close"], d.closeicon);
                if (d.closeicon[0] === true) {
                    b("#cData", "#" + u + "_2").addClass(d.closeicon[1] === "right" ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + d.closeicon[2] + "'></span>")
                }
                if (b.isFunction(d.beforeShowForm)) {
                    d.beforeShowForm.call(y, b("#" + C))
                }
                b.jgrid.viewModal("#" + b.jgrid.jqID(j.themodal), {gbox: "#gbox_" + b.jgrid.jqID(s), jqm: d.jqModal, overlay: d.overlay, modal: d.modal});
                b(".fm-button:not(.ui-state-disabled)", "#" + u + "_2").hover(function () {
                    b(this).addClass("ui-state-hover")
                }, function () {
                    b(this).removeClass("ui-state-hover")
                });
                k();
                b("#cData", "#" + u + "_2").click(function () {
                    b.jgrid.hideModal("#" + b.jgrid.jqID(j.themodal), {gb: "#gbox_" + b.jgrid.jqID(s), jqm: d.jqModal, onClose: d.onClose});
                    return false
                });
                b("#nData", "#" + u + "_2").click(function () {
                    b("#FormError", "#" + u).hide();
                    var H = i();
                    H[0] = parseInt(H[0], 10);
                    if (H[0] !== -1 && H[1][H[0] + 1]) {
                        if (b.isFunction(d.onclickPgButtons)) {
                            d.onclickPgButtons.call(y, "next", b("#" + C), H[1][H[0]])
                        }
                        n(H[1][H[0] + 1], y);
                        b(y).jqGrid("setSelection", H[1][H[0] + 1]);
                        if (b.isFunction(d.afterclickPgButtons)) {
                            d.afterclickPgButtons.call(y, "next", b("#" + C), H[1][H[0] + 1])
                        }
                        q(H[0] + 1, H)
                    }
                    k();
                    return false
                });
                b("#pData", "#" + u + "_2").click(function () {
                    b("#FormError", "#" + u).hide();
                    var H = i();
                    if (H[0] !== -1 && H[1][H[0] - 1]) {
                        if (b.isFunction(d.onclickPgButtons)) {
                            d.onclickPgButtons.call(y, "prev", b("#" + C), H[1][H[0]])
                        }
                        n(H[1][H[0] - 1], y);
                        b(y).jqGrid("setSelection", H[1][H[0] - 1]);
                        if (b.isFunction(d.afterclickPgButtons)) {
                            d.afterclickPgButtons.call(y, "prev", b("#" + C), H[1][H[0] - 1])
                        }
                        q(H[0] - 1, H)
                    }
                    k();
                    return false
                })
            }
            var r = i();
            q(r[0], r)
        })
    }, delGridRow: function (c, d) {
        d = b.extend(true, {top: 0, left: 0, width: 240, height: "auto", dataheight: "auto", modal: false, overlay: 30, drag: true, resize: true, url: "", mtype: "POST", reloadAfterSubmit: true, beforeShowForm: null, beforeInitData: null, afterShowForm: null, beforeSubmit: null, onclickSubmit: null, afterSubmit: null, jqModal: true, closeOnEscape: false, delData: {}, delicon: [], cancelicon: [], onClose: null, ajaxDelOptions: {}, processing: false, serializeDelData: null, useDataProxy: false}, b.jgrid.del, d || {});
        a[b(this)[0].p.id] = d;
        return this.each(function () {
            var s = this;
            if (!s.grid) {
                return
            }
            if (!c) {
                return
            }
            var w = b.isFunction(a[s.p.id].beforeShowForm), j = b.isFunction(a[s.p.id].afterShowForm), u = b.isFunction(a[s.p.id].beforeInitData) ? a[s.p.id].beforeInitData : false, k = s.p.id, m = {}, i = true, g = "DelTbl_" + b.jgrid.jqID(k), r, p, l, n, e = "DelTbl_" + k, f = {themodal: "delmod" + k, modalhead: "delhd" + k, modalcontent: "delcnt" + k, scrollelm: g};
            if (b.isArray(c)) {
                c = c.join()
            }
            if (b("#" + b.jgrid.jqID(f.themodal))[0] !== undefined) {
                if (u) {
                    i = u.call(s, b("#" + g));
                    if (i === undefined) {
                        i = true
                    }
                }
                if (i === false) {
                    return
                }
                b("#DelData>td", "#" + g).text(c);
                b("#DelError", "#" + g).hide();
                if (a[s.p.id].processing === true) {
                    a[s.p.id].processing = false;
                    b("#dData", "#" + g).removeClass("ui-state-active")
                }
                if (w) {
                    a[s.p.id].beforeShowForm.call(s, b("#" + g))
                }
                b.jgrid.viewModal("#" + b.jgrid.jqID(f.themodal), {gbox: "#gbox_" + b.jgrid.jqID(k), jqm: a[s.p.id].jqModal, jqM: false, overlay: a[s.p.id].overlay, modal: a[s.p.id].modal});
                if (j) {
                    a[s.p.id].afterShowForm.call(s, b("#" + g))
                }
            } else {
                var t = isNaN(a[s.p.id].dataheight) ? a[s.p.id].dataheight : a[s.p.id].dataheight + "px", o = isNaN(d.datawidth) ? d.datawidth : d.datawidth + "px", h = "<div id='" + e + "' class='formdata' style='width:" + o + ";overflow:auto;position:relative;height:" + t + ";'>";
                h += "<table class='DelTable'><tbody>";
                h += "<tr id='DelError' style='display:none'><td class='ui-state-error'></td></tr>";
                h += "<tr id='DelData' style='display:none'><td >" + c + "</td></tr>";
                h += '<tr><td class="delmsg" style="white-space:pre;">' + a[s.p.id].msg + "</td></tr><tr><td >&#160;</td></tr>";
                h += "</tbody></table></div>";
                var q = "<a id='dData' class='fm-button ui-state-default ui-corner-all'>" + d.bSubmit + "</a>", v = "<a id='eData' class='fm-button ui-state-default ui-corner-all'>" + d.bCancel + "</a>";
                h += "<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='" + g + "_2'><tbody><tr><td><hr class='ui-widget-content' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>" + q + "&#160;" + v + "</td></tr></tbody></table>";
                d.gbox = "#gbox_" + b.jgrid.jqID(k);
                b.jgrid.createModal(f, h, d, "#gview_" + b.jgrid.jqID(s.p.id), b("#gview_" + b.jgrid.jqID(s.p.id))[0]);
                if (u) {
                    i = u.call(s, b("#" + g));
                    if (i === undefined) {
                        i = true
                    }
                }
                if (i === false) {
                    return
                }
                b(".fm-button", "#" + g + "_2").hover(function () {
                    b(this).addClass("ui-state-hover")
                }, function () {
                    b(this).removeClass("ui-state-hover")
                });
                d.delicon = b.extend([true, "left", "ui-icon-scissors"], a[s.p.id].delicon);
                d.cancelicon = b.extend([true, "left", "ui-icon-cancel"], a[s.p.id].cancelicon);
                if (d.delicon[0] === true) {
                    b("#dData", "#" + g + "_2").addClass(d.delicon[1] === "right" ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + d.delicon[2] + "'></span>")
                }
                if (d.cancelicon[0] === true) {
                    b("#eData", "#" + g + "_2").addClass(d.cancelicon[1] === "right" ? "fm-button-icon-right" : "fm-button-icon-left").append("<span class='ui-icon " + d.cancelicon[2] + "'></span>")
                }
                b("#dData", "#" + g + "_2").click(function () {
                    var z = [true, ""], B, A = b("#DelData>td", "#" + g).text();
                    m = {};
                    if (b.isFunction(a[s.p.id].onclickSubmit)) {
                        m = a[s.p.id].onclickSubmit.call(s, a[s.p.id], A) || {}
                    }
                    if (b.isFunction(a[s.p.id].beforeSubmit)) {
                        z = a[s.p.id].beforeSubmit.call(s, A)
                    }
                    if (z[0] && !a[s.p.id].processing) {
                        a[s.p.id].processing = true;
                        l = s.p.prmNames;
                        r = b.extend({}, a[s.p.id].delData, m);
                        n = l.oper;
                        r[n] = l.deloper;
                        p = l.id;
                        A = String(A).split(",");
                        if (!A.length) {
                            return false
                        }
                        for (B in A) {
                            if (A.hasOwnProperty(B)) {
                                A[B] = b.jgrid.stripPref(s.p.idPrefix, A[B])
                            }
                        }
                        r[p] = A.join();
                        b(this).addClass("ui-state-active");
                        var x = b.extend({url: a[s.p.id].url || b(s).jqGrid("getGridParam", "editurl"), type: a[s.p.id].mtype, data: b.isFunction(a[s.p.id].serializeDelData) ? a[s.p.id].serializeDelData.call(s, r) : r, complete: function (E, C) {
                            var D;
                            if (E.status >= 300 && E.status !== 304) {
                                z[0] = false;
                                if (b.isFunction(a[s.p.id].errorTextFormat)) {
                                    z[1] = a[s.p.id].errorTextFormat.call(s, E)
                                } else {
                                    z[1] = C + " Status: '" + E.statusText + "'. Error code: " + E.status
                                }
                            } else {
                                if (b.isFunction(a[s.p.id].afterSubmit)) {
                                    z = a[s.p.id].afterSubmit.call(s, E, r)
                                }
                            }
                            if (z[0] === false) {
                                b("#DelError>td", "#" + g).html(z[1]);
                                b("#DelError", "#" + g).show()
                            } else {
                                if (a[s.p.id].reloadAfterSubmit && s.p.datatype !== "local") {
                                    b(s).trigger("reloadGrid")
                                } else {
                                    if (s.p.treeGrid === true) {
                                        try {
                                            b(s).jqGrid("delTreeNode", s.p.idPrefix + A[0])
                                        } catch (F) {
                                        }
                                    } else {
                                        for (D = 0; D < A.length; D++) {
                                            b(s).jqGrid("delRowData", s.p.idPrefix + A[D])
                                        }
                                    }
                                    s.p.selrow = null;
                                    s.p.selarrrow = []
                                }
                                if (b.isFunction(a[s.p.id].afterComplete)) {
                                    setTimeout(function () {
                                        a[s.p.id].afterComplete.call(s, E, A)
                                    }, 500)
                                }
                            }
                            a[s.p.id].processing = false;
                            b("#dData", "#" + g + "_2").removeClass("ui-state-active");
                            if (z[0]) {
                                b.jgrid.hideModal("#" + b.jgrid.jqID(f.themodal), {gb: "#gbox_" + b.jgrid.jqID(k), jqm: d.jqModal, onClose: a[s.p.id].onClose})
                            }
                        }}, b.jgrid.ajaxOptions, a[s.p.id].ajaxDelOptions);
                        if (!x.url && !a[s.p.id].useDataProxy) {
                            if (b.isFunction(s.p.dataProxy)) {
                                a[s.p.id].useDataProxy = true
                            } else {
                                z[0] = false;
                                z[1] += " " + b.jgrid.errors.nourl
                            }
                        }
                        if (z[0]) {
                            if (a[s.p.id].useDataProxy) {
                                var y = s.p.dataProxy.call(s, x, "del_" + s.p.id);
                                if (y === undefined) {
                                    y = [true, ""]
                                }
                                if (y[0] === false) {
                                    z[0] = false;
                                    z[1] = y[1] || "Error deleting the selected row!"
                                } else {
                                    b.jgrid.hideModal("#" + b.jgrid.jqID(f.themodal), {gb: "#gbox_" + b.jgrid.jqID(k), jqm: d.jqModal, onClose: a[s.p.id].onClose})
                                }
                            } else {
                                b.ajax(x)
                            }
                        }
                    }
                    if (z[0] === false) {
                        b("#DelError>td", "#" + g).html(z[1]);
                        b("#DelError", "#" + g).show()
                    }
                    return false
                });
                b("#eData", "#" + g + "_2").click(function () {
                    b.jgrid.hideModal("#" + b.jgrid.jqID(f.themodal), {gb: "#gbox_" + b.jgrid.jqID(k), jqm: a[s.p.id].jqModal, onClose: a[s.p.id].onClose});
                    return false
                });
                if (w) {
                    a[s.p.id].beforeShowForm.call(s, b("#" + g))
                }
                b.jgrid.viewModal("#" + b.jgrid.jqID(f.themodal), {gbox: "#gbox_" + b.jgrid.jqID(k), jqm: a[s.p.id].jqModal, overlay: a[s.p.id].overlay, modal: a[s.p.id].modal});
                if (j) {
                    a[s.p.id].afterShowForm.call(s, b("#" + g))
                }
            }
            if (a[s.p.id].closeOnEscape === true) {
                setTimeout(function () {
                    b(".ui-jqdialog-titlebar-close", "#" + b.jgrid.jqID(f.modalhead)).focus()
                }, 0)
            }
        })
    }, navGrid: function (f, h, e, g, d, c, i) {
        h = b.extend({edit: true, editicon: "ui-icon-pencil", add: true, addicon: "ui-icon-plus", del: true, delicon: "ui-icon-trash", search: true, searchicon: "ui-icon-search", refresh: true, refreshicon: "ui-icon-refresh", refreshstate: "firstpage", view: false, viewicon: "ui-icon-document", position: "left", closeOnEscape: true, beforeRefresh: null, afterRefresh: null, cloneToTop: false, alertwidth: 200, alertheight: "auto", alerttop: null, alertleft: null, alertzIndex: null}, b.jgrid.nav, h || {});
        return this.each(function () {
            if (this.nav) {
                return
            }
            var j = {themodal: "alertmod_" + this.p.id, modalhead: "alerthd_" + this.p.id, modalcontent: "alertcnt_" + this.p.id}, m = this, p, k;
            if (!m.grid || typeof f !== "string") {
                return
            }
            if (b("#" + j.themodal)[0] === undefined) {
                if (!h.alerttop && !h.alertleft) {
                    if (window.innerWidth !== undefined) {
                        h.alertleft = window.innerWidth;
                        h.alerttop = window.innerHeight
                    } else {
                        if (document.documentElement !== undefined && document.documentElement.clientWidth !== undefined && document.documentElement.clientWidth !== 0) {
                            h.alertleft = document.documentElement.clientWidth;
                            h.alerttop = document.documentElement.clientHeight
                        } else {
                            h.alertleft = 1024;
                            h.alerttop = 768
                        }
                    }
                    h.alertleft = h.alertleft / 2 - parseInt(h.alertwidth, 10) / 2;
                    h.alerttop = h.alerttop / 2 - 25
                }
                b.jgrid.createModal(j, "<div>" + h.alerttext + "</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>", {gbox: "#gbox_" + b.jgrid.jqID(m.p.id), jqModal: true, drag: true, resize: true, caption: h.alertcap, top: h.alerttop, left: h.alertleft, width: h.alertwidth, height: h.alertheight, closeOnEscape: h.closeOnEscape, zIndex: h.alertzIndex}, "#gview_" + b.jgrid.jqID(m.p.id), b("#gbox_" + b.jgrid.jqID(m.p.id))[0], true)
            }
            var q = 1, n, o = function () {
                if (!b(this).hasClass("ui-state-disabled")) {
                    b(this).addClass("ui-state-hover")
                }
            }, r = function () {
                b(this).removeClass("ui-state-hover")
            };
            if (h.cloneToTop && m.p.toppager) {
                q = 2
            }
            for (n = 0; n < q; n++) {
                var s, u = b("<table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table navtable' style='float:left;table-layout:auto;'><tbody><tr></tr></tbody></table>"), v = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>", l, t;
                if (n === 0) {
                    l = f;
                    t = m.p.id;
                    if (l === m.p.toppager) {
                        t += "_top";
                        q = 1
                    }
                } else {
                    l = m.p.toppager;
                    t = m.p.id + "_top"
                }
                if (m.p.direction === "rtl") {
                    b(u).attr("dir", "rtl").css("float", "right")
                }
                if (h.add) {
                    g = g || {};
                    s = b("<td class='ui-pg-button ui-corner-all'></td>");
                    b(s).append("<div class='ui-pg-div'><span class='ui-icon " + h.addicon + "'></span>" + h.addtext + "</div>");
                    b("tr", u).append(s);
                    b(s, u).attr({title: h.addtitle || "", id: g.id || "add_" + t}).click(function () {
                        if (!b(this).hasClass("ui-state-disabled")) {
                            if (b.isFunction(h.addfunc)) {
                                h.addfunc.call(m)
                            } else {
                                b(m).jqGrid("editGridRow", "new", g)
                            }
                        }
                        return false
                    }).hover(o, r);
                    s = null
                }
                if (h.edit) {
                    s = b("<td class='ui-pg-button ui-corner-all'></td>");
                    e = e || {};
                    b(s).append("<div class='ui-pg-div'><span class='ui-icon " + h.editicon + "'></span>" + h.edittext + "</div>");
                    b("tr", u).append(s);
                    b(s, u).attr({title: h.edittitle || "", id: e.id || "edit_" + t}).click(function () {
                        if (!b(this).hasClass("ui-state-disabled")) {
                            var w = m.p.selrow;
                            if (w) {
                                if (b.isFunction(h.editfunc)) {
                                    h.editfunc.call(m, w)
                                } else {
                                    b(m).jqGrid("editGridRow", w, e)
                                }
                            } else {
                                b.jgrid.viewModal("#" + j.themodal, {gbox: "#gbox_" + b.jgrid.jqID(m.p.id), jqm: true});
                                b("#jqg_alrt").focus()
                            }
                        }
                        return false
                    }).hover(o, r);
                    s = null
                }
                if (h.view) {
                    s = b("<td class='ui-pg-button ui-corner-all'></td>");
                    i = i || {};
                    b(s).append("<div class='ui-pg-div'><span class='ui-icon " + h.viewicon + "'></span>" + h.viewtext + "</div>");
                    b("tr", u).append(s);
                    b(s, u).attr({title: h.viewtitle || "", id: i.id || "view_" + t}).click(function () {
                        if (!b(this).hasClass("ui-state-disabled")) {
                            var w = m.p.selrow;
                            if (w) {
                                if (b.isFunction(h.viewfunc)) {
                                    h.viewfunc.call(m, w)
                                } else {
                                    b(m).jqGrid("viewGridRow", w, i)
                                }
                            } else {
                                b.jgrid.viewModal("#" + j.themodal, {gbox: "#gbox_" + b.jgrid.jqID(m.p.id), jqm: true});
                                b("#jqg_alrt").focus()
                            }
                        }
                        return false
                    }).hover(o, r);
                    s = null
                }
                if (h.del) {
                    s = b("<td class='ui-pg-button ui-corner-all'></td>");
                    d = d || {};
                    b(s).append("<div class='ui-pg-div'><span class='ui-icon " + h.delicon + "'></span>" + h.deltext + "</div>");
                    b("tr", u).append(s);
                    b(s, u).attr({title: h.deltitle || "", id: d.id || "del_" + t}).click(function () {
                        if (!b(this).hasClass("ui-state-disabled")) {
                            var w;
                            if (m.p.multiselect) {
                                w = m.p.selarrrow;
                                if (w.length === 0) {
                                    w = null
                                }
                            } else {
                                w = m.p.selrow
                            }
                            if (w) {
                                if (b.isFunction(h.delfunc)) {
                                    h.delfunc.call(m, w)
                                } else {
                                    b(m).jqGrid("delGridRow", w, d)
                                }
                            } else {
                                b.jgrid.viewModal("#" + j.themodal, {gbox: "#gbox_" + b.jgrid.jqID(m.p.id), jqm: true});
                                b("#jqg_alrt").focus()
                            }
                        }
                        return false
                    }).hover(o, r);
                    s = null
                }
                if (h.add || h.edit || h.del || h.view) {
                    b("tr", u).append(v)
                }
                if (h.search) {
                    s = b("<td class='ui-pg-button ui-corner-all'></td>");
                    c = c || {};
                    b(s).append("<div class='ui-pg-div'><span class='ui-icon " + h.searchicon + "'></span>" + h.searchtext + "</div>");
                    b("tr", u).append(s);
                    b(s, u).attr({title: h.searchtitle || "", id: c.id || "search_" + t}).click(function () {
                        if (!b(this).hasClass("ui-state-disabled")) {
                            if (b.isFunction(h.searchfunc)) {
                                h.searchfunc.call(m, c)
                            } else {
                                b(m).jqGrid("searchGrid", c)
                            }
                        }
                        return false
                    }).hover(o, r);
                    if (c.showOnLoad && c.showOnLoad === true) {
                        b(s, u).click()
                    }
                    s = null
                }
                if (h.refresh) {
                    s = b("<td class='ui-pg-button ui-corner-all'></td>");
                    b(s).append("<div class='ui-pg-div'><span class='ui-icon " + h.refreshicon + "'></span>" + h.refreshtext + "</div>");
                    b("tr", u).append(s);
                    b(s, u).attr({title: h.refreshtitle || "", id: "refresh_" + t}).click(function () {
                        if (!b(this).hasClass("ui-state-disabled")) {
                            if (b.isFunction(h.beforeRefresh)) {
                                h.beforeRefresh.call(m)
                            }
                            m.p.search = false;
                            try {
                                var x = m.p.id;
                                m.p.postData.filters = "";
                                try {
                                    b("#fbox_" + b.jgrid.jqID(x)).jqFilter("resetFilter")
                                } catch (w) {
                                }
                                if (b.isFunction(m.clearToolbar)) {
                                    m.clearToolbar.call(m, false)
                                }
                            } catch (y) {
                            }
                            switch (h.refreshstate) {
                                case"firstpage":
                                    b(m).trigger("reloadGrid", [
                                        {page: 1}
                                    ]);
                                    break;
                                case"current":
                                    b(m).trigger("reloadGrid", [
                                        {current: true}
                                    ]);
                                    break
                            }
                            if (b.isFunction(h.afterRefresh)) {
                                h.afterRefresh.call(m)
                            }
                        }
                        return false
                    }).hover(o, r);
                    s = null
                }
                k = b(".ui-jqgrid").css("font-size") || "11px";
                b("body").append("<div id='testpg2' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:" + k + ";visibility:hidden;' ></div>");
                p = b(u).clone().appendTo("#testpg2").width();
                b("#testpg2").remove();
                b(l + "_" + h.position, l).append(u);
                if (m.p._nvtd) {
                    if (p > m.p._nvtd[0]) {
                        b(l + "_" + h.position, l).width(p);
                        m.p._nvtd[0] = p
                    }
                    m.p._nvtd[1] = p
                }
                k = null;
                p = null;
                u = null;
                this.nav = true
            }
        })
    }, navButtonAdd: function (c, d) {
        d = b.extend({caption: "newButton", title: "", buttonicon: "ui-icon-newwin", onClickButton: null, position: "last", cursor: "pointer"}, d || {});
        return this.each(function () {
            if (!this.grid) {
                return
            }
            if (typeof c === "string" && c.indexOf("#") !== 0) {
                c = "#" + b.jgrid.jqID(c)
            }
            var e = b(".navtable", c)[0], g = this;
            if (e) {
                if (d.id && b("#" + b.jgrid.jqID(d.id), e)[0] !== undefined) {
                    return
                }
                var f = b("<td></td>");
                if (d.buttonicon.toString().toUpperCase() === "NONE") {
                    b(f).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'>" + d.caption + "</div>")
                } else {
                    b(f).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'><span class='ui-icon " + d.buttonicon + "'></span>" + d.caption + "</div>")
                }
                if (d.id) {
                    b(f).attr("id", d.id)
                }
                if (d.position === "first") {
                    if (e.rows[0].cells.length === 0) {
                        b("tr", e).append(f)
                    } else {
                        b("tr td:eq(0)", e).before(f)
                    }
                } else {
                    b("tr", e).append(f)
                }
                b(f, e).attr("title", d.title || "").click(function (h) {
                    if (!b(this).hasClass("ui-state-disabled")) {
                        if (b.isFunction(d.onClickButton)) {
                            d.onClickButton.call(g, h)
                        }
                    }
                    return false
                }).hover(function () {
                    if (!b(this).hasClass("ui-state-disabled")) {
                        b(this).addClass("ui-state-hover")
                    }
                }, function () {
                    b(this).removeClass("ui-state-hover")
                })
            }
        })
    }, navSeparatorAdd: function (c, d) {
        d = b.extend({sepclass: "ui-separator", sepcontent: "", position: "last"}, d || {});
        return this.each(function () {
            if (!this.grid) {
                return
            }
            if (typeof c === "string" && c.indexOf("#") !== 0) {
                c = "#" + b.jgrid.jqID(c)
            }
            var f = b(".navtable", c)[0];
            if (f) {
                var e = "<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='" + d.sepclass + "'></span>" + d.sepcontent + "</td>";
                if (d.position === "first") {
                    if (f.rows[0].cells.length === 0) {
                        b("tr", f).append(e)
                    } else {
                        b("tr td:eq(0)", f).before(e)
                    }
                } else {
                    b("tr", f).append(e)
                }
            }
        })
    }, GridToForm: function (c, d) {
        return this.each(function () {
            var g = this, e;
            if (!g.grid) {
                return
            }
            var f = b(g).jqGrid("getRowData", c);
            if (f) {
                for (e in f) {
                    if (f.hasOwnProperty(e)) {
                        if (b("[name=" + b.jgrid.jqID(e) + "]", d).is("input:radio") || b("[name=" + b.jgrid.jqID(e) + "]", d).is("input:checkbox")) {
                            b("[name=" + b.jgrid.jqID(e) + "]", d).each(function () {
                                if (b(this).val() == f[e]) {
                                    b(this)[g.p.useProp ? "prop" : "attr"]("checked", true)
                                } else {
                                    b(this)[g.p.useProp ? "prop" : "attr"]("checked", false)
                                }
                            })
                        } else {
                            b("[name=" + b.jgrid.jqID(e) + "]", d).val(f[e])
                        }
                    }
                }
            }
        })
    }, FormToGrid: function (d, e, f, c) {
        return this.each(function () {
            var i = this;
            if (!i.grid) {
                return
            }
            if (!f) {
                f = "set"
            }
            if (!c) {
                c = "first"
            }
            var g = b(e).serializeArray();
            var h = {};
            b.each(g, function (j, k) {
                h[k.name] = k.value
            });
            if (f === "add") {
                b(i).jqGrid("addRowData", d, h, c)
            } else {
                if (f === "set") {
                    b(i).jqGrid("setRowData", d, h)
                }
            }
        })
    }})
})(jQuery);
