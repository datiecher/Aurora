/*!
 * Aurora User Interface Library v0.1
 * http://auroraui.org/
 *
 * Licensed under the MIT license.
 * http://auroraui.org/license
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
(function(window, undefined) {
    var aurora = {

        // Local scopes document, navigator and location based on the correct global
        // objects for performance reasons
        document: window.document,
        navigator: window.navigator,
        location: window.location
    };

    // Defines Aurora core library as an AMD module
    define('aurora/base', [], function(aurora){ return aurora });
})(window);

/*
$(document).ready(function() {
    $('button.aurora').mousedown(function() {
        $(this).addClass('pressed');
    });

    $('button.aurora').mouseup(function() {
        $(this).removeClass('pressed');
    });

    $('button.aurora').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    Aurora.init();
});

(function(root, Aurora) {
  if (typeof define === 'function' && define.amd) { define(Aurora); }
  else { root.Aurora = Aurora; }
})(this, (function(){
    Themes : {
        avaibleThemes: ['graffiti'],
        defaultTheme: 'graffiti',
        getThemeName: function() {
            var themeLink = $('link#theme').attr('href');
            var splited = themeLink.split('/');
            var theme = splited[splited.length - 1].split('.')[0];

            if ($.inArray(theme, this.avaibleThemes) === 0) {
                return theme
            } else {
                return this.defaultTheme;
            }
        }
    },
    init: function() {
        this.CheckboxManager.createCheckboxes();
        this.RadioButtonManager.createRadioButtons();
    },
    CheckboxManager: {
        checkboxHtml: '<div class="au_checkbox" rel="id"></div>',
        createCheckboxes: function() {
            var e = this;
            
            $('input[type="checkbox"].au_checkbox').each(function() {
                $(this).before(e.checkboxHtml);
                $(this).hide();

                var checkboxElement = $('div[rel="id"]');
                checkboxElement.attr('rel', $(this).attr('id'));

                if ($(this).attr('checked') === 'checked') {
                    checkboxElement.addClass('au_marked');
                }

                checkboxElement.click(function() {
                    var element = $(this);
                    if (element.hasClass('au_marked')) {
                        element.removeClass('au_marked');
                    } else {
                        element.addClass('au_marked');
                    }

                    $('input[type="checkbox"]#' + element.attr('rel')).click();
                });
            });
        }
    },
    RadioButtonManager: {
        radioButtonHtml: '<div class="au_radio_button" rel="id"></div>',
        createRadioButtons: function() {
            var e = this;

            $('input[type="radio"].au_radio_button').each(function() {
                $(this).before(e.radioButtonHtml);
                $(this).hide();

                var radioButtonElement = $('div[rel="id"]');
                radioButtonElement.attr('rel', $(this).attr('id'))

                if ($(this).attr('checked') === 'checked') {
                    $('div.au_radio_button').removeClass('au_marked');
                    radioButtonElement.addClass('au_marked');
                }

                radioButtonElement.click(function() {
                    $('div.au_radio_button').removeClass('au_marked');
                    $(this).addClass('au_marked');

                    $('input[type="radio"]#' + $(this).attr('rel')).click();
                });
            });
        }
    }
}());