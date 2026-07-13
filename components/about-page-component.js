export default {
  name: 'about-page-component',
  template: /* html */ `
    <section class="container py-4 py-lg-5" style="background: #14461c; color: #ffffff;">
      <div class="row g-4 align-items-start">
        <div class="col-lg-7">
          <h1 class="display-6 fw-bold mb-3">About Kyron’s Lawncare & Maintence</h1>
          <p class="lead">I help homeowners keep their outdoor spaces neat, healthy, and easy to enjoy.</p>
          <p>
            My approach is simple: dependable work, honest communication, and attention to the details that make a yard stand out.
          </p>
          <p>
            From weekly mowing and edging to seasonal cleanup and garden care, I focus on creating outdoor spaces that feel welcoming and well cared for.
          </p>
          <p>
            Every property is different, so I listen first, tailor recommendations to your yard, and deliver a service plan that fits your schedule and budget.
          </p>
        </div>

        <div class="col-lg-5">
          <img src="images/headshot.jpeg" alt="Kyron" style="width: 100%; border-radius: 12px; object-fit: cover; height: 300px; margin-bottom: 20px;">
          <div class="card border-0 shadow-sm" style="background: rgba(255,255,255,0.08); color: #ffffff;">
            <div class="card-body">
              <h2 class="h5">Why clients choose me</h2>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><i class="bi bi-check2-circle me-2" style="color: #8cd48f;"></i>Flexible scheduling for busy households</li>
                <li class="mb-2"><i class="bi bi-check2-circle me-2" style="color: #8cd48f;"></i>Personal attention from a local, owner-operated team</li>
                <li class="mb-2"><i class="bi bi-check2-circle me-2" style="color: #8cd48f;"></i>Transparent estimates with no surprise fees</li>
                <li><i class="bi bi-check2-circle me-2" style="color: #8cd48f;"></i>Reliable follow-through on every visit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3 mt-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm" style="background: rgba(255,255,255,0.08); color: #ffffff;">
            <div class="card-body">
              <h2 class="h6">Complete yard care</h2>
              <p class="mb-0">Mowing, edging, trimming, and cleanup designed to keep lawns looking crisp through every season.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm" style="background: rgba(255,255,255,0.08); color: #ffffff;">
            <div class="card-body">
              <h2 class="h6">Seasonal services</h2>
              <p class="mb-0">Spring tune-ups, fall leaf removal, and seasonal maintenance to protect your lawn year-round.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm" style="background: rgba(255,255,255,0.08); color: #ffffff;">
            <div class="card-body">
              <h2 class="h6">Reliable support</h2>
              <p class="mb-0">Fast responses, consistent work, and a friendly service experience from start to finish.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 mt-4">
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm" style="background: rgba(255,255,255,0.05); color: #ffffff;">
            <div class="card-body">
              <h2 class="h5">How it works</h2>
              <ol class="ps-3 mb-0">
                <li class="mb-2">Reach out with your address and service needs.</li>
                <li class="mb-2">Receive a clear estimate and recommended plan.</li>
                <li class="mb-2">Schedule the first visit and enjoy a healthier, cleaner yard.</li>
                <li>Get follow-up advice to keep your lawn looking its best.</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm" style="background: rgba(255,255,255,0.05); color: #ffffff;">
            <div class="card-body">
              <h2 class="h5">Our promise</h2>
              <p>
                Every visit is guided by care for your home and respect for your time. I arrive when scheduled, complete the work carefully, and leave your yard tidy.
              </p>
              <p class="mb-0">
                If you’re not satisfied, I’ll make it right — because long-term relationships are built on trust and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3 border-top border-light border-opacity-25 text-center">
        <h2 class="h4 fw-bold mb-2">Clean Yards. Happy Homes.</h2>
        <p class="mb-0">Ready for a greener, simpler lawn care experience? Get in touch and let’s make your yard better this season.</p>
      </div>
    </section>
  `,
};
