import React from 'react';
import { nanoid } from 'nanoid';

export const headData = {
   title: 'Sky Golden | Senior Front-End Developer',
   lang: 'en',
   description: 'Senior Front-End Developer portfolio website',
};

export const heroData = {
   title: 'Test title here',
   name: 'Sky Golden',
   subtitle: 'Senior Front-End Developer',
   cta: 'Learn more',
};

export const aboutData = {
   img: 'my-photo.jpeg',
   paragraphOne: 'Senior Front-End Developer who specialises in building web apps using Reactjs and React Native.',
   paragraphTwo: 'Lots of experience in the mobile first approach for making web apps responsive and fluid.',
   paragraphThree: ' ',
   resume: 'https://www.canva.com/design/DAEWq4q33rw/__it1wlEv2kHgpe93P_rHQ/view#1',
};

export const projectsData = [
   {
      id: nanoid(),
      img: 'revix.png',
      title: 'Revix',
      info: (
         <span>
            Part of the small team who made the React Native app while also working on the Front-end guild helping
            create coding standards.&nbsp;
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
      info: 'Part of the re-write team who made the web app entirely Reactjs, while also maintaining feature updates on the old Angularjs v1 and Reactjs hybrid web app until the re-write was completed.',
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
      info: 'Worked with Angular v2 and updated each version until Angular v6.',
      info2: 'My first time getting real world experience using the new Angular and Material-UI.',
      url: 'https://app.my-media.com.au/auth/login',
      buttonText: 'Link to portal',
      repo: '',
   },
   {
      id: nanoid(),
      img: 'fireweb.png',
      title: 'FireWeb (Proprietary Software)',
      info: 'Worked on the font-end and dabbled in PHP. Worked a lot on the integrated maps system using the Google Maps API.',
      info2: 'Would you like to find out more about what Fireweb entails?',
      url: 'https://syw.io/fireweb.html',
      buttonText: 'Read more',
      repo: '',
   },
   {
      id: nanoid(),
      img: 'uniti.png',
      title: 'Uniti (Proprietary Software)',
      info: 'Worked on the font-end and dabbled in PHP.',
      info2: 'Would you like to find out more about what Uniti entails?',
      url: 'https://syw.io/uniti.html',
      buttonText: 'Read more',
      repo: '',
   },
   {
      id: nanoid(),
      img: 'rainfin.png',
      title: 'Rainfin',
      info: 'Worked with Angular v2 and updated each version until Angular v6.',
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
