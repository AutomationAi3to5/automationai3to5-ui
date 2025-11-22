#!/bin/bash

# Create playground demos
playgrounds=(
  "color-palette"
  "dark-light-toggle"
  "icon-showcase"
  "form-validation"
  "responsive-demo"
  "svg-animations"
  "interactive-components"
  "animation-showcase"
  "grid-system"
  "typography-showcase"
  "spacing-scale"
  "shadow-showcase"
  "button-variations"
  "modal-variations"
  "card-layouts"
  "table-examples"
  "navigation-patterns"
  "footer-variations"
  "hero-sections"
  "testimonial-section"
  "pricing-table"
  "feature-cards"
  "stats-showcase"
  "timeline-examples"
  "accordion-demo"
  "carousel-demo"
  "gallery-demo"
  "form-elements"
  "input-states"
  "notification-demo"
  "toast-demo"
  "tooltip-demo"
  "dropdown-demo"
  "breadcrumb-patterns"
  "pagination-examples"
  "tabs-demo"
  "steps-demo"
  "skeleton-loading"
  "gradient-showcase"
  "border-radius-scale"
  "animation-transitions"
  "accessibility-demo"
  "performance-test"
  "cross-browser-test"
  "mobile-responsive"
  "integration-modal-react"
  "component-interaction"
)

for playground in "${playgrounds[@]}"; do
  filename=$(echo "$playground" | sed 's/-/_/g')
  cat > "${playground}.html" << PLAYGROUND
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${playground} - Design System Playground</title>
  <link rel="stylesheet" href="../../css/main.css">
  <style>
    .playground-container {
      padding: 2rem;
      min-height: 100vh;
      background: #fafafa;
    }
    .playground-header {
      margin-bottom: 2rem;
    }
    .playground-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .playground-description {
      font-size: 1rem;
      color: #666;
    }
    .playground-content {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .demo-section {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eee;
    }
    .demo-section:last-child {
      border-bottom: none;
    }
    .demo-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .demo-content {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .controls {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <div class="playground-container">
    <div class="playground-header">
      <h1 class="playground-title">${playground}</h1>
      <p class="playground-description">Interactive playground for testing and experimentation</p>
    </div>

    <div class="playground-content">
      <div class="controls">
        <label>
          <strong>Demo Controls:</strong>
          <!-- Control elements here -->
        </label>
      </div>

      <div class="demo-section">
        <h2 class="demo-title">Basic Demo</h2>
        <div class="demo-content">
          <!-- Demo content here -->
        </div>
      </div>

      <div class="demo-section">
        <h2 class="demo-title">Advanced Features</h2>
        <div class="demo-content">
          <!-- Advanced demo content here -->
        </div>
      </div>

      <div class="demo-section">
        <h2 class="demo-title">Edge Cases</h2>
        <div class="demo-content">
          <!-- Edge case demonstrations here -->
        </div>
      </div>

      <div class="demo-section">
        <h2 class="demo-title">Code Example</h2>
        <pre><code>&lt;!-- Code example goes here --&gt;</code></pre>
      </div>
    </div>
  </div>

  <script>
    // Playground interactive code here
  </script>
</body>
</html>
PLAYGROUND
done

echo "✅ Created ${#playgrounds[@]} playground demos"
