const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let mainContentImage = document.getElementById("middle-img");
mainContentImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Selectors
let headerNav = document.querySelectorAll("a");
headerNav.forEach(function(currentValue, i) {
  currentValue.textContent = siteContent["nav"][`nav-item-${i}`]
});

// CTA
let ctaMainText = document.querySelector("h1");
ctaMainText.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

// Main Content
let subHeader = document.querySelectorAll("h4");
Array.from(subHeader)
subHeader.forEach(function(currentValue, i) {
  currentValue.textContent = siteContent.nav[i]
});

let sectionContent = document.getElementsByTagName("p");
sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];

// Contact
subHeader[5].textContent = siteContent["contact"]["contact-h4"];

sectionContent[5].textContent = siteContent["contact"]["address"];
sectionContent[6].textContent = siteContent["contact"]["phone"];
sectionContent[7].textContent = siteContent["contact"]["email"];

// Footer
sectionContent[8].textContent = siteContent["footer"]["copyright"];

// Navigation Style
headerNav.forEach(function(currentValue){
  currentValue.style.color = 'green';
})

// Added Content
let doc = document.createElement('a');
doc.textContent = "Doc";

let newContent = document.querySelector('nav');
newContent.appendChild(doc);

let signUp = document.createElement('a');
signUp.textContent = 'Sign Up';
newContent.prepend(signUp);