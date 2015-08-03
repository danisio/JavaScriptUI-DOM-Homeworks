function solve() {
    return function (selector) {
        var $element = $(selector).hide(),
            $divDropDown,
            $divCurrent,
            $divContainer,
            options;

        if ($element.length === 0) {
            throw new Error('There is no such element in DOM');
        }

        options = $element.find('option');

        $divDropDown = $('<div/>')
            .addClass('dropdown-list')
            .append($element);

        $divCurrent = $('<div/>')
            .addClass('current')
            .attr('data-value', options.val())
            .text($(options[0]).text())
            .appendTo($divDropDown);

        $divContainer = $('<div/>')
            .addClass('options-container')
            .hide()
            .appendTo($divDropDown);

        for (var i = 0; i < options.length; i++) {
            $('<div/>')
                .addClass('dropdown-item')
                .attr({
                    'data-value': $(options[i]).val(),
                    'data-index': i
                })
                .text($(options[i]).text())
                .appendTo($divContainer);
        }

        $divCurrent.click(function () {
            $(this).text('Select a value');
            $divContainer.show();
        });

        $divContainer.on('click', '.dropdown-item', function () {
            var $this = $(this);
            $divContainer.hide();

            $divCurrent
                .text($this.text())
                .attr('data-value', $this.attr('data-value'));


            $element.val($this.attr('data-value')); //?
        });

        $divDropDown.prependTo(document.body);
    };
}

module.exports = solve;