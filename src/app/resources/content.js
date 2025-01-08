import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Aki',
    lastName:  'Inoyatov',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web Developer',
    avatar:    '/images/avatar.png',
    location:  'America/Phoenix',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Russian', 'Turkish', 'Uzbek']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ainoyatov',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/aki-inoyatov',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:info@gravityelements.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Tech lead and builder</>,
    subline: <>
    I'm Aki, a web developer, tech lead, and the founder of <InlineCode>Gravity Elements</InlineCode>, where I craft intuitive user experiences. When I'm not leading teams, you'll find me building passion projects that push my creativity.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Web development professional with proven history of building and optimizing web applications to meet client specifications. Adept at collaborating within teams to deliver high-quality projects that drive business results. Known for technical acumen in various programming languages and adaptability to evolving project requirements. 
        <br />
        <br />
        Pursuing full-time role that presents professional challenges and leverages interpersonal skills, effective time management, and problem-solving expertise.</>

        // description: <>I’m a tech leader, entrepreneur, and web developer passionate about solving real-world problems through technology. As the founder of Gravity Elements, I focus on creating user-centric web experiences that balance functionality and simplicity while addressing the unique needs of each business.
        // <br/>
        // <br/>
        // Specializing in digital transformation, I modernize outdated websites with scalable, modern tools that keep long-established mom-and-pop shops competitive in an ever-evolving digital world. Through e-commerce solutions, I help unlock new revenue streams, expand their reach, and drive sustainable growth.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Gravity Elements',
                timeframe: '2022 - Present',
                role: 'Web Developer',
                achievements: [
                    <>Founded and managed a web development agency, leading a team of developers and designers to deliver high-quality web solutions for various clients (Uncharted Ventures LLC, Art & Custom Frames)</>,
                    <>Increased client acquisition by 60% in the first year through targeted marketing strategies and SEO optimization</>,
                    <>Led the redesign of a major client's e-commerce site, resulting in a 35% increase in conversion rates and a 25% rise in average order value over a six-month period</>,
                    <>Developed and launched a CRM tool to enhance team collaboration and productivity, reducing project turnaround times by 40%</>,
                    <>Designed and developed a highly responsive, user-friendly Transportation Management Software
                    (TMS) for clients, resulting in a 30% uptick in online traffic and engagement
                    </>,
                    <>Spearheaded the creation and launch of a successful e-commerce platform, driving a 30% increase in sales within the first quarter of operation
                    </>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Dirilis Group Inc',
                timeframe: '4/23 - 9/23',
                role: 'Contractor, Software Engineer',
                achievements: [
                    <>Successfully integrated APIs with 3rd party solutions</>,
                    <>Optimized the existing ETL processes, automated scheduling and logging</>,
                    <>Designed and documented API specifications</>
                ],
                images: [ ]
            },
            {
                company: 'WellPsyche Medical Group',
                timeframe: '11/22 - 4/23',
                role: 'Contractor, Lead Engineer, AWS Cloud Engineer',
                achievements: [
                    <>Successfully identified and partnered with a certified HIPAA compliance provider, leading to a 20% decrease in AWS HIPAA audit violations and ensuring regulatory adherence</>,
                    <>Discovered and implemented a third-party solution for developing and managing security programs such as HIPAA, resulting in a 30% reduction in time and resources needed for program maintenance</>,
                ],
                images: [ ]
            },
            {
                company: 'AdviNOW Medical',
                timeframe: '5/22 - 11/22',
                role: 'Director of Engineering, Infrastructure and API Services',
                achievements: [
                    <>Led DevOps, Middleware, and API teams, overseeing their operations and ensuring successful execution</>,
                    <>Orchestrated the seamless migration of 28 Kubernetes based applications from one cloud Managed Service Provider (MSP) to another</>,
                    <>Spearheaded the development of an open-source observability stack to replace the existing logging service</>,
                    <>Utilized Terraform to streamline provisioning and configuration of Kubernetes clusters, resulting in a 25% enhancement in resource allocation efficiency and a 20% increase in high availability</>
                ],
                images: [ ]
            },
            {
                company: 'Allstate Identity Protection',
                timeframe: '5/16 - 5/22',
                role: 'Research Engineer, Sales Engineer, Analyst Engineer, Implementation Manager',
                achievements: [
                    <>Demonstrated continuous growth and versatility at Allstate through progression from client onboarding to overseeing technical aspects of batch processing, Sales Engineer, and ultimately Research Engineer</>,
                    <>Contributed to companywide re-platforming efforts to transition from Monolithic tech stack to Microservices based architecture, accelerating time-to-market for new features by 75%</>,
                    <>Constructed an annotation user interface with Prodigy, resulting in a 40% increase in efficiency for generating training and evaluation data for machine learning models</>,
                    <>Led companywide effort to integrate a machine learning model analyzing Terms of Service (TOS) language, resulting in product enhancement that generated $3 million in revenue over 3 years</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'The University of Manchester, UK',
                description: <>BA Econ.</>,
            },
            {
                name: 'Fox Valley Technical College',
                description: <>Exchange program.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'React',
                description: <>Able to build dynamic, scalable web applications using React, creating maintainable components and delivering seamless, user-centric experiences.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Able to build next-gen web applications with Next.js, implementing authentication, database integrations, server-side rendering, and API routes while optimizing performance, SEO, and user experience to deliver scalable, modern solutions.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };