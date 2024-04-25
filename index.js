document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace 'YOUR_GOOGLE_DRIVE_PDF_LINK' with the direct link to your PDF file hosted on Google Drive
    var pdfUrl = 'https://docs.google.com/document/d/1UltAqiF010iVGez8bvfguwEsvHiIvufyg8vYB0vI0-E/edit?usp=sharing';

    // Create a temporary anchor element
    var anchorElement = document.createElement('a');

    // Set the href attribute of the anchor to the PDF URL
    anchorElement.href = pdfUrl;

    // Set the download attribute to force download
    anchorElement.download = 'downloaded_file.pdf';

    // Programmatically trigger a click event on the anchor element
    anchorElement.click();
});

