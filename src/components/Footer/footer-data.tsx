export const footerData = {
    logo: {
      src: '/assets/Logo PNG/Logo_Blanco.png',
      alt: 'RM Construction Logo'
    },
    socialLinks: [
      {
        name: 'Facebook',
        label: 'RM Construction',
        url: 'https://www.facebook.com/profile.php?id=61564815058462&mibextid=wwXIfr',
        target: "_blank",
        icon: (
          <svg
            className="w-7 h-7 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        )
      }
    ],
    columns: [
      {
        title: 'Services',
        links: [
          { text: 'Construction Zone', url: '/services/construction-zone' },
          { text: 'Project Management', url: '/services/project-management' },
          { text: 'Design Studio', url: '/services/design-studio' },
          { text: 'Building Permits', url: '/services/building-permits' }
        ]
      },
      {
        title: 'Useful Links',
        links: [
          { text: 'Home', url: '/' },
          { text: 'About Us', url: 'about-us' },
          { text: 'Contact', url: 'contact' }
        ]
      },
      {
        title: 'Schedule',
        items: [
          {
            label: 'Monday - Thursday',
            text: '8:00 AM - 5:00 PM'
          },
          {
            label: 'Friday - Saturday',
            text: '8:00 AM - 1:00 PM'
          },
          {
            label: 'Sunday - Closed',
          }
        ],
        contact: {
          title: 'Contact',
          email: 'info@rmcdesignstudio.co',
          phone: '+1 619-292-1668'
        }
      }
    ],
    copyright: `© ${new Date().getFullYear()} RM Construction & Design Studio Inc. All rights reserved.`
  };