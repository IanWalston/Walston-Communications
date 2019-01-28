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
          We love English in all its forms, written or spoken. That's why, since
          1988, we've been turning our affection for words into award-winning,
          multifaceted marketing and public relations campaigns for some of the
          world's best-known organizations, from Apple to the United Nations.
          </p>
          <p> 
          
          We seamless move from the traditional -- writing for brochures, reports,
          newsletters and journals, print and broadcast ads -- with the digital --
          mobile, social media, e-mail, videos, blogs, websites -- to produce
          communications of concision, precision, and impact. We take our writing
          assignments seriously. We don't look for shortcuts.
        </p>
      </div>
    </div>
  </div>
  `;
};

$work.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `<div class='row'>
    <h3>the proof is in the pudding.</h3>
</div>
<hr>
<div class="row">
<img class="img-fluid" src="./img/portfolio/3.jpg" />
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/4.jpg" />
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/5.jpg" />
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/6.jpg" />
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/7.jpg" />
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/8.jpg" />
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/9.jpg" />
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/10.jpg"/>
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/11.jpg"/>
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/12.jpg"/>
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/13.jpg"/>
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/14.jpg"/>
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/15.jpg"/>
</div>
<div class="row">
<img class="img-fluid" src="./img/portfolio/16.jpg"/>
</div>`;
};

$contact.onclick = () => {
  event.preventDefault();
  $display.innerHTML = "";
  $display.innerHTML = `
    <div class='row'>
        <h3>
            lets chat about your needs.
        </h3>
    </div> 
    <hr>
    <hr>
    <div class='row'>
        <h3>Mark Walston</h3>
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
