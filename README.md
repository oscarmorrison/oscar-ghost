# Oscar for Ghost
[![Ghost version](https://img.shields.io/badge/ghost-v1.24.0-blue.svg)](https://github.com/tryghost/ghost)[![GitHub issues](https://img.shields.io/github/issues/oscarmorrison/oscar-ghost.svg)](https://github.com/oscarmorrison/oscar-ghost/issues)  
![Logo](http://blogoscarmorrison.s3.amazonaws.com/2016/12/logo.png)

*Demo:* [blog.oscarmorrison.com](http://blog.oscarmorrison.com)

![ScreenGif](http://blogoscarmorrison.s3.amazonaws.com/2016/Dec/ghostscreencast.gif)

## Introduction
The **Oscar Ghost** Theme is a clean, simple, minimalistic theme built for ghost. The theme is built from an original 
fork of the [Lanyon-Ghost](https://github.com/PxlBuzzard/lanyon-ghost) Theme. 

This theme is ideal for single author, tag heavy, looking for a simple design, with code highlighting. 

### Updates
- v2.0.1 (26 Aug 18)
   - Changes for [Ghost Marketplace](http://marketplace.ghost.org)
- v2.0.0 (26 Aug 18)
   - Changes for [Ghost 2.0](https://blog.ghost.org/2-0/)
- v1.1.0 (7 Jun 18)
   - Updates for [Ghost v1.X](https://github.com/TryGhost/Ghost/releases)
- v1.0.4 (8 Jan 17)
   - Add ability to config features
   - Add tag sub menu
- v1.0.3 (4 Jan 17)
   - Support additional language for syntax highlighting (Go, Python, MD)
- v1.0.2 (3 Dec 16)  
   - Add next and previous post links to Post.hbs
   - Open all external links in new tab
- v1.0.1 (3 Dec 16)  
   - Support for  [Ghost 0.11.3](https://dev.ghost.org/ghost-0-11-3/)  
   - Added new [icons](http://ogem.co/blogiconmoon)
- v1.0.0 (24 May 16)   
   - Support for [Ghost 0.8.0](https://dev.ghost.org/ghost-0-8-0/)

## Features
- Configurable Features
- Custom Navigation Menu ([#7](https://github.com/oscarmorrison/oscar-ghost/issues/7))
- Submenu for tags ([#20](https://github.com/oscarmorrison/oscar-ghost/pull/20))
- [Prism.js](http://prismjs.com) Code Highlighting (Markup, Bash, Swift, JS, C, Go, Python...)
- Font: [Lato](https://www.google.com/fonts/specimen/Lato) weights 100,300,300italic
- Automatic internal and external linking
- Featured Image on Posts
- Custom Tag Home Page
- Tag Styling
- Date Styling
- Single Author (no Author on Posts)
- Gallery Viewer ([Photoswipe](http://photoswipe.com/)) ([#10](https://github.com/oscarmorrison/oscar-ghost/issues/10))
- Custom Gallery Post Listing


## Customization

### Configuration
I have included with v1.0.4 a way to do some basic feature configuration that is often asked for:
These are the default values (found in oscar.js):
```
let oscar = {
    animatedNav: true,
    tagMenu: true,
    tagKey: '#tagnav',
    requirePosts: false
};
```

**animatedNav:**  if the nav auto hides, or is shown  
**tagMenu:** if the secondary tag menu is shown  
*tagMenu is dependant on ghost api beta feature this can be turned on under [Ghost Admin] -> [Labs] -> [Public API]*  
**tagKey:** what the custom key to look for in the tag description is. (this can be any string)  
**requirePosts:** show only tags that have posts in them  

### Navigation
![NavBar](http://blogoscarmorrison.s3.amazonaws.com/2016/Dec/navigationBar.png)   
The navigation menu can be customize through the [ghost admin](https://blog.ghost.org/navigation/), 
the theme come with 32 custom icons that can be used in the nav bar menu.  
Please see here for all icons http://ogem.co/blogiconmoon  
simply just use the icon class name   
e.g **icon-twitter** for -> **twitter**.
![Navigation](http://blogoscarmorrison.s3.amazonaws.com/2016/Dec/navigation.png)   


### Gallery
To get the full benefits of the Gallery Viewer (Photoswipe) in a blog post, simply tag the post with 
**gallery**. Any post that is of type gallery will get special behavior. 
* Gallery Post will be displayed differently in a the list post view, they will show special gallery icon, and will not show any description.
* Gallery Post will have special behavior for the user. The images will all have a cursor pointer and be clickable. Once any image is clicked, the photoswipe viewer will open in full view. 
* To add images to a gallery post, add them as you normally would with any post.

### Code Syntax Highlighting
Use [prismjs](http://prismjs.com/download.html) for syntax highlighting.  
in your blog symply surround code block with:

\```language-bash  


## Installation

- Download the [Theme](https://github.com/oscarmorrison/oscar-ghost/archive/master.zip) .zip
- Install the Theme ([Instructions](http://support.ghost.org/switch-themes/)]
    - Unzip the folder and upload to 'ghost/content/themes'
    - Restart ghost and log in
    - Go to settings > themes and select Upholsterygeist

### Cost
Free. As in free beer...   
If you like the theme, and would like me to keep building cool free ghost themes feel free to buy
 me a beer.  
[![Paypal Badge](http://blogoscarmorrison.s3.amazonaws.com/2016/May/PaypalBadgeSmall.png)](http://paypal.me/oscarmorrison)

## Author

**Oscar Morrison**
- <https://github.com/oscarmorrison>
- <https://twitter.com/oscargemorrison>

## License

Open sourced under the [MIT license](LICENSE.md).
