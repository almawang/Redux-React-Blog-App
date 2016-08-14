# Redux React Blog
I implemented a blog using redux's action and reducer system. It has the following features:

* All links change color with hover.
* Navigation bar on top with link to homepage (AlmaBlog) and to page to create a new post.
* New Post page has fields for title, content and tags and a create new post button.
* Index - lists the titles and tags of all available blog posts. The titles are links to the fully blog posts.
* Show - Clicking on the title of a post opens up a link to the full blog post with content.
* Edit - After opening up a full blog post, edit the blog post by clicking on the edit button. The content field supports markdown and can contain multiple lines. To save the edited work click on the edit button again and the updated post will be sent to the API.
* Delete - Click on the delete button to delete the post.

## Authentication/Part 2
I added authentication to the blog such that a user must sign in or sign up in order to create a new post, edit posts, or delete posts.

* Sign In - prompted if a user clicks on new post or clicks on sign in. Checks if the user is in the database and either authenticates them or sends an error.
* Sign Up - takes the email, password and full name of the user and checks if the email already exists in the database. If an email is already in use an error is reported. Otherwise a new account is created and the user is authenticated.
* Post with User - the post model also saves the user associated with a post. 
* Error Handling - When encountering an error, the reportError() function updates the error state and component and reports the error in red font under the nav bar. For example if the sign in failed or the user's email is already taken for sign up. The error goes away after the user returns to the homepage.
