function solve() {
    function isValidSelector(selector) {
        if (!selector) {
            throw new Error('Selector is undefined');
        }

        if (selector === null) {
            throw new Error('Selector is NULL');
        }

        if (typeof selector !== 'string') {
            throw new Error('Selector is not a string');
        }
    }

    function isValidCount(count) {
        if (!count) {
            throw new Error('Count is undefined');
        }

        var isNumber = /^\d+$/.test(count);
        if (!isNumber) {
            throw new Error('Count is not a number');
        }

        if (count < 1) {
            throw new Error('Count cannot be less than 1');
        }
    }

    return function (selector, count) {
        isValidSelector(selector);
        isValidCount(count);

        var $generatedUL = $('<ul/>').addClass('items-list');
        for (var i = 0; i < count; i += 1) {
            $('<li/>')
                .html('List item #' + i)
                .addClass('list-item')
                .appendTo($generatedUL);
        }

        $(selector).append($generatedUL);
    };
}

module.exports = solve;