

// ........for-contact .............
$(document).ready(function () {
    $('#whatsappForm').submit(function (e) {
      e.preventDefault();

      var name = $('#name').val().trim();
      var email = $('#email').val().trim();
      var phone = $('#phone').val().trim();
      var interest = $('#interest').val();
      var message = $('#message').val().trim();

      var text = `Hello, my name is ${name}, Email: ${email}, Phone: ${phone}, Interest: ${interest}, Message: ${message}`;
      var whatsappNumber = '2347040913837';

      var url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  });


// ..........for-referral.............
  $(document).ready(function() {
    $('#generateBtn').click(function() {
      const username = $('#username').val().trim();
      const referrer = $('#referrer').val().trim();
      const bank = $('#bank').val().trim();
      const accountNumber = $('#accountNumber').val().trim();

      if (!username || !referrer) {
        alert("Please fill the information");
        return;
      }

      const adminPhone = "2349061621162";
      const linkMessage = `Hi, my name is ${username}. I want join the WhatsApp group and was referred by ${referrer}. I use ${bank}, my account number is ${accountNumber}.`;
      const encodedMessage = encodeURIComponent(linkMessage);
      const link = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

      $('#whatsappLink').attr('href', link);
      $('#result').show();
    });
  });


//........ for-referral-pop-up ...........
$(".close-btn").click(function () {
  $(".realtors-referral").fadeOut();
  $("#result").fadeOut();
})

$(".close-btn-1").click(function () {
  $(".realtors-next").fadeOut();
})

$(".close-btn-2").click(function () {
  $("#result").fadeOut();
})

$(".whatsapp-link-btn").click(function () {
  $(".realtors-referral").show();
})

$(".realtors-next-button").click(function () {
  $(".realtors-next").show();
})

//.......... for-listing-pop-up ..............

$(document).ready(function () {
  $('#listingLink').submit(function (e) {
    e.preventDefault();

    var listingName = $('#listingName').val().trim();
    var listingInterest = $('#listingInterest').val();

    var listingText = `Hello, my name is ${listingName}, Interest: ${listingInterest}`;
    var whatsappNumber = '2347040913837';

    var url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(listingText)}`;
    window.open(url, '_blank');
  });
});

$(".listing-close-btn").click(function () {
  $(".listing-pop-up").removeClass("listing-show").addClass("listing-remove");
})

$(".tab-btn-1").click(function () {
  $(".listing-pop-up").addClass("listing-show");
})

$(".card-btn-1").click(function () {
  $(".listing-pop-up").addClass("listing-show");
})







// //........... for-listing-card-functionality ........
// $(".card-btn-2-2").click(function () {
//   $(".nav-link-1").removeClass("active").removeClass("show");
//   $(".nav-link-2").addClass("active").addClass("show");
//   $(".tab-pane-1").removeClass("active").removeClass("show");
//   $(".tab-pane-2").addClass("active").addClass("show");
// })


// $(".tab-btn-2-2").click(function () {
//   $(".nav-link-1").addClass("active").addClass("show");
//   $(".nav-link-2").removeClass("active").removeClass("show");
//   $(".tab-pane-1").addClass("active").addClass("show");
//   $(".tab-pane-2").removeClass("active").removeClass("show");
// })



// // ..........................................

// $(".card-btn-2-2").click(function () {
//   $(".nav-link-1-2").removeClass("active").removeClass("show");
//   $(".nav-link-2-2").addClass("active").addClass("show");
//   $(".tab-pane-1-2").removeClass("active").removeClass("show");
//   $(".tab-pane-2-2").addClass("active").addClass("show");
// })

// $(".tab-btn-2-2").click(function () {
//   $(".nav-link-1-2").addClass("active").addClass("show");
//   $(".nav-link-2-2").removeClass("active").removeClass("show");
//   $(".tab-pane-1-2").addClass("active").addClass("show");
//   $(".tab-pane-2-2").removeClass("active").removeClass("show");
// })



