(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{364:function(e,t,a){"use strict";a.r(t);var o=a(45),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("p",[e._v("Using "),a("a",{attrs:{href:"https://github.com/tjventurini/laravel-blueprint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Blueprint"),a("OutboundLink")],1),e._v(" for package development is easy. Just follow the very easy steps below and you are good to go.")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("Follow the steps shown in the "),a("RouterLink",{attrs:{to:"/guide/"}},[e._v("quickstart guide")]),e._v(" or in the "),a("RouterLink",{attrs:{to:"/docs/"}},[e._v("docs")]),e._v(" to install the laravel-blueprint.")],1),e._v(" "),a("h2",{attrs:{id:"add-volume-for-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-volume-for-packages"}},[e._v("#")]),e._v(" Add Volume for Packages")]),e._v(" "),a("p",[e._v("You will need to add the following volume to the "),a("code",[e._v("workspace")]),e._v(" and "),a("code",[e._v("php-fpm")]),e._v(" containers. You can add it in the regarding sections of your "),a("code",[e._v("laradock/docker-composer.yml")]),e._v(" file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    volumes:\n        # ...\n        - ../../packages:/var/packages\n")])])]),a("p",[e._v("Now you will have to rebuild the containers.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make build\n")])])]),a("h2",{attrs:{id:"adding-your-development-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-your-development-package"}},[e._v("#")]),e._v(" Adding your Development Package")]),e._v(" "),a("p",[e._v("You will need to create a composer repository that you want to include. Go to your "),a("code",[e._v("packages")]),e._v(" directory and create it there. Then you will have to update your "),a("code",[e._v("composer.json")]),e._v(" in your package development instance. This could look like the following.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    "repositories": [\n        {\n            "type": "path",\n            "url": "../packages/my-package"\n        }\n    ],\n')])])]),a("p",[e._v("Then you can run the following to install it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("composer require your-name/your-package @dev\n")])])]),a("p",[e._v("This should create a symlink for your package in the vendors folder.")]),e._v(" "),a("h2",{attrs:{id:"ide-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide-configuration"}},[e._v("#")]),e._v(" IDE Configuration")]),e._v(" "),a("p",[e._v("Remember that you should include another folder to the project/workspace of your IDE. I suggest that you add your vendor name directory from the vendors folder so your "),a("em",[e._v("inteli")]),e._v(" services don't make your IDE light up red all over the place 😉")])])}),[],!1,null,null,null);t.default=r.exports}}]);