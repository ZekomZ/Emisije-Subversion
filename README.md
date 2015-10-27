# Emisije-Subversion

https://help.github.com/articles/creating-pages-with-the-automatic-generator/

GitHub Pages Basics / Creating Pages with the automatic generator
Creating Pages with the automatic generator

You can use GitHub's Automatic Page Generator to quickly create a website for a project, user, or organization.
User and Organization Pages

To generate User and Organization Pages sites, you'll need to create a repository named username.github.io . The username or organization name must be your own or your GitHub Pages site will not build. The automatic page generator is accessible via the repository's Settings page. You can read more about User and Organization Pages here.

Warning: GitHub Pages sites are publicly available on the internet, even if their repositories are private. If you have sensitive data in your Page repository, you may want to remove it before publishing.
Project Pages

You can use the automatic page generator to publish GitHub Pages sites for any project repository.

Warning: You must create the repository with the naming convention described above or you will not be able to publish your GitHub Pages site.

---
https://sites.google.com/site/zekomtributemagazine/zekom---github-repository/subversion/http-askubuntu-com-questions-36243-how-to-checkout-using-subversion-and-https


svn co --username zekom https://github.com/ZekomZ/Emisije-Subversion

A    Emisije-Subversion/branches

A    Emisije-Subversion/branches/gh-pages

A    Emisije-Subversion/branches/gh-pages/images

A    Emisije-Subversion/branches/gh-pages/images/code.png

A    Emisije-Subversion/branches/gh-pages/images/pattern.png

A    Emisije-Subversion/branches/gh-pages/images/tar.png

A    Emisije-Subversion/branches/gh-pages/images/top.png

A    Emisije-Subversion/branches/gh-pages/images/zip.png

A    Emisije-Subversion/branches/gh-pages/index.html

A    Emisije-Subversion/branches/gh-pages/javascripts

A    Emisije-Subversion/branches/gh-pages/javascripts/script.js

A    Emisije-Subversion/branches/gh-pages/params.json

A    Emisije-Subversion/branches/gh-pages/stylesheets

A    Emisije-Subversion/branches/gh-pages/stylesheets/github-dark.css

A    Emisije-Subversion/branches/gh-pages/stylesheets/stylesheet.css

A    Emisije-Subversion/trunk

A    Emisije-Subversion/trunk/.gitignore

A    Emisije-Subversion/trunk/LICENSE

A    Emisije-Subversion/trunk/README.md

Checked out revision 3.

zwz@zwz-HP-ProBook-470-G0:~/workspace/www/Zekom-Subversion/Emisije-3-3-3$



https://help.github.com/articles/support-for-subversion-clients/


Importing / Support for Subversion clients
Support for Subversion clients

GitHub repositories can be accessed from both Git and Subversion (SVN) clients. This article covers using a Subversion client on GitHub and some common problems that you might run into.

GitHub supports Subversion clients via the HTTPS protocol. We use a Subversion bridge to communicate svn commands to GitHub.
Supported Subversion features on GitHub
Checkout

The first thing you'll want to do is a Subversion checkout. Since Git clones keep the working directory (where you edit files) separate from the repository data, there is only one branch in the working directory at a time.

Subversion checkouts are different: they mix the repository data in the working directories, so there is a working directory for each branch and tag you've checked out. For repositories with many branches and tags, checking out everything can be a bandwidth burden, so you should start with a partial checkout.

Start by browsing to the repository page on github.com to get the HTTPS clone URL:

HTTPS Clone URL

Then, get your checkout ready:

    HTTPS Clone URLBrowse to the repository page on GitHub and copy the HTTPS clone URL:

    Make an empty checkout of the repository:

    svn co --depth empty https://github.com/ZekomZ/Emisije-Subversion
    # Checked out revision 1.
    cd repo

    Get the trunk branch. The Subversion bridge maps trunk to the Git HEAD branch (which is usually master).

    svn up trunk
    # A    trunk
    # A    trunk/README.md
    # A    trunk/gizmo.rb
    # Updated to revision 1.

    Get an empty checkout of the branches directory. This is where all of the non-HEAD branches live, and where you'll be making feature branches.

    svn up --depth empty branches
    Updated to revision 1.

Creating branches

You can also create branches using the Subversion bridge to GitHub.

From your svn client, make sure "master" is current by updating trunk:

svn up trunk
# At revision 1.

Next, you can use svn copy to create a new branch:

svn copy trunk branches/more_awesome
# A    branches/more_awesome
svn commit -m 'Added more_awesome topic branch'
# Adding    branches/more_awesome

# Committed revision 2.

You can confirm that the new branch exists in the repository's branch dropdown:

branch-snapshot

You can also confirm the new branch via the command line:

git fetch
# From https://github.com/user/repo/
# * [new branch]    more_awesome -> origin/more_awesome

Making commits to Subversion

After you've added some features and fixed some bugs, you'll want to commit those changes to GitHub. This works just like the Subversion you're used to. Edit your files, and use svn commit to record your changes:

svn status
# M    gizmo.rb
svn commit -m 'Guard against known problems'
# Sending    more_awesome/gizmo.rb
# Transmitting file data .
# Committed revision 3.
svn status
# ?    test
svn add test
# A    test
# A    test/gizmo_test.rb
svn commit -m 'Test coverage for problems'
# Adding    more_awesome/test
# Adding    more_awesome/test/gizmo_test.rb
# Transmitting file data .
# Committed revision 4.

Switching between branches

To switch between branches, you'll probably want to start with a checkout of trunk:

svn co --depth empty https://github.com/user/repo/trunk

Then, you can switch to another branch:

svn switch https://github.com/user/repo/branches/more_awesome

Finding the Git commit SHA for a Subversion commit

GitHub's Subversion server exposes the Git commit sha for each Subversion commit.

To see the commit SHA, you should ask for the git-commit unversioned remote property.

svn propget git-commit --revprop -r HEAD https://github.com/user/repo
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3

With this commit SHA, you can, for example, look up the corresponding Git commit on GitHub.
Further reading

    "Subversion properties supported by GitHub"


