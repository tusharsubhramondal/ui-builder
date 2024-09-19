const OneColumnBlock = {
  id: "one-column",
  label: "1 Column",
  media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>
      </svg>`,
  content: `
        <div class="gjs-row">
          <div class="gjs-cell">
            <div></div>
          </div>
        </div>
    `,
  category: "Basics",
  attributes: {
    // class: 'fa fa-media',
    title: "One Column", // Optional tooltip text
  },
};

const TwoColumnBlock = {
  id: "two-column",
  label: "2 Columns",
  media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"></path>
      </svg>`,
  content: `
        <div class="gjs-row">
          <div class="gjs-cell">
            
          </div>
          <div class="gjs-cell">
            
          </div>
        </div>
    `,
  category: "Basics",
  attributes: {
    // class: 'fa fa-columns',
    title: "Two Columns",
  },
};

const ThreeColumnBlock = {
  id: "three-column",
  label: "3 Columns",
  media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"></path>
      </svg>`,
  content: `
        <div class="gjs-row">
          <div class="gjs-cell">
           
          </div>
          <div class="gjs-cell">
            
          </div>
          <div class="gjs-cell">
            
          </div>
        </div>
    `,
  category: "Basics",
  attributes: {
    // class: 'fa fa-th',
    title: "Three Columns",
  },
};

const TwoColumnByThreeSevenBlock = {
  id: "two-column-37",
  media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
      </svg>`,
  label: "2 Columns 3/7",
  content: `
        <div class="gjs-row">
          <div class="gjs-cell flex-basis-30">
            
          </div>
          <div class="gjs-cell flex-basis-70">
            
          </div>
        </div>
    `,
  category: "Basics",
  attributes: {
    // class: 'fa fa-columns',
    title: "Two Columns 3/7",
  },
};

const TextBlock = {
  id: "text",
  label: "Text",
  media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z"></path>
      </svg>`,
  content: `
        <div class="p-10">
          Insert your text here
        </div>
    `,
  category: "Basics",
  attributes: {
    // class: 'fa fa-font',
    title: "Text",
  },
};

const Link = {
  id: "link",
  label: "Link",
  media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
      </svg>`,
  content: {
    type: "link",
    content: "Insert your link here",
    style: { color: "#d983a6" },
  },
  category: "Basics",
  attributes: {
    // class: 'fa fa-link',
    title: "Link",
  },
};

const Image = {
  id: "image",
  label: "Image",
  media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z"></path>
      </svg>`,
  content: { type: "image" },
  category: "Basics",
  attributes: {
    // class: 'fa fa-image',
    title: "Image",
  },
  activate: true,
};

const Quote = {
  id: "quote",
  label: "Quote",
  media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"></path>
    </svg>`,
  content: `<blockquote data-gjs-highlightable="true" id="iwda" data-gjs-type="text" draggable="true" class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`,
  category: "Basics",
  attributes: {
    // class: 'fa fa-image',
    title: "Quote",
  },
};

const TextSelection = {
  id: "text-selection",
  label: "Text Selection",
  media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"></path>
    </svg>`,
  content: `<div class="container p-3">
    <div class="row">
        <h3>Insert title here</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</p>
    </div>
</div>`,
  category: "Basics",
  attributes: {
    // class: 'fa fa-image',
    title: "Text Selection",
  },
};

const Input = {
  id: "input",
  label: "Input",
  media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 10h1v4H4z"></path></svg>`,
  content: `
        <div class="mb-3">
          <label for="input" class="form-label">Input</label>
          <input type="text" class="form-control" id="input" placeholder="input">
        </div>
    `,
  category: "Forms",
  attributes: {
    // class: 'fa fa-link',
    title: "Input",
  },
  // traits: [
  //   // Strings are automatically converted to text types
  //   'name', // Same as: { type: 'text', name: 'name' }
  //   'placeholder',
  //   {
  //     type: 'select', // Type of the trait
  //     name: 'type', // (required) The name of the attribute/property to use on component
  //     label: 'Type', // The label you will see in Settings
  //     options: [
  //       { id: 'text', label: 'Text' },
  //       { id: 'email', label: 'Email' },
  //       { id: 'password', label: 'Password' },
  //       { id: 'number', label: 'Number' },
  //     ]
  //   },
  //   {
  //     type: 'checkbox',
  //     name: 'required',
  //   }
  // ],
};

export {
  OneColumnBlock,
  TwoColumnBlock,
  ThreeColumnBlock,
  TwoColumnByThreeSevenBlock,
  TextBlock,
  Link,
  Image,
  Quote,
  TextSelection,
  Input,
};
