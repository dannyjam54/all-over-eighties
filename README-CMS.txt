ALL OVER 80'S — CONTENT MANAGEMENT UPDATE

1. Extract this ZIP. Upload ALL files and folders (including the hidden .pages.yml file) to your existing GitHub repository at https://github.com/dannyjam54/all-over-eighties, replacing old files. The .pages.yml must be in the repository root.
2. Commit the changes to the branch that GitHub Pages publishes.
3. Go to https://app.pagescms.org and sign in using your GitHub account. Install/authorize the Pages CMS GitHub app for your all-over-eighties repository. Select the repository.
4. Open Gig Dates, Gallery Photos, or Band News. Add entries and save. Upload photographs using the image field. Pages CMS commits changes to GitHub; GitHub Pages then publishes them.
5. View https://allovereighties.co.uk/live.html, /gallery.html and /news.html.

IMPORTANT: This version uses Pages CMS at app.pagescms.org as the secure admin area, NOT an /admin login on your website. A secure /admin login hosted directly on GitHub Pages would require additional authentication infrastructure. Do not create a client-side password/PIN.

If you cannot see .pages.yml in Windows Explorer, enable View > Show > Hidden items. On GitHub the filename must begin with a dot.

The data/*.json files are the content database. Do not overwrite them when updating the website in the future, or you will erase published content.

Image uploads are saved to assets/uploads in your GitHub repository. Large numbers of high-resolution images can increase repo size; resize/compress photos before upload.

If the site is served from a repository subpath instead of your custom domain, media absolute paths may need adjustment.
