$(document).ready(function(){
    //keeps users current scroll position
    var $offset = 0;             
    //get objects for all page sections                                                          
    var $navbar = $('#navbar');
    var $about = $('#about');
    var $languages = $('#languages');
    var $projects = $('#projects');
    var $contact = $('#contact');                                           
    
    if ($(window).width() < 500)                                    
    {
        $about.show();
        $languages.show();
        $projects.show();
        $about.show();
    }
    //fade in elements on scroll down
    $(this).scroll(function() {
        $offset = $(document).scrollTop();
        //console.log($offset);
        if ($offset > $about.offset().top + 100)
        {
            $navbar.slideUp('fast');
        }
        if ($offset < $about.offset().top)
        {
            $navbar.slideDown('fast');
        }
        if ($offset > $aboutHeight -100){
            //$("jumbotron").show();
            $about.fadeIn(4000);
        }
        if ($offset > $languagesHeight){
            $languages.fadeIn(4000);
        }
        if ($offset > $projectsHeight){
            $projects.fadeIn(4000);
        }
        if ($offset > $contactHeight){
            $contact.fadeIn(3000);
        }
    });
});
