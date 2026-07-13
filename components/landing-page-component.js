export default {
  name: 'landing-page-component',
  template: /* html */ `
    <!-- Hero Section -->
    <section class="py-5 py-lg-6" style="background: linear-gradient(135deg, #2d5016 0%, #4a7c2c 100%); color: white;">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <span class="badge bg-success mb-3">
              <i class="bi bi-flower1 me-2"></i>Reliable lawn care for busy homeowners
            </span>
            <h1 class="display-4 fw-bold mb-3">Fresh cut lawns, tidy edges, and a property you're proud to come home to.</h1>
            <p class="lead mb-4 text-light">
              Kyron's Lawncare offers dependable mowing, cleanup, and seasonal lawn care with friendly service and clear communication.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <router-link to="/items" class="btn btn-light btn-lg fw-bold">
                <i class="bi bi-card-list me-2"></i>Explore services
              </router-link>
              <router-link to="/about" class="btn btn-outline-light btn-lg fw-bold">
                <i class="bi bi-person-circle me-2"></i>Meet Kyron
              </router-link>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="text-center">
              <i class="bi bi-flower1" style="font-size: 150px; opacity: 0.3; color: #2d5016;"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row g-4 text-center">
          <div class="col-md-3 col-sm-6">
            <div class="mb-2">
              <i class="bi bi-hand-thumbs-up" style="font-size: 32px; color: #2d5016;"></i>
            </div>
            <h3 class="h2 fw-bold text-dark mb-2">100%</h3>
            <p class="text-muted">Satisfaction Guarantee</p>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="mb-2">
              <i class="bi bi-clock" style="font-size: 32px; color: #2d5016;"></i>
            </div>
            <h3 class="h2 fw-bold text-dark mb-2">On Time</h3>
            <p class="text-muted">Reliable visits scheduled around your life</p>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="mb-2">
              <i class="bi bi-people" style="font-size: 32px; color: #2d5016;"></i>
            </div>
            <h3 class="h2 fw-bold text-dark mb-2">Local</h3>
            <p class="text-muted">Owner-operated service with personal care</p>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="mb-2">
              <i class="bi bi-leaf" style="font-size: 32px; color: #2d5016;"></i>
            </div>
            <h3 class="h2 fw-bold text-dark mb-2">Healthy</h3>
            <p class="text-muted">Lawn care that helps your grass thrive</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Lawn Care Matters Section -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4">More than just mowing</h2>
            <p class="text-muted mb-4">
              A well-maintained lawn improves your home's curb appeal, supports stronger grass growth, and creates a safer, more relaxing outdoor space.
            </p>
            <div class="row g-3">
              <div class="col-6">
                <div class="p-4 rounded-4" style="background: #eff8ee;">
                  <h4 class="h6 fw-bold mb-2">Stronger lawns</h4>
                  <p class="mb-0 small">Regular cutting and cleanup help grass grow thicker and resist weeds.</p>
                </div>
              </div>
              <div class="col-6">
                <div class="p-4 rounded-4" style="background: #eff8ee;">
                  <h4 class="h6 fw-bold mb-2">Curb appeal</h4>
                  <p class="mb-0 small">Neat edges and clean beds make your property look cared for year-round.</p>
                </div>
              </div>
              <div class="col-6">
                <div class="p-4 rounded-4" style="background: #eff8ee;">
                  <h4 class="h6 fw-bold mb-2">All-season care</h4>
                  <p class="mb-0 small">Seasonal services keep your lawn healthy through spring, summer, fall, and winter.</p>
                </div>
              </div>
              <div class="col-6">
                <div class="p-4 rounded-4" style="background: #eff8ee;">
                  <h4 class="h6 fw-bold mb-2">Relax outdoors</h4>
                  <p class="mb-0 small">A tidy yard gives you more time to enjoy your outdoor living space.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <img src="https://www.lawnstarter.com/blog/wp-content/uploads/2023/12/lawn-care-tools.jpg" alt="Lawn care tools" style="width: 100%; max-width: 420px; border-radius: 18px; box-shadow: 0 20px 60px rgba(33, 48, 33, 0.12);">
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Before & After</h2>
          <p class="lead text-muted">See how a simple lawn care visit can transform your yard and make your home feel more welcoming.</p>
        </div>
        <div class="row g-4 align-items-center">
          <div class="col-md-5">
            <div class="p-4 rounded-4 shadow-sm" style="background: white;">
              <h3 class="h5 fw-bold mb-3">Before</h3>
              <p class="text-muted mb-3">Overgrown grass, uneven edges, and a yard that felt neglected after a busy week.</p>
              <img src="https://prairiegreenlawncare.com/wp-content/uploads/elementor/thumbs/Before-After-Lawn-Mowing-r5mdzufqttspg133ch9ls3t9lvz0px1ol9wbjntuow.webp" alt="Lawn before service" style="width: 100%; border-radius: 16px; object-fit: cover; height: 220px;">
            </div>
          </div>
          <div class="col-md-2 text-center">
            <div class="h-100 d-flex flex-column justify-content-center align-items-center">
              <span class="badge bg-success rounded-pill px-4 py-2 mb-3">Transformed</span>
              <div style="width: 3px; height: 120px; background: #2d5016;"></div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="p-4 rounded-4 shadow-sm" style="background: white;">
              <h3 class="h5 fw-bold mb-3">After</h3>
              <p class="text-muted mb-3">Fresh cuts, clean borders, and a polished lawn ready for family time, gatherings, and outdoor enjoyment.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <div class="col-lg-8 text-center">
            <div class="p-4 rounded-4 shadow-sm" style="background: #1b4517; color: white;">
              <p class="mb-2 fst-italic">“Kyron turned our overgrown yard into the best looking block on the street. Fast, friendly, and exactly what we needed.”</p>
              <p class="mb-0 fw-bold">– Sarah M., satisfied homeowner</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Services We Offer</h2>
          <p class="lead text-muted">Choose the lawn care services that work best for you</p>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm transition" style="transition: transform 0.3s ease;">
              <div class="card-body text-center">
                <img src="https://www.lawnstarter.com/blog/wp-content/uploads/2023/12/pushing-lawn-mower-1.jpg" alt="Mowing and trimming service" style="width: 96px; height: 96px; object-fit: cover; display: block; margin: 0 auto 15px; border-radius: 10px;">
                <h3 class="h5 fw-bold mb-2">Mowing & Trimming</h3>
                <p class="text-muted">Clean cuts, tidy edges, and a polished finish every visit. We handle all mowing and trimming to keep your lawn looking pristine.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm transition" style="transition: transform 0.3s ease;">
              <div class="card-body text-center">
                <i class="bi bi-flower2" style="font-size: 48px; color: #2d5016; display: block; margin-bottom: 15px;"></i>
                <h3 class="h5 fw-bold mb-2">Seasonal Care</h3>
                <p class="text-muted">Weeding, debris cleanup, and lawn upkeep through every season. We adapt our services to keep your yard healthy year-round.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm transition" style="transition: transform 0.3s ease;">
              <div class="card-body text-center">
                <i class="bi bi-bookmark-check" style="font-size: 48px; color: #2d5016; display: block; margin-bottom: 15px;"></i>
                <h3 class="h5 fw-bold mb-2">Simple Booking</h3>
                <p class="text-muted">Reach out for a quote and reserve your preferred service date. Easy, transparent, and convenient scheduling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-5" style="background: linear-gradient(135deg, #2d5016 0%, #4a7c2c 100%); color: white;">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <span class="badge bg-light text-dark mb-3 px-3 py-2" style="font-size: 16px;">
              <i class="bi bi-gift me-2" style="color: #2d5016;"></i>Limited Time Offer
            </span>
            <h2 class="display-4 fw-bold mb-3">Get 10% Off Your First Service</h2>
            <p class="lead mb-4 text-light">
              Ready to experience professional lawn care? Book your first service today and enjoy a special 10% discount. Let us show you what quality service looks like.
            </p>
            <router-link to="/items" class="btn btn-light btn-lg fw-bold px-4">
              <i class="bi bi-lightning-fill me-2" style="color: #2d5016;"></i>Claim Your Discount
            </router-link>
          </div>
        </div>
      </div>
    </section>
  `,
};
