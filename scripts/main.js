// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed


$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library

  document.getElementById('downloadCvButton').addEventListener('click', function() {
             // Create a new anchor element
             const a = document.createElement('a');

             // Set the href attribute to the file's URL
             a.href = 'ranmal_mendis_cv.pdf'; // Replace with the actual path to the file
 
             // Set the download attribute to the desired file name
             a.download = 'ranmal_mendis/ranmal_mendis_cv.pdf';
 
             // Append the anchor to the body
             document.body.appendChild(a);
 
             // Trigger a click on the anchor
             a.click();
 
             // Remove the anchor from the body
             document.body.removeChild(a);
  //   const { jsPDF } = window.jspdf;
  //   html2canvas(document.body).then(canvas => {
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     const imgData = canvas.toDataURL('image/png');
  //     const imgWidth = 210;
  //     const pageHeight = 297;  
  //     const imgHeight = canvas.height * imgWidth / canvas.width;
  //     let heightLeft = imgHeight;
  //     let position = 0;

  //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft >= 0) {
  //         position = heightLeft - imgHeight;
  //         pdf.addPage();
  //         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //         heightLeft -= pageHeight;
  //     }

  //     pdf.save('ranmal_mendis_cv.pdf');
  // }).catch(error => {
  //     console.error('Error: ', error);
  // });
});


});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

