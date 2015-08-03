function solve() {
    function isValidElement(element) {
        if (element === undefined) {
            throw new Error('Selector is undefined');
        }

        if (typeof element !== 'string' && !(element instanceof jQuery)) {
            throw new Error('Not valid selector');
        }

        var el = $(element);
        if (el.length === 0) {
            throw new Error('There is no such DOM element');
        }
    }

    return function (selector) {
        isValidElement(selector);
        var $element;

        if (typeof selector === 'string') {
            $element = $(selector);
        } else {
            $element = selector;
        }

        $element.children('.button').html('hide');

        $element.on('click', '.button', function () {
            var $clickedElement = $(this),
                $next = $clickedElement.next();
            while ($next.length > 0) {
                if ($next.hasClass('button')) {
                    break;
                } else if ($next.hasClass('content')) {
                    if ($next.css('display') === 'none') {
                        $next.css('display', '');
                        $clickedElement.html('hide');
                    } else {
                        $next.css('display', 'none');
                        $clickedElement.html('show');
                    }
                    break;
                } else {
                    $next = $next.next();
                }
            }
        });
    };
}

module.exports = solve;