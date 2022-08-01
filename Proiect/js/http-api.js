class HttpApi {
    USERS_API = "https://615f2996f7254d0017067fd9.mockapi.io/users";
    WONDERS_API = "https://615f2996f7254d0017067fd9.mockapi.io/wonders"
    register(user) {
        $.ajax({
            url: this.USERS_API,
            type: 'POST',
            dataType: 'json',
            data: user
        }).done(function (response) {
            if (response.id) {
                $('.alert-success').show();
            }
        })
    }
    login(user) {
        $.ajax({
            url: `${this.USERS_API}?email=${user.email}`,
            type: 'GET',
            dataType: 'json'
    
        }).done(function (response) {
    
            if (response.length === 0) {
                Utils.showError('The credentials are wrong!');
                return;
            }
    
            let userFromApi = response[0];
            if (user.password === userFromApi.password) {
                //set user as logged in
                Utils.localStorageSet('loggedIn', 1);
                Utils.redirect("List.html");
            } else {
                Utils.showError('The credentials are wrong!');
            }
        });
    }
    
    listWonders() {
        $.ajax({
            url: this.WONDERS_API,
            type: 'GET',
            dataType: 'json'
        }).done(function (response) {
            if (response && response.length !== 0 ) {
                Utils.renderHtmlForWonders(response);
            }
        })
    }

    create(wonder) {
        $.ajax({
            url: this.WONDERS_API,
            type: 'POST',
            dataType: 'json',
            data: wonder
        }).done(function (response) {
            Utils.redirect("List.html");
        })
    }

    show(id) {
        $.ajax({
            url: this.WONDERS_API + '/' + id,
            type: 'GET',
            dataType: 'json'
        }).done(function (response) {
            Utils.renderHtmlForWonder(response);
        })
    }


    editForm(id) {
        $.ajax({
            url: this.WONDERS_API + '/' + id,
            type: 'GET',
            dataType: 'json'
        }).done(function(response){
            if (response.id) {
                Utils.showEditForm(response);
            }
        })
    }

    update(wonder, id) {
        $.ajax({
            url: this.WONDERS_API + '/' + id,
            type: 'PUT',
            dataType: 'json',
            data: wonder
        }).done(function(response){
            if(response.id) {
                alert('Update success!!!');
                Utils.redirect("List.html");
            }
               
               
        })
    }

    delete(id, target){
        $.ajax({
            url: `${this.WONDERS_API}/${id}`,
            type: 'DELETE',
            dataType: 'json'
        }).done(function(response){

            $(`[data-id="${id}"]`).parent().parent().remove();

        })
    }

}



