function solve() {
    function isValidElement(element) {
        if (!element || element === undefined) {
            throw new Error('Element is undefined');
        }

        if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
            throw new Error('There is no such DOM element');
        }

        var el = document.getElementById(element);
        if (el === null) {
            throw new Error();
        }
    }

    return function (selector) {
        isValidElement(selector);
        var element, allElementsClassButton, i, len;

        if (typeof selector === 'string') {
            element = document.getElementById(selector);
        } else {
            element = selector;
        }

        allElementsClassButton = element.getElementsByClassName('button');

        for (i = 0, len = allElementsClassButton.length; i < len; i += 1) {
            allElementsClassButton[i].innerHTML = 'hide';
        }

        element.addEventListener('click', function (ev) {
            var clickedElement = ev.target,
                next = clickedElement.nextElementSibling;

            while (next !== null) {
                if (next.className === 'button') {
                    break;
                } else if (next.className === 'content') {
                    if (next.style.display === 'none') {
                        next.style.display = '';
                        ev.target.innerHTML = 'hide';
                    } else {
                        next.style.display = 'none';
                        ev.target.innerHTML = 'show';
                    }
                    break;
                } else {
                    next = next.nextElementSibling;
                }
            }
        }, false);
    };
}
module.exports = solve;