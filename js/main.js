$(document).ready(() => {

    $('.menu-item').click((e) => {
        let currentElement = $(e.target)
        $('.menu-item').removeClass('active')
        currentElement.addClass('active')
    });

    $('.select').focus((e) => {
        let currentSelect = $(e.target);
        currentSelect.next().addClass('select-active')

    });

    $('.select').focusout((e) => {
        let currentSelect = $(e.target);
        currentSelect.next().removeClass('select-active')
    });

    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.products-container').hide()
        let id = currentElement.data('id');
        $('#' + id).show()

        $('.category').removeClass('active')
        currentElement.addClass('active')
        $(id + ' .services-table').slick('refresh')
    });

    $('.our-masters-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });


    $('.instagram-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 1064,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    //Order call popup
    $('.order-call-btn').click(() => {
        $('#order-call-popup').css('display', 'flex');
    });

    $('#order-call-popup-close').click(() => {
        $('#order-call-popup').hide();
    });

    $('.reserve-button > button').click(() => {
        let name = $('#name1');
        let phone = $('#phone1')
        console.log(name.val())
        console.log(phone.val())

        if (name.val() && phone.val()) {

            $.ajax({
                type: 'post',
                url: 'mail-order-call.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#order-call-popup-success').show();
                    $('#order-call-popup-content').hide()
                },
                error: () => {
                    $('#order-call-popup').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }

            });
        } else {
            if (!name.val()) {
                name.next().show();
                $('#name1').addClass('error-input')
            } else {
                name.next().hide();
                $('#name1').removeClass('error-input')
            }
            if (!phone.val()) {
                phone.next().show();
                $('#phone1').addClass('error-input')
            } else {
                phone.next().hide();
                $('#phone1').removeClass('error-input')
            }

        }

    });

    //Order request popup
    $('.order-request').click(() => {
        $('#order-request-popup').css('display', 'flex');
    });

    $('#order-request-popup-close').click(() => {
        $('#order-request-popup').hide(5);
    });

    $('#order-request-btn').click(() => {
        let name = $('#name2');
        let phone2 = $('#phone2');
        let service = $('#service');
        let barber = $('#barber');
        let date = $('#date');
        let time = $('#time');


        if (name.val() && phone2.val() && service.val() && barber.val() && date.val() && time.val()) {

            $.ajax({
                type: 'post',
                url: 'mail-order-call.php',
                data: 'name=' + name.val() + '&phone=' + phone2.val() + '&service=' + service.val() + '&barber=' + barber.val() + '&date=' + date.val() + '&time=' + time.val(),
                success: () => {
                    $('#order-request-success').show();
                    $('.order-request-form-container').hide()
                },
                error: () => {
                    $('#order-request-popup').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }

            });
        } else {
            if (!name.val()) {
                name.next().show();
                $('#name2').addClass('error-input')
            } else {
                name.next().hide();
                $('#name2').removeClass('error-input')
            }
            if (!phone2.val()) {
                phone2.next().show();
                $('#phone2').addClass('error-input')
            } else {
                phone2.next().hide();
                $('#phone2').removeClass('error-input');
            }
            if (service.val() === 'Не выбрана услуга') {
                $('#services-select').next().show();
                $('#service').addClass('error-input');
            } else {
                $('#services-select').next().hide();
                $('#service').removeClass('error-input');
            }
            if (barber.val() === 'Не выбран мастер') {
                $('#barbers-select').next().show();
                $('#barber').addClass('error-input');
            } else {
                $('#barbers-select').next().hide();
                $('#barber').removeClass('error-input');
            }
            if (!date.val()) {
                date.next().show();
                $('#date').addClass('error-input');
            } else {
                date.next().hide();
                $('#date').removeClass('error-input');
            }
            if (!time.val()) {
                time.next().show();
                $('#time').addClass('error-input');
            } else {
                time.next().hide();
                $('#time').removeClass('error-input');
            }

        }

    });

    //Sale popup
    $('#get-sale-btn').click(() => {
        $('#get-sale-popup').css('display', 'flex');
    });

    $('#get-sale-popup-close').click(() => {
        $('#get-sale-popup').hide();
    });

    // Init  WOW
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('#burger-menu').click(() => {
        $('nav').addClass('burger')
    });
    $('#burger-close').click(() => {
        $('nav').removeClass('burger')
    });
    $('.menu-item').click(() => {
        $('nav').removeClass('burger')
    });

})


