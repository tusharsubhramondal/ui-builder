export const HeaderWidget = {
    label: 'Header Widget',
    content: `
        <header class="header-widget">
            <div class="header-content">
                <div class="logo">
                    <a href="/">
                        <img src="logo.png" alt="Company Logo" />
                    </a>
                </div>
                <nav class="navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>
                <div class="contact-info">
                    <p>Email: contact@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </header>
    `,
    category: 'Widgets',
};
