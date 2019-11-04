BR.ProfileControl = L.Evented.extend({
    cache: {},
    profileText: '',
    profileParams: [],

    initialize: function() {
        L.DomUtil.get('apply').onclick = L.bind(this._apply, this);
        L.DomUtil.get('clear').onclick = L.bind(this.clear, this);

        this.message = new BR.Message('profile_message', {
            alert: true
        });
    },

    clear: function(evt) {
        var button = evt.target || evt.srcElement;

        evt.preventDefault();
        this._setProfile('');

        this.fire('clear');
        button.blur();
    },

    update: function(options) {
        var profileName = options.profile,
            profileUrl;

        this.profileName = profileName;
        if (profileName && BR.conf.profilesUrl) {
            if (!(profileName in this.cache)) {
                profileUrl = BR.conf.profilesUrl + profileName + '.brf';
                BR.Util.get(
                    profileUrl,
                    L.bind(function(err, profileText) {
                        if (err) {
                            console.warn('Error getting profile from "' + profileUrl + '": ' + err);
                            return;
                        }

                        this.cache[profileName] = profileText;

                        // don't set when option has changed while loading
                        if (!this.profileName || this.profileName === profileName) {
                            this._setProfile(profileText);
                        }
                    }, this)
                );
            } else {
                this._setProfile(this.cache[profileName]);
            }
        }
    },

    show: function() {
        //this.editor.refresh();
    },

    onResize: function() {
        //this.editor.refresh();
    },

    escapeRegex: function(value) {
        return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
    },

    _generateProfile: function() {
        var profile = this.profileText;
        //configure profile text based on sliders
        for (let key of Object.keys(this.profileParams)) {
            var filter = new RegExp(this.escapeRegex(key) + '(\\s+)?=(\\s+)?\\d+(\\.\\d+)?', 'g');
            profile = profile.replace(filter, key + ' = ' + this.profileParams[key]);
        }
        return profile;
    },

    _apply: function(evt) {
        var button = evt.target || evt.srcElement,
            profile = this._generateProfile();

        this.message.hide();
        $(button).button('uploading');
        evt.preventDefault();

        this.fire('update', {
            profileText: profile,
            callback: function() {
                $(button).button('reset');
                $(button).blur();
            }
        });
    },

    _setProfile: function(profileText) {
        this.profileText = profileText;
        this._initControls(profileText);
    },

    _initControls: function(profileText) {
        this._makeControl('roadsPenaltyParam', 'Roads');
        this._makeControl('sidewalkPenaltyParam', 'Sidewalks');
        this._makeControl('surfacePenaltyParam', 'Surface');
        this._makeControl('litPenaltyParam', 'Lit');
    },

    _makeControl: function(sliderId, sliderTitle) {
        var filter = new RegExp(this.escapeRegex(sliderId) + '(\\s+)?=(\\s+)?(\\d+(\\.\\d+)?)', 'g');
        var defaultValue = parseFloat(filter.exec(this.profileText)[3]);
        this.profileParams[sliderId] = defaultValue;
        var slider = this._makeSlider(sliderId, sliderTitle, defaultValue);
        var label = document.createElement('label');
        label.innerHTML = sliderTitle;

        L.DomUtil.get('leaflet-control-layers-profile-control-slider').appendChild(label);
        L.DomUtil.get('leaflet-control-layers-profile-control-slider').appendChild(slider.getElement());
    },

    _makeSlider: function(sliderId, sliderTitle, defaultValue) {
        var slider = new BR.ProfileControlSlider({
            id: sliderId,
            reversed: false,
            defaultValue: defaultValue,
            title: sliderTitle,
            parent: this,
            callback: function(value) {
                this.parent.profileParams[sliderId] = value;
            }
        });
        return slider;
    }
});
