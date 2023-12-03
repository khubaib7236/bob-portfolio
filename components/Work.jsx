'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/portt1.png',
    category: 'shopify',
    name: 'Enlight',
    description:
      'General store specializing in consumer electronics and quality products.',
    link: 'https://enlightcart.com/',
    github: '/',
  },
  {
    image: '/work/portt5.png',
    category: 'shopify',
    name: 'Snap',
    description:
      'Brand selling top notch and uniquely designed mobile accessories worldwide with fast deliveries.',
    link: 'https://snapwireless.com.au/',
    github: '/',
  },
  {
    image: '/work/portt2.png',
    category: 'shopify',
    name: 'Fluffkart',
    description:
      'US based pet products store, supplying pet accessories around the world.',
    link: 'https://fluffkart.com/',
    github: '/',
  },
  {
    image: '/work/portt3.png',
    category: 'shopify',
    name: 'Kabinat Store',
    description:
      'Consumer Electronics store supplying bathroom outlets and pipes throughout the country.',
    link: 'https://kabinat.com/',
    github: '/',
  },
  {
    image: '/work/portt6.png',
    category: 'shopify',
    name: 'Brayt',
    description:
    'Wool and Leather based shopify store that sells shoes and shawls nationally and internationally.',
    link: 'https://www.brayt.pk/',
    github: '/',
  },
  {
    image: '/work/portt7.png',
    category: 'shopify',
    name: 'Bugatchi',
    description:
      'Leather products business selling top notch and minimalist products from jackets to coats & luggage bags.',
      link: 'https://www.bugatchi.com/',
    github: '/',
  },
  {
    image: '/work/portt8.png',
    category: 'shopify',
    name: 'Locally',
    description:
    'Multiple places based online ecommerce store providing variety of products for customers and users.',
    link: 'https://www.locally.com//',
    github: '/',
  },
  {
    image: '/work/portt9.png',
    category: 'shopify',
    name: 'Gadget Discovery Club',
    description:
    'Brand specializing in earphones and diital gadgets for its users and consumers from around the world.',
    link: 'https://www.gadgetdiscoveryclub.com/',
    github: '/',
  },
  {
    image: '/work/portt4.png',
    category: 'shopify',
    name: 'Zilixon',
    description:
      'A knows Brand throughout the Europe and USA working in the industry of gadets and trendy stuff.',
    link: 'https://zilixon.com/',
    github: '/',
  },
  {
    image: '/work/portt10.png',
    category: 'shopify',
    name: 'Grace & Gifts',
    description:
    'A gift shop tailored for occational gift and unique named necklaces for the person of your choice.',
    link: 'https://graceandgift.com/',
    github: '/',
  },
  {
    image: '/work/portt11.png',
    category: 'shopify',
    name: 'Scents & Stories',
    description:
      'Perfume brand with extremely high ROI and unique collection for its users, with cutting edge applications installed.',
    link: 'https://scentsnsecrets.com/',
    github: '/',
  },
  {
    image: '/work/portt12.png',
    category: 'shopify',
    name: 'Strip Makeup',
    description:
      'Strip makeup a beauty store selling different kind of cosmetic products at a very afoordable prices.',
    link: 'https://www.stripmakeup.com/',
    github: '/',
  },
  {
    image: '/work/portt13.png',
    category: 'shopify',
    name: 'Zena Makeup',
    description:
      'Cosmetics brand selling different beauty and skincare products that are non-toxic and perfect for customers.',
    link: 'https://zenamakeup.com/',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>
            Some of my most recent work is attached, take a quick peak to get an idea...
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 7).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
