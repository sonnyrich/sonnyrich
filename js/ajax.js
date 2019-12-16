const SYPEX_URL = 'https://api.sypexgeo.net/json/',
    CITIES_URL = 'http://glavpunkt.ru/api/get_rf_cities';

let cities;

/**
 * 
 * @param {*} api_url - адрес запроса
 */
function getRequest(api_url, callback) {
    let xhr = new XMLHttpRequest(),
        async = true;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback.call(xhr.responseText)
        }
    }
    xhr.open('GET', api_url, async);
    xhr.send();
    if (xhr.status != 200) {
        return (xhr.status + ': ' + xhr.statusText)
    }
}

jQuery(($) => {
    $('#city_name').on('click', function(e) {
        e.preventDefault();
        $('#error').modal().open();
        if (!cities) {
            getRequest(CITIES_URL, function() {
                cities = $.parseJSON(this)
            });
        }
    });

    $('body').on('input keyup', 'input[name=city_name]', function() {
        let search = $(this).val(),
            counter = 0;
        console.log(cities)
        let html = '<ul>';
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && counter < 5) {
                html += '<li data-city="' + cities[i].name + '">' + cities[i].name + ' (' + cities[i].area + ')</li>';
                counter++;
            }
        }
        html += '</ul>';
        $('#error').html(html);
    });

    $('body').on('click', '#city_name li', function() {
        $('#city_name').html($(this).data('city'));
        $.modal().close();
        // })
        // $('ajax-form').on('submit', function(e) {
        //     e.preventDefault();
        //     let form = $(this);
        //     let data = form.serilize();
        //     $.ajax({
        //         url: 'serv.php',
        //         data: data,
        //         method: 'post',
        //         success: function(msg)

        //     })
    })
})

jQuery(document).ready(($) => {
    console.log('start request');
    getRequest(SYPEX_URL, function() {
        let answer = $.parseJSON(this);
        let city = answer['city']['name_ru'];
        console.log(city);
        $('#city_name').html(city);
    });
});