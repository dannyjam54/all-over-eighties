ALL OVER 80'S WEBSITE — MULTI-PAGE VERSION

FILES
- index.html       Home page (this must stay at the repository root)
- band.html        The Band
- live.html        Live Dates
- music.html       Music
- gallery.html     Gallery
- bookings.html    Booking enquiry form
- thanks.html      Confirmation page
- assets/          Logo, shared styling and navigation script

HOW TO UPLOAD TO GITHUB
1. Extract this ZIP file on your computer.
2. Open your GitHub repository.
3. Choose Add file > Upload files.
4. Upload ALL the files and the assets folder, keeping the folder structure.
5. Commit changes.
6. In Settings > Pages, choose Deploy from a branch, main, /(root), then Save.
7. Open the published GitHub Pages address.

BOOKING FORM SETUP
The form uses FormSubmit to email booking enquiries to dannyjam54@gmail.com.
On the first form submission, FormSubmit sends an activation email to that inbox.
Open that email and confirm/activate the address. Check junk/spam if necessary.
After activation, test the form.

IMPORTANT: The hidden thank-you redirect in bookings.html contains placeholders.
After you know your GitHub Pages address, open bookings.html and replace:
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/thanks.html
with your actual published address, ending in /thanks.html.

FACEBOOK
https://www.facebook.com/share/1AEYvwvTdi/

INSTAGRAM
https://www.instagram.com/allover80s/

To add photos later, put image files in assets/ and update gallery.html.

Facebook and Instagram now appear as prominent buttons in the top navigation on every page, plus a Follow the Band section on the homepage.

BOOKING FORM UPDATE
The booking form now submits through FormSubmit's AJAX endpoint and displays an on-page success/error message.
The first submission still requires the recipient to activate dannyjam54@gmail.com from the FormSubmit confirmation email.
If the form reports a failure, use the direct email link shown on the Bookings page.


BOOKING FORM SETUP (IMPORTANT)
The booking form now uses Web3Forms instead of FormSubmit. Before it can send enquiries, create a free access key at https://web3forms.com/ using dannyjam54@gmail.com. Web3Forms emails the access key to you. In bookings.html, replace YOUR_WEB3FORMS_ACCESS_KEY with that key, then upload the updated bookings.html to the root of the GitHub repository. Full instructions are in WEB3FORMS-SETUP.txt.
