---
layout: portfolio-page
title:  "Tasty Dev Box"
thumbnail: "portfolio-thumb-tasty-2.png"
blurb: "Vagrant + Chef + LAMP. Replacing the need for XAMPP, or other such LAMP packages, on Windows."
tags: ops
contributions: [chef, "vagrant box"]
date:   2015-07-06 23:17:42
permalink: work/tasty-dev-box/
categories: work
display_order: 5
published: true

---

This automated development environment was created as an alternative to using installable LAMP tools like XAMPP in Windows using Chef and Vagrant.

Once all requisite programs and dependencies are installed, all one needs to do is launch the envronment through a <code>"vagrant up"</code> command, a development box with Apache, MySQL, and PHP5 is available.

Vagrant and Virtual Box were used for the initial development environment, and Chef as the provisioner that sets everything up.

<a href="https://github.com/keeeeeegan/Tasty-Dev-Box" class="link-icon cta-link">Fork me on Github!</a>
