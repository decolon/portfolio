The components folder will contain the actual sections for your Angular app. These will be the static views ,directives and services for that specific section of the site (think an admin users section, gallery creation section, etc). Each page should have it’s own subfolder with it’s own controller, services, and HTML files.

Each component here will resemble a mini-MVC application by having a view, controller and potentially services file(s). If the component has multiple related views, it may be a good idea to further separate these files into ‘views’, ‘controllers’, ‘services’ subfolders.

This can be seen as the simpler folder structure shown earlier in this article, just broken down into sections. So you could essentially think of this as multiple mini Angular applications inside of your giant Angular application.

https://scotch.io/tutorials/angularjs-best-practices-directory-structure
