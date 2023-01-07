export const headerData =[
    {
      id: 1,
      implinksdata: [
        {
          id: 1,
          impLinks: "NAAC-IQAC",
          routeLinks: '/naac'
        },
        {
          id: 2,
          impLinks: "ALUMINI",
          routeLinks: "alumini"
        },

      ],
      logo: [
        {
          logoUrl: "assets/images/Chetana Logo.svg",
          logoAlt: "",
          link:'/'
        }
      ],
      navbar: [
        {
          id: 1,
          nav: 'About',
          link: '/about'
        },
        {
          id: 2,
          nav: 'Course',
          link: '/course',
          child: [
            {
              dropdown: 'JUNIOR COLLEGE',
              url: 'something'
            },
            {
              dropdown: 'DEGREE COLLEGE',
              url: 'something'
            },
            {
              dropdown: 'SELF FINANCE COURSES',
              url: 'something'
            },
            {
              dropdown: 'MASTER OF COMMERCE',
              url: 'something'
            },
            {
              dropdown: 'DOCTORAL PROGRAMME',
              url: 'something'
            }
          ]
        },
        {
          id: 3,
          nav: 'Examination',
          link: '/examination',
          child: [
            {
              dropdown: "PLACEMENT AT CHETANA'S",
              url: 'something'
            },
            {
              dropdown: 'TRANNING PROGRAME',
              url: 'something'
            },
            {
              dropdown: 'PLACEMENT TRACKER',
              url: 'something'
            },
            {
              dropdown: 'M.COM',
              url: 'something'
            },
            {
              dropdown: 'RESULT ANALYSIS',
              url: 'something'
            }
          ]
        },
        {
          id: 4,
          nav: 'Admision',
          link: '/admission',
        },
        {
          id: 5,
          nav: 'Placemant',
          link: '/placemant',
          child: [
            {
              dropdown: "PLACEMENT AT CHETANA'S",
              url: 'something'
            },
            {
              dropdown: 'TRANNING PROGRAME',
              url: 'something'
            },
            {
              dropdown: 'PLACEMENT TRACKER',
              url: 'something'
            }
          ]
        },
        {
          id: 6,
          nav: 'Research',
          link: '/research',
          child: [
            {
              dropdown: "ABOUT RESEARCH COLLEGE"
            },
            {
              dropdown: "PUBLICATION"
            },
            {
              dropdown: "PROSPECTUS"
            },
            {
              dropdown: "CONFERENCE PROCEDINGS"
            },

          ]
        },
        {
          id: 8,
          nav: "Student’s Corner",
          link: '/studentCorner',
        },
        {
          id: 8,
          nav: 'Contact-Us',
          link: '/contact',
        }
      ]
    }
  ]

  export const footerData =[
    {
      ContactCall: {
        Number: '9321992130',
      },
      ContactMail: {
        mail: 'chetanahscce@yahool.com'
      },
      socialMedia: [
        {
          url: "../../assets/img/ig.png",
          alt: 'college insta page',
          link: 'https://www.instagram.com/chetanas_sfc/?hl=en'
        },
        {
          url: '../../assets/img/yt.png',
          alt: 'college youtube channel',
          link: 'https://www.youtube.com/channel/UCr2658Nq363khQvTSIxntwQ'
        },
        {
          url: '../../assets/img/fb.png',
          alt: 'college facebook page',
          link: 'https://www.facebook.com/people/Chetanas-Self-Financing-Courses/100064103347725/'
        },
      ]
    }
  ]

  export const homeData =[
      {
        compID: 2,
        compName: 'notices',
        metadata: [
          {
            id: 1,
            noticeLink: "Lorem ipsum dolor sit amet",
          },
          {
            id: 2,
            noticeLink: "consectetur adipiscing elit",
          },
          {
            id: 3,
            noticeLink: "Ut et massa mi. Aliquam in hendrerit urna",
          },
          {
            id: 4,
            noticeLink: "Lorem ipsum dolor sit amet",
          },
          {
            id: 5,
            noticeLink: "consectetur adipiscing elit",
          },
          {
            id: 6,
            noticeLink: "Ut et mass ",
          },
        ]
      },
      {
        compId: 3,
        compName: 'banner-carousel',
        metadata: [
          {
            id: 1,
            innerData: {
              header: 'Techkriti 6.0',
              text: 'Lorem',
              buttonText: 'readMore',
            },
            background: {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'yeh bhi hai kych',
            },
            image: {
              url: '../../../assets/images/ChetanaJC.svg',
              alt: 'IDK'
            },
            routeLink: 'route karo and ghar bhejo',
          },
          {
            id: 2,
            innerData: {
              header: 'Techkriti 6.0',
              text: 'Lorem',
              buttonText: 'readMore',
            },
            background: {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'yeh bhi hai kych',
            },
            image: {
              url: '../../../assets/images/ChetanaJC.svg',
              alt: 'IDK'
            },
            routeLink: 'route karo and ghar bhejo',
          },
          {
            id: 1,
            innerData: {
              header: 'Techkriti 6.0',
              text: 'Lorem',
              buttonText: 'readMore',
            },
            background: {
              url: '../../../assets/images/ChetanaDC.jpeg',
              alt: 'yeh bhi hai kych',
            },
            image: {
              url: '../../../assets/images/ChetanaJC.svg',
              alt: 'IDK'
            },
            routeLink: 'route karo and ghar bhejo',
          },
          {
            id: 3,
            innerData: {
              header: 'Techkriti 6.0',
              text: 'Lorem',
              buttonText: 'readMore',
            },
            background: {
              url: '../../../assets/images/ChetanaJC.svg',
              alt: 'yeh bhi hai kych',
            },
            image: {
              url: '../../../assets/images/ChetanaJC.svg',
              alt: 'IDK'
            },
            routeLink: 'route karo and ghar bhejo',
          },
        ]
      },
      {
        compId: 4,
        compName: 'aboutus-section',
        metadata: {
          id: 1,
          style:
          {
            backgroundColor: 'rgb(236, 236, 236)'
          },
          info:
          {
            data: "About Chetanas",
          },
          imgText: {
            url: '../../../assets/images/ChetanaJC.svg',
            alt: 'image hai clg ka',
            para1: " The meaning of the word '“Chetana”' is consciousness. Consciousness is the essence of all creation. It isall-pervasive and infinite. It is the essence that unifies all beings and things. The culturaladvancement of the human race itself can be attributed to the awareness of this consciousness. Thisconsciousness requires a blend of emotional awareness and wisdom, which are the primary goals ofeducation.",
            para2: "Hence this name was suggested by Late Smt. Kusumtai Chaudhari while forming this profound education movement. Chetana, a service oriented educational trust was established on 09th September, 1969 by Respected Balasaheb Madhukarrao Chaudhari (former Education and Finance Minister, Government of Maharashtra and Ex-Speaker, Maharashtra Legislative Assembly)"
          },
          topimgText: [
            {
              url: "../../../assets/images/vision.svg",
              alt: 'example3',
              header: 'Vision',
              text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.',
              description1: '',
              description2: ''
            },
            {
              url: "../../../assets/images/mission.svg",
              alt: 'example3',
              header: 'Mission',
              text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.',
              description1: '',
              description2: ''
            },
            {
              url: "../../../assets/images/values.svg",
              alt: 'example3',
              header: 'Values',
              text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.',
              description1: '',
              description2: ''
            }
          ]
        }
      },
      {
        compID: 5,
        compName: "Accordian",
        metadata: [
          {
            data: [
              {
                url: "../../../assets//images/ChetanaJC.svg",
                alt: 'kuch toh hai',
                Text: 'Acedemic'
              }]
          },
          {
            AccordianData: [
              {
                Title: 'JUNIOR COLLEGE',
                SubTitles:[
                  {
                    id:1,
                    title:"Arts",
                    link:"course/arts"
                  },
                  {
                    id:2,
                    title:"Commerce",
                    link:"course/comm"
                  },
                  {
                    id:3,
                    title:"MCVC",
                    link:"course/mcvc"
                  }
                ]
              },
              {
                Title: 'DEGREE COLLEGE',
                SubTitles:[
                  {
                    id:1,
                    title:"BA",
                    link:"course/ba"
                  },
                  {
                    id:2,
                    title:"BCOM",
                    link:"course/bcom"
                  },
                  
                ]
              },
              {
                Title: 'SELF FINANCING COURSES',
                SubTitles:[
                  {
                    id:1,
                    title:"BMS",
                    link:"course/bms"
                  },
                  {
                    id:2,
                    title:"BAF",
                    link:"course/baf"
                  },
                  {
                    id:3,
                    title:"BAMMC",
                    link:"course/bammc"
                  },
                  {
                    id:4,
                    title:"B.Sc.IT",
                    link:"course/bscit"
                  }
                ]
              },
              {
                Title: 'POST GRADUATE PROGRAMME',
                SubTitles:[
                  {
                    id:1,
                    title:"MASTER OF COMMERCE",
                    link:"course/mcom"
                  },
                  
                ]
              },
              {
                Title: 'DOCTORAL Programme',
                SubTitles:[
                  {
                    id:1,
                    title:"PH. D. In Commerce",
                    link:"course/arts"
                  },
                  
                ]
              },
              {
                Title: 'DISTANCE LEARNING',
                SubTitles:[
                  {
                    id:1,
                    title:"Y.C.M.O.U",
                    link:"course/yomuc"
                  },
                  
                ]
              }
            ]
          }
        ],
      },
      {
        compId: 6,
        compName: "cardcarosuel",
        metadata: [
          {
            id: 1,
            slides: [
              {
                img: {
                  id: 1,
                  img: "../../../assets/images/Chetana Logo.svg",
                  alt: "image",
                  routeLink:'ground/kuch-toh',
                },
                data:{
                  cardHeading:"Ground",
                  description:"Lorem ki maa ki chudiya"
                }
              },
              {
                img: {
                  id: 1,
                  img: "../../../assets/images/Chetana Logo.svg",
                  alt: "image",
                  routeLink:'ground/kuch-toh',
                },
                data:{
                  cardHeading:"Ground",
                  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              }
            ]
          }

        ]
      },
      {
        compId: 7,
        compName: 'testimonials',
        metadata:
        {
          title: "Testimonials",
          description: "my name is ghazala.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
          cardsData: [
            {
              comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
              name: "Ghazala",
              designation: "student",
              companyName: "chetana",
              profileUrl: "assets/img/ghazala.svg"
            },
            {
              comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
              name: "Lappi",
              designation: "ncc candidate",
              companyName: "Gareeb chetana",
              profileUrl: "assets/img/lappi.svg"
            },
            {
              comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
              name: "vandita",
              designation: "pgl",
              companyName: "BscIT",
              profileUrl: "assets/img/vandita.svg"
            }
          ]
        }
      },
    {  
        compId: 8,
        compName: 'detailcard2',
        metadata:
        {
          image:'../../../assets/images/EventPhoto.jpg',
          alt:'Pankaj',
          date:'20TH NOV',
          eventName:'TECHKRITI 6.0',
          time:'9:00 to 11:00',
          venu:'CHETANA COLLEGE'
        }
      } ,
      
      {  
        compId: 9,
        compName: 'speaker',
        metadata:
        [
        {
          image:'/assets/images/FACULTY.svg',
          alt:'Reddy',
          name:'Saravanan Reddy',
          role:'Course Co-ordinator'
        }
      ]
      } 

    
  ]
  export const noticeData =[
    {
      id: 1,
      noticeLink: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      noticeLink: "consectetur adipiscing elit",
    },
    {
      id: 3,
      noticeLink: "Ut et massa mi. Aliquam in hendrerit urna",
    },
    {
      id: 4,
      noticeLink: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      noticeLink: "consectetur adipiscing elit",
    },
    {
      id: 6,
      noticeLink: "Ut et mass ",
    },
  ]

  export const bannerCarouselData =[
    {
      id: 1,
      innerData: {
        header: 'Techkriti 6.0',
        text: 'Lorem',
        buttonText: 'readMore',
      },
      background: {
        url: '../../../assets/images/ChetanaDC.jpeg',
        alt: 'yeh bhi hai kych',
      },
      image: {
        url: '../../../assets/images/ChetanaJC.svg',
        alt: 'IDK'
      },
      routeLink: 'route karo and ghar bhejo',
    },
    {
      id: 2,
      innerData: {
        header: 'Techkriti 6.0',
        text: 'Lorem',
        buttonText: 'readMore',
      },
      background: {
        url: '../../../assets/images/ChetanaDC.jpeg',
        alt: 'yeh bhi hai kych',
      },
      image: {
        url: '../../../assets/images/ChetanaJC.svg',
        alt: 'IDK'
      },
      routeLink: 'route karo and ghar bhejo',
    },
    {
      id: 3,
      innerData: {
        header: 'Techkriti 6.0',
        text: 'Lorem',
        buttonText: 'readMore',
      },
      background: {
        url: 'kuch toh',
        alt: 'yeh bhi hai kych',
      },
      image: {
        url: 'kuch hai IDK',
        alt: 'IDK'
      },
      routeLink: 'route karo and ghar bhejo',
    },
  ]

  export const aboutSection = {
    id: 1,
    style:
    {
      backgroundColor: 'rgb(236, 236, 236)'
    },
    info:
    {
      data: "About Chetanas",
    },
    imgText: {
      url: '../../../assets/images/ChetanaJC.svg',
      alt: 'image hai clg ka',
      para1: " The meaning of the word '“Chetana”' is consciousness. Consciousness is the essence of all creation. It isall-pervasive and infinite. It is the essence that unifies all beings and things. The culturaladvancement of the human race itself can be attributed to the awareness of this consciousness. Thisconsciousness requires a blend of emotional awareness and wisdom, which are the primary goals ofeducation.",
      para2: "Hence this name was suggested by Late Smt. Kusumtai Chaudhari while forming this profound education movement. Chetana, a service oriented educational trust was established on 09th September, 1969 by Respected Balasaheb Madhukarrao Chaudhari (former Education and Finance Minister, Government of Maharashtra and Ex-Speaker, Maharashtra Legislative Assembly)"
    },
    topimgText: [
      {
        url: "../../../assets/images/vision.svg",
        alt: 'example3',
        header: 'Vision',
        text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.'
      },
      {
        url: "../../../assets/images/mission.svg",
        alt: 'example3',
        header: 'Mission',
        text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.'
      },
      {
        url: "../../../assets/images/values.svg",
        alt: 'example3',
        header: 'Values',
        text: 'To raise our institution to higher levels of academic and cultural excellence and create an urge to enrich the personality of our students to serve humanity as one global family.'
      }
    ]
  }

  export const accordian =[
    {
      data: [
        {
          url: "../../../assets//images/ChetanaJC.svg",
          alt: 'kuch toh hai',
          Text: 'Acedemic'
        }]
    },
    {
      AccordianData: [
        {
          Title: 'JUNIOR COLLEGE',
          SubTitle1: 'Commerce',
          SubTitle2: 'Arts',
          SubTitle3: 'Mcvc',
        },
        {
          Title: 'DEGREE COLLEGE',
          SubTitle1: 'Commerce',
          SubTitle2: 'Arts',
          SubTitle3: 'Mcvc'
        },
        {
          Title: 'SELF FINANCING COURSES',
          SubTitle1: 'Commerce',
          SubTitle2: 'Arts',
          SubTitle3: 'Mcvc'
        },
        {
          Title: 'MASTER OF COMMERCE',
          SubTitle1: 'Commerce',
          SubTitle2: 'Arts',
          SubTitle3: 'Mcvc'
        },
        {
          Title: 'DOCTORAL Programme',
          SubTitle1: 'Commerce',
          SubTitle2: 'Arts',
          SubTitle3: 'Mcvc'
        }
      ]
    }
  ]

  export const cardcarosuel =[
    {
      id: 1,
      img: {
        url: "../../../assets/images/ChetanaDC.jpeg",
        alt: "image",
        routeLink: "/page/ground",
      },
      data: {
        cardHeading: "Ground",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }

    },
    {
      id: 2,
      img: {
        url: "../../../assets/images/ChetanaJC.svg",
        alt: "image",
        routeLink: "/page/lab",
      },
      data: {
        cardHeading: "Lab",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    },
    {
      id: 3,
      img: {
        url: "../../../assets/images/ChetanaDC.jpeg",
        alt: "image",
        routeLink: "/page/libraby",
      },
      data: {
        cardHeading: "Library",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    }

  ]

  export const testimonials = {
    title: "Testimonials",
    description: "my name is ghazala.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
    cardsData: [
      {
        comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
        name: "Ghazala",
        designation: "student",
        companyName: "chetana",
        profileUrl: "https://play-lh.googleusercontent.com/0pyqGxdVkQsZUyWiDkvlUHRfCNcHdFS9Sq8G-GpCl9Idvd2fEUakpboNxqlMNVdDqMA=w240-h480-rw"
      },
      {
        comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        name: "Lappi",
        designation: "ncc candidate",
        companyName: "Gareeb chetana",
        profileUrl: "https://www.inpixio.com/remove-background/images/main-before.jpg"
      },
      {
        comment: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        name: "vandita",
        designation: "pgl",
        companyName: "BscIT",
        profileUrl: "https://us.123rf.com/450wm/marctran/marctran1804/marctran180400117/99234583-passport-photo-portrait-of-asian-smiling-woman-.jpg?ver=6"
      }
    ]
  }

