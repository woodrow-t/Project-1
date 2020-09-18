// globals
const $hamburger = $('.hamburger');
const $links = $('.link');
const $img = $('img');
const $back = $('#back')
const $forward = $('#forward')
let show = false;
let image = 1;

//  handler for click event
const showMenu = (event) => {
    if (show) {
        $links.each(function (index) {
            $(this).css('display', 'none')
        })
        show = false
    } else {
        $links.each(function(index){
            $(this).css('display', 'block')
        })
        show = true
    }
};

// hamburger click function
$hamburger.on('click', showMenu)

// make an ajax requesting info from a spreadsheet
$.ajax({ url: 'https://spreadsheets.google.com/feeds/list/1VxZmlh7dJvvnNSIJQEof1Lxx4aZHQHk8Iq3ngcc9VFg/1/public/full?alt=json'}).then(data => {
    // setting up variables
    console.log(data.feed.entry)
    const entries= data.feed.entry
    const $div = $('.carousel-1')
    // function for creating a tray for each entry and attaching to a div element
    entries.forEach(entry => {
        // sets tray to a div element that is inserted
        const $tray= $('<div>')
        // allows img element to be inserted
        let $img= $('<img>')
        // add .slider class to tray
        $tray.addClass('slider1')
        // allows p element to be inserted
        let $p= $('<p>')
        // where to find the elements
        $p.text(entry.gsx$description.$t)
        $img.attr('src', entry.gsx$img.$t)
        // attach elements to tray
        $tray.append($img, $p)
        // attach tray to div container
        $div.append($tray)
    });
    // setting variables
    const $trays = $('.slider1')
    // limits the tray length to initiate a loop
    const max = $trays.length
    let current = 0;
    // function activating the display when the index matches the current value
    const visible = (i) =>{
        $trays.each(function (index) {
            const slide = $(this)
            if (index == i) {
                slide.css('display', 'block')
            } else {
                slide.css('display', 'none')
            }
        });
    }
    visible(current)
    // click function adding a value to the index and then creating an if else statement to run the visible function
    const forward = $('#forward1')
    forward.on('click', ()=>{
        current++
        if (current < max) {
            visible(current)
        } else {
            current = 0;
            visible(current)
        }
    });
    // Same thing, only now it reduces value by 1, then checks to see if index is not less than zero, otherwise it removes a value based on the 
    const back = $('#back1')
    back.on('click', () => {
        current--
        if (current > -1) {
            visible(current)
        } else {
            current = $trays.length - 1;
            visible(current)
        }
    });

});



$.ajax({ url: 'https://spreadsheets.google.com/feeds/list/1VxZmlh7dJvvnNSIJQEof1Lxx4aZHQHk8Iq3ngcc9VFg/2/public/full?alt=json' }).then(data => {
    // setting up variables
    console.log(data.feed.entry)
    const entries = data.feed.entry
    const $div = $('.carousel-2')
    entries.forEach(entry => {
        const $tray = $('<div>')
        let $img = $('<img>')
        $tray.addClass('slider2')
        let $p = $('<p>')
        $p.text(entry.gsx$description.$t)
        $img.attr('src', entry.gsx$img.$t)
        
        $tray.append($img, $p)
        $div.append($tray)
    });
    
    const $trays = $('.slider2')
    const max = $trays.length
    let current = 0;
    
    const visible = (i) => {
        $trays.each(function (index) {
            const slide = $(this)
            if (index == i) {
                slide.css('display', 'block')
            } else {
                slide.css('display', 'none')
            }
        });
    }
    visible(current)

    const forward = $('#forward2')
    forward.on('click', () => {
        current++
        if (current < max) {
            visible(current)
        } else {
            current = 0;
            visible(current)
        }
    });

    const back = $('#back2')
    back.on('click', () => {
        current--
        if (current > -1) {
            visible(current)
        } else {
            current = $trays.length - 1;
            visible(current)
        }
    });
});

$.ajax({ url: 'https://spreadsheets.google.com/feeds/list/1VxZmlh7dJvvnNSIJQEof1Lxx4aZHQHk8Iq3ngcc9VFg/3/public/full?alt=json' }).then(data => {
    // setting up variables
    console.log(data.feed.entry)
    const entries = data.feed.entry
    const $div = $('.carousel-3')
    entries.forEach(entry => {
        const $tray = $('<div>')
        let $img = $('<img>')
        $tray.addClass('slider3')
        let $p = $('<p>')
        $p.text(entry.gsx$description.$t)
        $img.attr('src', entry.gsx$img.$t)

        $tray.append($img, $p)
        $div.append($tray)
    });

    const $trays = $('.slider3')
    const max = $trays.length
    let current = 0;

    const visible = (i) => {
        $trays.each(function (index) {
            const slide = $(this)
            if (index == i) {
                slide.css('display', 'block')
            } else {
                slide.css('display', 'none')
            }
        });
    }
    visible(current)

    const forward = $('#forward3')
    forward.on('click', () => {
        current++
        if (current < max) {
            visible(current)
        } else {
            current = 0;
            visible(current)
        }
    });

    const back = $('#back3')
    back.on('click', () => {
        current--
        if (current > -1) {
            visible(current)
        } else {
            current = $trays.length - 1;
            visible(current)
        }
    });
});