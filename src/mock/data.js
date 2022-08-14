import React from 'react';
import { nanoid } from 'nanoid';

export const headData = {
   title: 'Sky Golden | Senior Front-End Engineer',
   lang: 'en',
   description: 'Senior Front-End Engineer portfolio website',
};

export const heroData = {
   title: ' ',
   name: 'Sky Golden',
   subtitle: 'Senior Front-End Engineer',
   cta: 'Learn more',
};

export const aboutData = {
   img: 'my-photo.jpeg',
   paragraphOne:
      'I am a Senior Front-End Engineer who specialises in building web-apps using Reactjs and React Native.',
   paragraphTwo: 'I have a lot of experience using the mobile first approach and making web-apps responsive and fluid.',
   paragraphThree: ' ',
   resume: 'https://www.canva.com/design/DAE6SEhA0cY/0724QcayVU_-CyyKpXICQw/view',
};

export const projectsData = [
   {
      id: nanoid(),
      img: 'revix.png',
      title: 'Revix',
      info: (
         <span>
            I was apart of the small team who made the React Native app while also working on the Front-end guild
            helping create coding standards.&nbsp;
            <a
               className="text-color-secondary"
               href="https://apps.apple.com/za/app/revix-buy-bitcoin-crypto/id1590491829"
               rel="noreferrer"
               target="_blank"
            >
               iOS
            </a>
            &nbsp;|&nbsp;
            <a
               className="text-color-secondary"
               href="https://play.google.com/store/apps/details?id=com.revix.app"
               rel="noreferrer"
               target="_blank"
            >
               Android
            </a>
         </span>
      ),
      info2: (
         <span>
            I also worked on the React app and the&nbsp;
            <a className="text-color-secondary" href="https://www.revix.com" rel="noreferrer" target="_blank">
               public Gatsby website.
            </a>
         </span>
      ),
      url: 'https://app.revix.com/login',
      buttonText: 'Link to portal',
      repo: '',
   },
   {
      id: nanoid(),
      img: '22seven.png',
      title: '22seven',
      info: 'I was apart of a re-write team who wrote the web-app entirely in Reactjs, whilst also maintaining feature updates on the old web-app until the re-write was completed.',
      info2: (
         <span>
            I also worked on the&nbsp;
            <a className="text-color-secondary" href="https://www.22seven.com" rel="noreferrer" target="_blank">
               public Gatsby website.
            </a>
         </span>
      ),
      url: 'https://www.22seven.com/app/',
      buttonText: 'Link to portal',
      repo: '',
   },
   {
      id: nanoid(),
      img: 'my-media.png',
      title: 'MyMedia (Can only be accessed via free trial on homepage)',
      info: 'I worked with Angular v2, worked on new features and updated each version until Angular v6.',
      info2: 'My first time getting real world experience using the new Angular and Material-UI.',
      url: 'https://app.my-media.com.au/auth/login',
      buttonText: 'Link to portal',
      repo: '',
   },
   {
      id: nanoid(),
      img: 'fireweb.png',
      title: 'FireWeb (Proprietary Software)',
      info: 'I worked on the font-end and dabbled in PHP. Worked a lot on the integrated maps system using the Google Maps API.',
      info2: 'Would you like to find out more about what Fireweb entails?',
      url: 'https://syw.io/fireweb.html',
      buttonText: 'Read more',
      repo: '',
   },
   {
      id: nanoid(),
      img: 'uniti.png',
      title: 'Uniti (Proprietary Software)',
      info: 'I worked on the Angular web-app and dabbled in the PHP Laravel framework.',
      info2: 'Would you like to find out more about what Uniti entails?',
      url: 'https://syw.io/uniti.html',
      buttonText: 'Read more',
      repo: '',
   },
   {
      id: nanoid(),
      img: 'rainfin.png',
      title: 'Rainfin',
      info: 'I worked with Angular v2, worked on new features and updated each version until Angular v6.',
      info2: 'The seem to be protective over who gets the link to their login portal.',
      url: 'https://www.rainfin.com/About/Howitworks',
      buttonText: 'Read more',
      repo: '',
   },
];

export const contactData = {
   cta: 'Opens in default email client',
   btn: 'Email',
   email: 'skygolden90@gmail.com',
};

export const footerData = {
   networks: [
      {
         id: nanoid(),
         name: 'linkedin',
         url: 'https://www.linkedin.com/in/skygolden/',
      },
      {
         id: nanoid(),
         name: 'github',
         url: 'https://github.com/SkyGoldenZa',
      },
   ],
};
