// globals
const $hamburger = $('.hamburger')
const $links = $('.link')
let show = false;
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
}

$hamburger.on('click', showMenu)

// $.ajax({ url: 'https://spreadsheets.google.com/feeds/list/1VxZmlh7dJvvnNSIJQEof1Lxx4aZHQHk8Iq3ngcc9VFg/1/public/full?alt=json'}).then(data => {
//     console.log(data.feed.entry)
//     const entries= data.feed.entry
//     const $div = $('.carousel-1')
//     entries.forEach(entry => {
//         const $tray= $('<div>')
//         let $img= $('<img>')
//         $tray.addClass('slider1')
//         let $p= $('<p>')
//         $p.text(entry.gsx$description.$t)
//         $img.attr('src', entry.gsx$img.$t)
//         $tray.append($img, $p)
//         $div.append($tray)
//     });
// })

$.ajax({ url: 'https://spreadsheets.google.com/feeds/list/1VxZmlh7dJvvnNSIJQEof1Lxx4aZHQHk8Iq3ngcc9VFg/1/public/full?alt=json' }).then(data => {
    console.log(data.feed.entry)
    // $('slider1') = $tray.forEach()
    // let images =1;
    // $(slider1(){
    //     = $.makeArray($('$tray'))
    // });
    const entries = data.feed.entry
    const $div = $('.carousel-1')
    entries.forEach(entry => {
        const $tray = $('<div>')
        let $img = $('<img>')
        $tray.addClass('slider1')
        let $p = $('<p>')
        $p.text(entry.gsx$description.$t)
        $img.attr('src', entry.gsx$img.$t)
        $tray.append($img, $p)
        $div.append($tray)
    });
    
})


$.ajax({ url: 'https://spreadsheets.google.com/feeds/list/1VxZmlh7dJvvnNSIJQEof1Lxx4aZHQHk8Iq3ngcc9VFg/2/public/full?alt=json' }).then(data => {
    console.log(data.feed.entry)
    const entries = data.feed.entry
    const $div = $('.carousel-2')
    entries.forEach(entry => {
        let $img = $('<img>')
        let $p = $('<p>')
        $p.text(entry.gsx$description.$t)
        $img.attr('src', entry.gsx$img.$t)
        $div.append($img)
        $div.append($p)
    });
})

$.ajax({ url: 'https://spreadsheets.google.com/feeds/list/1VxZmlh7dJvvnNSIJQEof1Lxx4aZHQHk8Iq3ngcc9VFg/3/public/full?alt=json' }).then(data => {
    console.log(data.feed.entry)
    const entries = data.feed.entry
    const $div = $('.carousel-3')
    entries.forEach(entry => {
        let $img = $('<img>')
        let $p = $('<p>')
        $p.text(entry.gsx$description.$t)
        $img.attr('src', entry.gsx$img.$t)
        $div.append($img)
        $div.append($p)
    });
})