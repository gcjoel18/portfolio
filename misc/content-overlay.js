(function(window) {

  'use strict';

  /**
   * Extend Object helper function.
   */
  function extend(a, b) {
    for(var key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * Each helper function.
   */
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  /**
   * Overlay Constructor.
   */
  function Overlay(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  /**
   * Overlay Options.
   */
  Overlay.prototype.options = {
    wrapper: '#wrapper',                          // The content wrapper
    type: 'push-right',                           // The overlay type
    overlayOpenerClass: '.content-open-button',   // The overlay opener class names (i.e. the buttons)
    maskId: '#content-mask'                       // The ID of the mask
  };

  /**
   * Initialise Overlay.
   */
  Overlay.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.mask = document.querySelector(this.options.maskId);
    this.overlay = document.querySelector('#content-overlay--' + this.options.type);
    this.closeBtn = this.overlay.querySelector('.content-overlay-close');
    this.overlayOpeners = document.querySelectorAll(this.options.overlayOpenerClass);
    this._initEvents();
  };

  /**
   * Initialise Overlay Events.
   */
  Overlay.prototype._initEvents = function() {
    // Event for clicks on the close button inside the overlay.
    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the mask.
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  /**
   * Open Overlay.
   */
  Overlay.prototype.open = function() {
    this.body.classList.add('has-active-overlay');
    this.wrapper.classList.add('has-' + this.options.type);
    this.overlay.classList.add('is-active');
    this.mask.classList.add('is-active');
    this.disableOverlayOpeners();
  };

  /**
   * Close Overlay.
   */
  Overlay.prototype.close = function() {
    this.body.classList.remove('has-active-overlay');
    this.wrapper.classList.remove('has-' + this.options.type);
    this.overlay.classList.remove('is-active');
    this.mask.classList.remove('is-active');
    this.enableOverlayOpeners();
  };

  /**
   * Disable Overlay Openers.
   */
  Overlay.prototype.disableOverlayOpeners = function() {
    each(this.overlayOpeners, function(item) {
      item.disabled = true;
    });
  };

  /**
   * Enable Overlay Openers.
   */
  Overlay.prototype.enableOverlayOpeners = function() {
    each(this.overlayOpeners, function(item) {
      item.disabled = false;
    });
  };

  /**
   * Add to global namespace.
   */
  window.Overlay = Overlay;

})(window);
