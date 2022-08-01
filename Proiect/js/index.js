let httpApi = new HttpApi();


function commonJs() {

    var loggedIn = Utils.localStorageGet('loggedIn');
    console.log(loggedIn);
    if(parseInt(loggedIn) === 1) {
        $('.log-in').hide();
        $('.log-out').show();
    } else {
        $('.log-in').show();
        $('.log-out').hide();
    }

    $('.logout').click(function(event) {
        event.preventDefault();
        Utils.localStorageRemove('loggedIn');
        Utils.redirect('Homepage.html');

    })

    
}

function register(event) {
    event.preventDefault();
    let name = $('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();

    let user = new User(name, email, password);

   
   httpApi.register(user);

   
}

function login(event) {
    

    const email = $('#email').val();
    const password = $('#password').val();

    let user = new User("", email, password);

    httpApi.login(user);
    event.preventDefault();

}

function showWonder() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    httpApi.show(id);
    
}

function showWonders() {
    httpApi.listWonders();
}

function deleteWonder() {
    $(document).on('click', '#delete-button', function(event){

        
        // console.log( $(event.currentTarget).attr('data-id') );
        const id = event.currentTarget.getAttribute('data-id');
        
        httpApi.delete(id, event.currentTarget);

        event.preventDefault();
    })
}


function editWonder() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    httpApi.editForm(id);
}

function updateWonder(event) {
    event.preventDefault();

    const name = $('#name').val();
    const picture1 = $('#picture1').val();
    const picture2 = $('#picture2').val();
    const picture3 = $('#picture3').val();
    const description = $('#description').val();
    const id = $('#update-button').attr('data-id');

    let wonder = new Wonder(name, description, picture1, picture2, picture3);

    httpApi.update(wonder, id);

    
}

function createWonder(event) {
    const name = $('#name').val();
    const picture1 = $('#picture1').val();
    const picture2 = $('#picture2').val();
    const picture3 = $('#picture3').val();
    const description = $('#description').val();
   
        let wonder = new Wonder(name, description, picture1, picture2, picture3);
        httpApi.create(wonder);
    
    event.preventDefault();
   }