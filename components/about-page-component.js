export default {
  name: 'about-page-component',
  template: /* html */ `
    <section class="container py-4 py-lg-5">
      <div class="row g-4 align-items-start">
        <div class="col-lg-7">
          <h1 class="display-6 fw-bold mb-3">About Kyron’s Lawncare & Maintence</h1>
          <p class="lead">I help homeowners keep their outdoor spaces neat, healthy, and easy to enjoy.</p>
          <p>
            My approach is simple: dependable work, honest communication, and attention to the details that make a yard stand out.
          </p>
          <p>
            Whether it is routine mowing, cleanup, or seasonal maintenance, I aim to make every visit stress-free and worthwhile.
          </p>
        </div>

        <div class="col-lg-5">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <h2 class="h5">Why clients choose me</h2>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><i class="bi bi-check2-circle me-2 text-success"></i>Flexible scheduling</li>
                <li class="mb-2"><i class="bi bi-check2-circle me-2 text-success"></i>Friendly, local service</li>
                <li><i class="bi bi-check2-circle me-2 text-success"></i>Clear pricing and dependable results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3 mt-1">
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h2 class="h6">What I offer</h2>
              <p class="text-muted mb-0">Mowing, edging, seasonal cleanup, and dependable lawn care support for residential properties.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h2 class="h6">How it works</h2>
              <p class="text-muted mb-0">Tell me about your property, choose a service plan, and I’ll help you get started with a simple quote.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};
