function solve() {
    return function () {
        $.fn.listview = function (data) {
            var templateHTML = $('#' + this.attr('data-template')).html();
            var template = Handlebars.compile(templateHTML);

            for(var i = 0, len = data.length; i < len; i += 1){
                this.append(template(data[i]));
            }

            return this;
        };
    };
}

module.exports = solve;