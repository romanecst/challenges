function del(){
    $('.trash').click(
        function(){
            $(this).parent().parent().remove();
        }
    );
};

function picto(){
    if($('.categorie').val().toLowerCase() == 'mails'){
        return "images/mail.svg";
    }else if($('.categorie').val().toLowerCase() == 'réunion'){
        return "images/teamwork.svg";
    }else if($('.categorie').val().toLowerCase() == 'rdv client'){
        return "images/meeting.svg";
    }else if($('.categorie').val().toLowerCase() == 'déjeuner'){
        return "images/restaurant.svg";
    }else if($('.categorie').val().toLowerCase() == 'compta'){
        return "images/accounting.svg";
    }else{
        return "images/unknownIcon.png";
    };
};

function picto2(){
    if($('#categorie').val().toLowerCase() == 'mails'){
        return "images/mail.svg";
    }else if($('#categorie').val().toLowerCase() == 'réunion'){
        return "images/teamwork.svg";
    }else if($('#categorie').val().toLowerCase() == 'rdv client'){
        return "images/meeting.svg";
    }else if($('#categorie').val().toLowerCase() == 'déjeuner'){
        return "images/restaurant.svg";
    }else if($('#categorie').val().toLowerCase() == 'compta'){
        return "images/accounting.svg";
    }else{
        return "images/unknownIcon.png";
    };
};

function modify(){
    $('.mod').click(
        function(){
            $(this).parent().parent().html(`
            <h3><input class="categorie" name="categorie" type="text" value=""></h3>
            <p><input class="titre" name="titre" type="text" value=""></p>
            <p><input class="date" name="date" type="date" value=""></p>
            <button class='env'>Submit</button>`);
            submit();
        }
    );
};
        
function submit(){
    $('.env').click(
        function(){
            $(this).parent().html(`
            <h3><img id="picto" src="${picto()}" alt="">${$('.categorie').val()}</h3>
            <p>${$('.titre').val()}</p>
            <p>${$('.date').val()}</p>
            <p ><img class='mod' src="images/pen.png"  >Modifier<img class='trash' src="images/trash.png"  >Supprimer</p>
            `);
            del();
            modify();
        }
    );
};

$('#submit').click(
    function(){
        $('#main_container').append(
            `<div class="item">
                <h3><img id="picto" src="${picto2()}" alt="">${$('#categorie').val()}</h3>
                <p>${$('#titre').val()}</p>
                <p>${$('#date').val()}</p>
                <p ><img class='mod' src="images/pen.png"  >Modifier<img class='trash' src="images/trash.png"  >Supprimer</p>
            </div>`
        );
        $('#categorie').val('');
        $('#titre').val('');
        $('#date').val('');
    }
);

$('#searchButton').click(
    function(){
        $('.item').hide();
        $('h3').each(function(){
            var bar = $('#search').val().toLowerCase();
            var msg = $(this).text().toLowerCase();
            if(bar == msg){
                $(this).parent().show(); 
            }
        });     
        $('#search').val('') ;
    });


del();
modify();
