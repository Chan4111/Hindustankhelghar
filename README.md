# Hindustan Khel Ghar — Website

Static website (HTML + CSS + JS). Kisi build tool ki zaroorat nahi — `index.html` double-click karke kholo.

## Folder structure
```
hindustan-khel-ghar/
├── index.html              Home page
├── pages/
│   ├── products.html       Products + category filter
│   ├── about.html          About Us
│   ├── gallery.html        Gallery + lightbox
│   └── contact.html        Contact, map, FAQ
└── assets/
    ├── css/                base.css · layout.css · components.css
    ├── js/
    │   ├── config.js       ← phone, address, map link (yahin edit karo)
    │   ├── data.js         ← products / categories / gallery list
    │   └── main.js         header, footer, filters, animations
    └── images/
        ├── brand/          logo, favicon
        ├── hero/           stadium animation
        ├── products/       apni product photos yahan rakho
        ├── categories/     category photos
        └── gallery/        shop / gallery photos
```

## Kya edit karna hai
- **Phone / address / map:** `assets/js/config.js`
- **Products add/remove:** `assets/js/data.js` (`img` me `assets/images/products/xyz.jpg` jaisa path do)
- Abhi product/gallery photos Unsplash demo photos hain (original file jaisi). Asli photos daal do.
-// Pehle (Unsplash demo photo)
img: U("1531415074968-036ba1b575da")

// Baad me (apni photo)
img: "assets/images/categories/cricket.jpg"
