export default {
  name: 'landing-page-component',
  template: /* html */ `
    <section class="container py-4 py-lg-5">
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <span class="badge text-bg-primary-subtle text-primary-emphasis mb-3">
            <i class="bi bi-flower1 me-2"></i>Reliable lawn care for busy homeowners
          </span>
          <h1 class="display-5 fw-bold mb-3">Fresh cut lawns, tidy edges, and a property you’re proud to come home to.</h1>
          <p class="lead text-muted mb-4">
            Kyron’s Lawncare offers dependable mowing, cleanup, and seasonal lawn care with friendly service and clear communication.
          </p>
          <div class="d-flex flex-wrap gap-2">
            <router-link to="/items" class="btn btn-primary btn-lg">
              <i class="bi bi-card-list me-2"></i>Explore services
            </router-link>
            <router-link to="/about" class="btn btn-outline-secondary btn-lg">
              <i class="bi bi-person-circle me-2"></i>Meet Kyron
            </router-link>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="card shadow-sm border-0 p-3">
            <div class="card-body">
              <h2 class="h4 mb-3">What you can expect</h2>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Weekly or seasonal visits</li>
                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Prompt communication and easy booking</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>Clean results that keep your yard looking sharp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3 mt-2">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h6">Mowing & Trimming</h3>
              <p class="text-muted mb-0">Clean cuts, tidy edges, and a polished finish every visit.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h6">Seasonal Care</h3>
              <p class="text-muted mb-0">Weeding, debris cleanup, and lawn upkeep through every season.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h3 class="h6">Simple Booking</h3>
              <p class="text-muted mb-0">Reach out for a quote and reserve your preferred service date.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};
