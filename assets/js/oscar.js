let oscar = {
    animatedNav: true,
    tagMenu: true,
    tagKey: '#tagnav',
    requirePosts: false
};

if(oscar.animatedNav) {
    $('.nav').addClass('animated');
    $('.masthead').mouseenter(function(){
        $('.nav').slideToggle(200);
    }).mouseleave(function(){
        $('.nav').slideToggle(200);
    });
}

$('a[href^=http]').each(function(){
    if(this.href.indexOf(location.hostname) < 0) {
        $(this).attr({target: '_blank'});
    }
});

$(function() {
    if(location.pathname === '/' && oscar.tagMenu) {
        $.get(ghost.url.api('tags', {limit: 'all', include: 'count.posts', order: 'count.posts DESC'}))
            .then(function(data) {
                var navTags = data.tags.filter(function(tag){
                    return (oscar.requirePosts
                        ? tag.description && tag.count.posts && tag.description.includes(oscar.tagKey)
                        : tag.description && tag.description.includes(oscar.tagKey)
                    );
                }).forEach(function(tag){
                    $('<a>', {
                        href: '/tag/'+tag.slug,
                        text: tag.name
                    }).prependTo('.tag-nav');
                });
            });
    }
});
