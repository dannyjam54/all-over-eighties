ALL OVER 80'S — VIDEO CMS UPDATE

This update adds a Videos page and a Videos collection in Pages CMS. Videos are embedded from YouTube, so they do not consume your GitHub repository storage.

INSTALLATION
1. Extract this ZIP.
2. In your existing GitHub repository, upload/replace ONLY the files and folders contained in this ZIP, keeping their folder paths. The ZIP intentionally contains the updated .pages.yml, assets/content.js, assets/styles.css, the updated HTML navigation pages, videos.html and data/videos.json.
3. IMPORTANT: Do not replace data/gigs.json, data/gallery.json or data/news.json. This update ZIP does not include them, so existing content remains safe.
4. Commit the changes to the main branch.
5. In Pages CMS, refresh the repository. A new Videos collection should appear. Add a video title, paste its YouTube URL, optionally add a description/category/date, and save.
6. The video will appear at https://allovereighties.co.uk/videos.html.

VIDEO LINKS
Use a normal YouTube URL, e.g. https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID. The page embeds the video using YouTube's privacy-enhanced youtube-nocookie player.

The .pages.yml file must be at the repository root. If Windows hides dotfiles, enable View > Show > Hidden items.
