const $display = document.getElementById("display");
const $about = document.getElementById("about");
const $work = document.getElementById("work");
const $contact = document.getElementById("contact");

$about.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `
  <div class="row">
    <div class="col-md-6"><img class="img-fluid rotated" src="img/about.jpg" /></div>
    <div class="col-md-6">
      <div class="row"><h2>remember how you hated writing book reports?</h2></div>
      <div class="row m-2 p-2">
        <p>
          We love English in all its forms, written or spoken. That's why, since
          1988, we've been turning our affection for words into award-winning,
          multifaceted marketing and public relations campaigns for some of the
          world's best-known organizations, from Apple to the United Nations. We
          seamless move from the traditional -- writing for brochures, reports,
          newsletters and journals, print and broadcast ads -- with the digital --
          mobile, social media, e-mail, videos, blogs, websites -- to produce
          communications of concision, precision, and impact. We take our writing
          assignments seriously. We don't look for shortcuts.
        </p>
      </div>
    </div>
  </div>
  `
};

$work.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `<div class='row'>
    <h3>Look at this portfolio</h3>
</div>
<hr>
<div class="row">
<div
  id="carouselExampleControls"
  class="carousel slide"
  data-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./img/firstslide.svg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/secondslide.svg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/thirdslide.svg" alt="Third slide" />
    </div>
  </div>
  <a
    class="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>`;
};

$contact.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `
    <div class='row'>
        <h3>
            Contact me
        </h3>
    </div> 
    <hr>
    <hr>
    <div class='row'>
        <h4>Mark Walston</h4>
        <hr>
    </div>
    <div class='row'>

        <ul>
            <li>
                <a href="tel:13019198755">Phone</a>
            </li>
            <li>
                <a href='mailto:markwalston@comcast.net'>Email</a>
            </li>
            <!-- <li>
                linkedin:
            </li> -->
        </ul>
    </div>`;
};
