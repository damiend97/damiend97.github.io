$(document).ready(function() {
    anime({
        targets: '.container',
        rotate: -180,
        translateX: [Math.max(document.documentElement.clientWidth, window.innerWidth || 0) ]
    })
    // Move In Animation -------------------------------->
    const moveIn = anime.timeline({
        easing: 'easeInSine',
        duration: 200
    });

    moveIn.add({
        targets: 'div.box1',
        width: '100%'
    })
    .add({
        targets: 'div.box2',
        width: '100%'
    })
    .add({
        targets: 'div.box3',
        width: '100%'
    })
    .add({
        targets: '.message',
        opacity: '100%'
    })
    .add({
        targets: 'body',
        backgroundColor: '#000'
    })

    // Move Out Animation -------------------------------->
    const moveOut = anime.timeline({
        easing: 'easeInSine',
        duration: 200
    });

    // One time click event
    $('.message').one('click', () => {
        moveOut.add({
            targets: 'div.box1',
            width: '0px',
            marginLeft: '100%'
        })
        .add({
            targets: 'div.box2',
            width: '0px',
            marginLeft: '100%'
        })
        .add({
            targets: 'div.box3',
            width: '0px',
            marginLeft: '100%'
        })
    })

    // Clear DOM/Launch -------------------------------->
    const msg = $('.message');
    const boxes = $('.box');
    const launch = () => {
        msg.fadeToggle(1000);
        setTimeout(() => {
            document.getElementById('msgTxt').innerHTML = '<div class="stagger-grid"><div class="col"><div class="row row-corner-tl"></div><div class="row"></div><div class="row row-corner-tr"></div></div><div class="col"><div class="row"></div><div class="row"></div><div class="row"></div></div><div class="col"><div class="row row-corner-bl"></div><div class="row"></div><div class="row row-corner-br"></div></div></div>';
            msg.fadeToggle(1000);
            boxes.remove();
            setTimeout(() => {
                const spin = anime.timeline({
                    targets: '.stagger-grid',
                    easing: 'easeInOutSine',
                    duration: 5000,
                    rotate: 3645
                })
                .add({
                    targets: '.row',
                    duration: 5000,
                    borderRadius: '50%',
                    backgroundColor: 'rgb(64, 64, 255)'
                })
                .add({
                    targets: '.row',
                    duration: 500,
                    scale: .5
                })

                $('.container').css('display','block');
                $('body').css('overflow','scroll');

                const dispContainer = () => {
                    anime({
                        targets: '.container',
                        easing: 'easeInOutSine',
                        rotate: -360,
                        translateX: 0
                    })
                }

                spin.finished.then(dispContainer)
            }, 1000)
        }, 1000);
    }

    moveOut.finished.then(launch)

});
