module.exports = function () {
    function isValidElement(element) {
        if (!element) {
            throw new Error('Element is undefined');
        }

        if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
            throw new Error();
        }
    }

    function isValidContents(array) {
        if (!array || !Array.isArray(array)) {
            throw new Error('Contents is undefined');
        }

        for (var i = 0, len = array.length; i < len; i += 1) {
            isValidArrayElement(array[i]);
        }

        function isValidArrayElement(el) {
            if (typeof el !== 'string' && typeof el !== 'number') {
                throw new Error('Elements of the array are neither strings nor numbers');
            }
        }
    }

    return function (element, contents) {
        isValidElement(element);
        isValidContents(contents);

        var selectedElement, firstChild, div, fragment, i, len, divToAdd;
        if (typeof element === 'string') {
            selectedElement = document.getElementById(element);
        } else {
            selectedElement = element;
        }

        firstChild = selectedElement.firstChild;
        while (selectedElement.firstChild) {
            selectedElement.removeChild(firstChild);
            firstChild = firstChild.nextSibling;
        }

        div = document.createElement('div');
        fragment = document.createDocumentFragment();

        for (i = 0, len = contents.length; i < len; i += 1) {
            divToAdd = div.cloneNode(true);
            divToAdd.innerHTML = contents[i];
            fragment.appendChild(divToAdd);
        }

        selectedElement.appendChild(fragment);
    };
};