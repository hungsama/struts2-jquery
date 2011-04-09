;(function($){
/**
 * jqGrid Italian Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = {
        defaults : {
                recordtext: "Visualizzati {0} - {1} di {2}",
                emptyrecords: "Nessun record da visualizzare",
                loadtext: "Caricamento...",
                pgtext : "Pagina {0} di {1}"
        },
        search : {
                caption: "Ricerca...",
                Find: "Cerca",
                Reset: "Pulisci",
                odata : ['uguale', 'diverso', 'minore', 'minore o uguale','maggiore','maggiore o uguale', 'inizia con','non inizia con','in','non in','termina con','non termina con','contiene','non contiene'],
                groupOps: [     { op: "AND", text: "tutto" },   { op: "OR",  text: "almeno uno" }       ],
                matchText: " corrisponde",
                rulesText: " regole"
        },
        edit : {
                addCaption: "Aggiungi Record",
                editCaption: "Modifica Record",
                bSubmit: "Invia",
                bCancel: "Annulla",
                bClose: "Chiudi",
                saveData: "Alcuni dati modificati! Salvare i cambiamenti?",
                bYes : "Si",
                bNo : "No",
                bExit : "Esci",
                msg: {
                        required:"Campo richiesto",
                        number:"Per favore, inserisci un valore valido",
                        minValue:"il valore deve essere maggiore o uguale a ",
                        maxValue:"il valore deve essere minore o uguale a",
                        email: "e-mail non corretta",
                        integer: "Per favore, inserisci un numero intero valido",
                        date: "Per favore, inserisci una data valida",
                        url: "URL non valido. Prefisso richiesto ('http://' or 'https://')",
                        nodefined : " non ? definito!",
                        novalue : " valore di ritorno richiesto!",
                        customarray : "La funzione custom deve tornare un array!",
                        customfcheck : "La funzione custom deve esistere per il custom checking!"
                       
                }
        },
        view : {
                caption: "Visualizzazione Record",
                bClose: "Chiudi"
        },
        del : {
                caption: "Cancella",
                msg: "Cancellare record selezionato/i??",
                bSubmit: "Invia",
                bCancel: "Annulla"
        },
        nav : {
                edittext: " ",
                edittitle: "Modifica record selezionato",
                addtext:" ",
                addtitle: "Aggiungi nuovo record",
                deltext: "",
                deltitle: "Cancella record selezionato",
                searchtext: " ",
                searchtitle: "Ricerca record",
                refreshtext: "",
                refreshtitle: "Aggiorna griglia",
                alertcap: "Attenzione",
                alerttext: "Per favore, seleziona un record",
                viewtext: "",
                viewtitle: "Visualizza riga selezionata"
        },
        col : {
                caption: "Seleziona colonne",
                bSubmit: "Invia",
                bCancel: "Annulla"
        },
        errors : {
                errcap : "Errore",
                nourl : "Url non settata",
                norecords: "Nessun record da elaborare",
                model : "Lunghezza di colNames <> colModel!"
        },
        formatter : {
                integer : {thousandsSeparator: " ", defaultValue: '0'},
                number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
                currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
                date : {
                        dayNames:   [
                                "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab",
                                "Domenica", "Luned?", "Marted?", "Mercoled?", "Gioved?", "Venerd?", "Sabato"
                        ],
                        monthNames: [
                                "Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dec",
                                "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
                        ],
                        AmPm : ["am","pm","AM","PM"],
                        S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
                        srcformat: 'Y-m-d',
                        newformat: 'd/m/Y',
                        masks : {
                                ISO8601Long:"Y-m-d H:i:s",
                                ISO8601Short:"Y-m-d",
                                ShortDate: "n/j/Y",
                                LongDate: "l, F d, Y",
                                FullDateTime: "l, F d, Y g:i:s A",
                                MonthDay: "F d",
                                ShortTime: "g:i A",
                                LongTime: "g:i:s A",
                                SortableDateTime: "Y-m-d\\TH:i:s",
                                UniversalSortableDateTime: "Y-m-d H:i:sO",
                                YearMonth: "F, Y"
                        },
                        reformatAfterEdit : false
                },
                baseLinkUrl: '',
                showAction: '',
                target: '',
                checkbox : {disabled:true},
                idName : 'id'
        }
};
})(jQuery);

