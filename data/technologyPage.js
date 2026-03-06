import {
  SiDotnet, SiNodedotjs, SiPython, SiPhp, SiCplusplus,
  SiHtml5, SiCss3, SiJavascript, SiReact, SiAngular,
  SiMysql,
  SiFigma, SiAdobexd, SiAdobephotoshop,
} from 'react-icons/si'
import { FaJava, FaDatabase } from 'react-icons/fa'

export const techCategories = [
  {
    category: 'Back-End Technologies',
    technologies: [
      {
        icon: SiDotnet, name: 'ASP.NET', color: '#512BD4',
        description: 'ASP.NET is Microsoft\'s powerful, cross-platform framework for building modern web applications and APIs. It supports C# and Visual Basic, offering exceptional performance, security, and scalability. ASP.NET\'s rich library ecosystem, built-in authentication, and seamless integration with Azure make it the preferred choice for enterprise-grade web development. We use ASP.NET to build robust, high-performance backend systems for businesses that demand reliability and security at scale.',
      },
      {
        icon: SiNodedotjs, name: 'Node.js', color: '#339933',
        description: 'Node.js is a high-performance, event-driven JavaScript runtime built on Chrome\'s V8 engine. It allows developers to run JavaScript on the server side, making it ideal for building fast, scalable network applications. Its non-blocking I/O model makes it highly efficient for real-time applications, REST APIs, and microservices. At OW CreaTech, we leverage Node.js extensively to deliver robust backends that handle high traffic and complex business logic with ease.',
      },
      {
        icon: SiPython, name: 'Python', color: '#3776AB',
        description: 'Python is a versatile, high-level programming language renowned for its simplicity and readability. It is widely used for web backend development, machine learning, artificial intelligence, data analytics, and automation. Python\'s rich ecosystem of libraries — including Django, Flask, TensorFlow, and Pandas — makes it the go-to language for data-driven and AI-powered applications. We use Python to build intelligent backends and data pipelines that give businesses a competitive edge.',
      },
      {
        icon: SiPhp, name: 'PHP', color: '#777BB4',
        description: 'PHP is one of the most widely-used server-side scripting languages, powering over 70% of the web including major platforms like WordPress and Facebook. It is highly compatible with databases like MySQL and PostgreSQL and supports popular frameworks like Laravel and Symfony. PHP is an excellent choice for building dynamic websites, content management systems, and e-commerce platforms. Our PHP developers create clean, maintainable, and scalable web applications tailored to client requirements.',
      },
      {
        icon: FaJava, name: 'Java', color: '#007396',
        description: 'Java is a robust, platform-independent, object-oriented programming language that has powered enterprise software for over two decades. Known for its "write once, run anywhere" philosophy, Java is ideal for building large-scale, secure, and high-performance backend systems. With frameworks like Spring Boot and Hibernate, we build enterprise-grade applications, banking systems, and mission-critical platforms that require the highest levels of reliability and security.',
      },
      {
        icon: SiDotnet, name: 'C#', color: '#9B4F96',
        description: 'C# is a modern, type-safe, object-oriented language developed by Microsoft as part of the .NET platform. It combines the power of C++ with the simplicity of Visual Basic, offering features like LINQ, async/await, and generics for writing clean, efficient code. C# is widely used for building desktop applications, web APIs, game development with Unity, and enterprise software. We use C# to build high-performance, maintainable applications that leverage the full power of the .NET ecosystem.',
      },
      {
        icon: SiCplusplus, name: 'C++', color: '#00599C',
        description: 'C++ is a powerful, general-purpose programming language that provides low-level memory control while supporting object-oriented and generic programming paradigms. It is widely used for operating systems, game engines, embedded systems, high-frequency trading platforms, and performance-critical applications. C++\'s unmatched execution speed and hardware access make it irreplaceable in domains where performance is paramount. We use C++ for building high-performance components, real-time systems, and solutions requiring direct hardware interaction.',
      },
    ],
  },
  {
    category: 'Front-End Technologies',
    technologies: [
      {
        icon: SiHtml5, name: 'HTML5', color: '#E34F26',
        description: 'HTML5 is the latest and most advanced version of HyperText Markup Language, the foundational technology of the web. It introduces powerful new elements like canvas, video, audio, and semantic tags that enable richer, more accessible web experiences without third-party plugins. HTML5\'s offline storage, geolocation API, and WebSocket support open up new possibilities for modern web applications. We use HTML5 to build semantically correct, accessible, and SEO-friendly web structures that form the solid foundation of every web project.',
      },
      {
        icon: SiCss3, name: 'CSS3', color: '#1572B6',
        description: 'CSS3 is the latest evolution of Cascading Style Sheets, bringing powerful new capabilities including animations, transitions, flexbox, CSS grid, custom properties (variables), and media queries for responsive design. CSS3 enables developers to create stunning visual effects, fluid layouts, and mobile-first responsive designs purely in CSS without JavaScript. With CSS3, we craft visually impressive, cross-browser compatible, and fully responsive user interfaces that adapt beautifully across all screen sizes and devices.',
      },
      {
        icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E',
        description: 'JavaScript is the world\'s most widely-used programming language and the only language natively supported by all web browsers. It enables dynamic, interactive web experiences — from form validation and DOM manipulation to complex single-page applications and real-time features. With modern ES6+ features, JavaScript has matured into a powerful language for both frontend and backend development. We use JavaScript as the backbone of our web development projects, leveraging its vast ecosystem to deliver rich, interactive user experiences.',
      },
      {
        icon: SiReact, name: 'React.js', color: '#61DAFB',
        description: 'React.js is a widely adopted JavaScript library developed by Facebook for building fast, interactive user interfaces. It uses a component-based architecture and a virtual DOM to efficiently update and render components, resulting in highly performant web applications. React\'s reusable components, rich ecosystem, and strong community support make it the leading choice for modern frontend development. At OW CreaTech, we use React to build dynamic, scalable, and visually stunning web applications for our clients worldwide.',
      },
      {
        icon: SiAngular, name: 'Angular.js', color: '#DD0031',
        description: 'Angular is a comprehensive, TypeScript-based framework developed by Google for building large-scale enterprise web applications. It follows the MVC architecture and provides a complete solution including two-way data binding, dependency injection, routing, and form handling out of the box. Angular\'s opinionated structure ensures consistency across large development teams and codebases. We use Angular for complex enterprise dashboards, portals, and applications where maintainability and scalability are top priorities.',
      },
    ],
  },
  {
    category: 'Database',
    technologies: [
      {
        icon: SiMysql, name: 'MySQL', color: '#4479A1',
        description: 'MySQL is the world\'s most widely used open-source relational database management system, trusted by companies like Facebook, Twitter, and YouTube. It provides excellent performance, reliability, and ease of use for web applications of all sizes. MySQL\'s InnoDB storage engine offers full ACID compliance and foreign key support. We use MySQL for web applications, e-commerce platforms, and content management systems where proven reliability, extensive tooling support, and cost-effectiveness are the primary considerations.',
      },
      {
        icon: FaDatabase, name: 'SQL Server', color: '#CC2927',
        description: 'Microsoft SQL Server is an enterprise-grade relational database management system known for its exceptional performance, robust security, and deep integration with the Microsoft technology stack. It offers advanced features including in-memory processing, always-on availability groups, advanced analytics with R and Python, and seamless integration with Azure. SQL Server is the preferred database for large enterprises running on .NET and Windows infrastructure. We use SQL Server for enterprise applications requiring advanced reporting, business intelligence, and mission-critical data management.',
      },
    ],
  },
  {
    category: 'UI/UX & Design Tools',
    technologies: [
      {
        icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF',
        description: 'Adobe Photoshop is the world\'s premier raster graphics editing software, used by designers, photographers, and digital artists for over three decades. It offers unparalleled tools for photo retouching, compositing, digital painting, and web graphic creation. Photoshop\'s layer-based editing, smart objects, and non-destructive adjustment layers make it the standard for any pixel-level design work. Our design team uses Photoshop for creating marketing materials, product visuals, social media creatives, and any design work requiring precise image manipulation and enhancement.',
      },
      {
        icon: SiFigma, name: 'Figma', color: '#F24E1E',
        description: 'Figma is the industry-leading collaborative interface design tool that operates entirely in the browser, enabling real-time collaboration between designers and stakeholders. It supports the complete design workflow — from low-fidelity wireframes to high-fidelity prototypes to production-ready design systems. Figma\'s component libraries, auto-layout, and developer handoff features streamline the transition from design to development. We use Figma as our primary design tool to create stunning, pixel-perfect UI/UX designs that are reviewed and approved collaboratively with clients.',
      },
      {
        icon: SiAdobexd, name: 'Adobe XD', color: '#FF61F6',
        description: 'Adobe XD is a powerful vector-based UI/UX design and prototyping tool integrated within the Adobe Creative Cloud ecosystem. It enables designers to create wireframes, interactive prototypes, and design specifications with smooth integration alongside Photoshop and Illustrator. XD\'s repeat grid feature and auto-animate capabilities accelerate the design process significantly. We use Adobe XD for clients requiring tight integration with the broader Adobe Creative Suite, delivering interactive prototypes that accurately represent the final product\'s look and behavior.',
      },
    ],
  },
]
