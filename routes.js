const $display = document.getElementById("display");
const $about = document.getElementById("about");
const $work = document.getElementById("work");
const $contact = document.getElementById("contact");

$about.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `
  <div class="row">
  <div class="col-md-1"></div>
    <div class="col-md-3"><br><br><img class="img-fluid rotated" src="img/about.jpg"/><br><br><br></div>
    <div class="col-md-1"></div>
    <div class="col-md-7">
      <div class="row"><h2>remember how you hated writing book reports?</h2></div>
      <div class="row m-2 p-2">
      <p>
        We like to write, not abridged ideas, just big thinking for your
        business.
      </p>

      <p>
        Since 1988, we’ve been turning our proclivity for words into
        award-winning, multifaceted marketing and public relations campaigns for
        some of the world’s best-known organizations.
      </p>

      <p>
        We seamlessly move from the traditional to the digital to produce
        communications of concision, precision, and impact. We take our writing
        assignments seriously. We don’t take shortcuts.
      </p>
      </div>
    </div>
  </div>
  `;
};

$work.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `<div class='row m-2 p-2'>
      
  <h2>all aboard. next stop: you-being-impressed-with-our-work-ville.</h2>
    <br>
    </div>
    <div class="row">
    <p>With over 30 years of experience, we’ve helped a wide circle of clients reach their audience. From Capital One to UNICEF, our scope and voice is always custom-tailored and laser-specific to your exact needs.
    </p>
    </div>

    <div
    id="carouselExampleControls"
    class="carousel slide"
    data-ride="carousel" data-interval=5000
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/1.jpg"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/2.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
      <img
        class="d-block carouselimg"
        src="./img/portfolio/3.jpg"
        alt="Second slide"
      />
    </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/4.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/5.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/6.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/7.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/8.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/9.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/10.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/11.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/12.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/13.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/14.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/15.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/16.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/18.jpg"
          alt="Third slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block carouselimg"
          src="./img/portfolio/19.jpg"
          alt="Third slide"
        />
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

  </div>;`;
};

$contact.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `<div class="row">
  <div class="col-md-6">
    <div class="row mt-4 pt-4 center"><h2 class="center">finding a good writer is hard. here’s some gigantic buttons to make it a little easier.</h2></div>
    <div class="row mt-4 pt-4" id="contact">
      <div class="col-md-6">
      <a href="tel:13019198755"
      ><img class="img-fluid center" width="200px" src="img/phoneicon.svg"
      /></a>
      </div>
      <div class="col-md-6">
      <a href="mailto:markwalston@comcast.net"
      ><img class="img-fluid center" width="200px" src="img/mailicon.svg"
      /></a>
      </div>
      </div>
      </div>
      <div class='col-md-6'>
      
      </div>
      </div>
      `;
};
