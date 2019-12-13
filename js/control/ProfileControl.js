BR.ProfileControl = L.Evented.extend({
    cache: {},
    profileText: '',
    profileParams: [],

    initialize: function() {
        //L.DomUtil.get('apply').onclick = L.bind(this._apply, this);
        //L.DomUtil.get('clear').onclick = L.bind(this.clear, this);

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

    setProfileParams: function(params){
      this.profileParams = params;
    },

    update: function(options, params=[]) {
        var profileName = options.profile,
            profileUrl;
        for (let key of Object.keys(params)) {
            if(key.indexOf("PenaltyParam")!=-1){
              this.profileParams[key] = parseFloat(params[key]);
            }
        }
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

    getParamsUrl: function() {
      var ret = '';
      for (let key of Object.keys(this.profileParams)) {
        ret += '&'+key + '=' + this.profileParams[key];
      }
      return ret;
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
        this._makeControl(
            'roadsPen',
            'Avoid unsafe roads',
            'Avoid dangerous roads, taking into account road type, number of car lanes, speed limit and cycling facilities'
        );
        this._makeControl('sidewalkPen', 'Avoid sidewalks', 'Avoid sidewalks and narrow footpaths');
        this._makeControl('surfacePen', 'Avoid wet feet', 'Avoid unpaved pathways and roads');
        this._makeControl('litPen', 'Avoid dark alleys', 'Avoid unlit pathways and roads');
        this._makeControl('plowPen', 'Avoid snowbanks', 'Avoid non-plowed pathways');
        this._makeControl('stopSignPen', 'Avoid stops and lights', 'Avoid stop signs and traffic lights');
    },

    _makeControl: function(sliderId, sliderTitle, hint) {
        var filter = new RegExp(this.escapeRegex(sliderId) + '(\\s+)?=(\\s+)?(\\d+(\\.\\d+)?)', 'g');
        var match = filter.exec(this.profileText);
        if(!Array.isArray(match) || match.length < 3){  //this profile has no such param
          return;
        }
        var defaultValue = this.profileParams[sliderId]==null ? parseFloat(match[3]) : this.profileParams[sliderId];
        this.profileParams[sliderId] = defaultValue;
        var slider = this._makeSlider(sliderId, hint, defaultValue);
        var div = document.createElement('div');
        var label = document.createElement('label');
        label.className = 'profile-slider-label';
        label.innerHTML = sliderTitle;

        L.DomUtil.get('leaflet-control-layers-profile-control-slider').appendChild(div);
        div.appendChild(label);
        div.appendChild(slider.getElement());
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
                const profile = this.parent._generateProfile();

                this.parent.fire('update', {
                    profileText: profile
                });
            }
        });
        return slider;
    }
});
