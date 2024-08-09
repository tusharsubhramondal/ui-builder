const OneColumnBlock = {
    id: 'one-column',
    label: '1 Column',
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>
      </svg>`,
    content: `
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="content">
              <p>Your content here</p>
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Basics',
    attributes: {
        // class: 'fa fa-media',
        title: 'One Column',  // Optional tooltip text
    },
};

const TwoColumnBlock = {
    id: 'two-column',
    label: '2 Columns',
    media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"></path>
      </svg>`,
    content: `
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="content">
              <p>Column 1 content</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content">
              <p>Column 2 content</p>
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Basics',
    attributes: {
        // class: 'fa fa-columns',
        title: 'Two Columns',
    },
};

const ThreeColumnBlock = {
    id: 'three-column',
    label: '3 Columns',
    media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"></path>
      </svg>`,
    content: `
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="content">
              <p>Column 1 content</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              <p>Column 2 content</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="content">
              <p>Column 3 content</p>
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Basics',
    attributes: {
        // class: 'fa fa-th',
        title: 'Three Columns',
    },
};

const TwoColumnByThreeSevenBlock = {
    id: 'two-column-37',
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
      </svg>`,
    label: '2 Columns 3/7',
    content: `
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="content">
              <p>Column 3/7 content</p>
            </div>
          </div>
          <div class="col-md-7">
            <div class="content">
              <p>Column 4/7 content</p>
            </div>
          </div>
        </div>
      </div>
    `,
    category: 'Basics',
    attributes: {
        // class: 'fa fa-columns',
        title: 'Two Columns 3/7',
    },
};

export {
    OneColumnBlock,
    TwoColumnBlock,
    ThreeColumnBlock,
    TwoColumnByThreeSevenBlock,
};


