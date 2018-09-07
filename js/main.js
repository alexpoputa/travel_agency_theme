// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {}); // make the menu for medium-low screens working

// Slider
var slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false, // dots won't show
    height: 500,
    transition: 500,
    interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Florida": null,
        "California": null,
        "Cancun": null,
        "Hawaii": null,
        "Jamaica": null,
        "Europe": null
    }
});

// Matirial Boxed (Gallery)
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});
