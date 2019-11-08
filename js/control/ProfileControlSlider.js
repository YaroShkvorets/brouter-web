BR.ProfileControlSlider = L.Class.extend({
    options: {
        id: '',
        reversed: true,
        orientation: 'horizontal',
        defaultValue: 0.5,
        title: '',
        callback: function(value) {}
    },

    initialize: function(options) {
        L.setOptions(this, options);

        var input = (this.input = $('<input id="slider-' + this.options.id + '" type="text"/>')),
            item = BR.Util.localStorageAvailable() ? localStorage['profileControlSlider' + this.options.id] : null,
            value = item ? parseFloat(item) : options.defaultValue;
        value = options.defaultValue; //remove this line to load value from local storage

        if (value < 0) {
            value = 0;
        }
        if (value > 1) {
            value = 1;
        }

        input
            .slider({
                id: this.options.id,
                min: 0,
                max: 1,
                step: 0.1,
                value: value,
                orientation: this.options.orientation,
                reversed: this.options.reversed,
                selection: this.options.reversed ? 'before' : 'after' // inverted, serves as track style, see css
            })
            .on('slideStop', { self: this }, function(evt) {
                if (BR.Util.localStorageAvailable()) {
                    localStorage['profileControlSlider' + evt.data.self.options.id] = evt.value;
                }
                evt.data.self.options.callback(evt.value);
            });

        this.getElement().title = this.options.title;

        this.options.callback(value);
    },

    getElement: function() {
        return this.input.slider('getElement');
    }
});
