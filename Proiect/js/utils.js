class Utils {
    static redirect(path) {
        window.location.href = path;
    }



    static showError(message) {
        const $alertDanger = $('.alert-danger');
        $alertDanger.show();
        $alertDanger.html(message);

    }


    static renderHtmlForWonders(wonders) {
        let html = '';

        for (let index = 0; index < wonders.length; index++) {
            const wonder = wonders[index];

            html = html + `<li class="element">
            <a href="${wonder.picture1}" target="_blank" id="imagine">
                <img class="wonders-image" src="${wonder.picture1}">
            </a>
            <p class="wonders-title">${wonder.name}</p>
            <div class="butoane-lista">
            <a href="show.html?id=${wonder.id}" id="view-button">View</a>
            <a href="#" id="delete-button" data-id="${wonder.id}">Delete</a>
            </div>
        </li>`;
        }

        $('.lista').html(html);
    }

    static renderHtmlForWonder(wonder) {
        let html2 = `<div class="title">${wonder.name}</div>
        <div class="picture">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img" src="${wonder.picture1}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img" src="${wonder.picture2}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img" src="${wonder.picture3}" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="description">
        ${wonder.description}
        </div>
        <a href="edit.html?id=${wonder.id}" class="buton-edit">Edit</a>`;

        $('.detalii').html(html2);
    }

    static showEditForm(wonder) {
        let name = $('#name').val(wonder.name);
        let picture1 = $('#picture1').val(wonder.picture1);
        let picture2 = $('#picture2').val(wonder.picture2);
        let picture3 = $('#picture3').val(wonder.picture3);
        let description = $('#description').val(wonder.description);
        $('#update-button').attr('data-id', wonder.id);
    }

    static localStorageSet(key, value) {
        window.localStorage.setItem(key, value);
    }

    static localStorageGet(key) {
        return window.localStorage.getItem(key);
    }

    static localStorageRemove(key) {
        window.localStorage.removeItem(key);
    }
}
