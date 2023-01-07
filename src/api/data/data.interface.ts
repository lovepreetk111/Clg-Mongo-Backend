/* Header */
export interface InavbarConfig {
    id: string
    implinksdata: IImpLinks[]
    logo: InavLogo[]
    navbar: INavbarData[]
  }
  export interface InavLogo {
    logoUrl: string,
    logoAlt: string,
    link:string
  }
  export interface IImpLinks {
    id: string,
    impLinks: string,
    routeLinks: string;
  }
  export interface INavbarData {
    id: string;
    nav: string;
    link: string;
    child: IDropdowns[]
  }
  export interface IDropdowns {
    dropdown: string,
    url: string
  }

  /* Footer */
  export interface IFooterCmp {
    ContactCall: {
      Number: string;
    },
    ContactMail: {
      mail: string;
    },
    socialMedia: {
      url: string,
      alt: string,
      link: string,
    }[]
  }

  /* Notice */
  export interface Inotice {
    id: string
    noticeLink: string;
  }

  /*bannerCarousel */

  export interface IBannerCarosuelComponent {
    innerData: {
      header: string;
      text: string;
      buttonText: string;
    },
    background: {
      url: string,
      alt: string
    },
    image: {
      url: string,
      alt: string
    },
    routeLink: string;
  } 

  /* About US Section */

  export interface IAboutSectionData {
    id: string,
    style: {
      backgroundColor: string
    }
    info: IBtnCmpData,
    imgText: IleftimageRightTxt
    topimgText: IPictureComponentImage[]
  }
  export interface IBtnCmpData {
    data: string,
  }
  
  export interface IleftimageRightTxt {
    url: string;
    alt: string;
    para1: string;
    para2: string
  }
  export interface IPictureComponentImage {
    url: string;
    alt: string;
    header: string;
    text: string;
  }

  /*Accordian*/

  export interface IDropDown{
    data: Ileftimg1[]
  /*   AccordianData: [
      Title: string,
      SubTitle1: string,
      SubTitle2: string,
      SubTitle3: string,
    ] */
    AccordianData:IAccordianData[]
  }
  export interface IAccordianData {
    Title: string;
    SubTitle1: string;
    SubTitle2: string;
    SubTitle3: string;
  }
  export interface Ileftimg1 {
    url: string;
    alt: string;
    Text: string
  }

  /*cardcarosuel */

  export interface ICardCarosuel {
    img: {
      id: string,
      url: string,
      alt: string,
      routeLink: string
    },
    data: {
      cardHeading: string,
      description: string
    }
  }

  /*testimonials */
  export interface ITestimonialCardData {
    comment: string;
    name: string;
    designation: string;
    companyName: string;
    profileUrl: string;
  }
  
  export interface ITestimonialSectionData {
    title: string;
    description: string;
    cardsData: ITestimonialCardData[]
  }