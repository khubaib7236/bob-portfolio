'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
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
      'Mobile accessories store selling top notch and uniquely designed mobile accessories worldwide with fast deliveries.',
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
    'Wool and Leather based shopify store that sells shoes and shawls nationally and internationally..',
    link: 'https://www.brayt.pk/',
    github: '/',
  },
  {
    image: '/work/portt7.png',
    category: 'shopify',
    name: 'Bugatchi',
    description:
      'Leather products business selling top notch and minimalist leather products from jackets to coats and luggage bags.',
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
    'An international brand specializing in earphones and diital gadgets for its users and consumers from around the world.',
    link: 'https://www.gadgetdiscoveryclub.com/',
    github: '/',
  },
  {
    image: '/work/portt4.png',
    category: 'shopify',
    name: 'Zilixon',
    description:
      'A known Brand throughout the Europe and USA working in the industry of gadets and trendy stuff.',
    link: 'https://zilixon.com/',
    github: '/',
  },
  {
    image: '/work/portt10.png',
    category: 'shopify',
    name: 'Grace & Gifts',
    description:
    'A gift shop tailored specifically for occational gift and unique named necklaces for the person of your choice.',
    link: 'https://graceandgift.com/',
    github: '/',
  },
  {
    image: '/work/portt11.png',
    category: 'shopify',
    name: 'Scents & Stories',
    description:
      'Perfume brand with extremely high ROI and unique collection for its users, with cutting edge applications installed .',
    link: 'https://scentsnsecrets.com/',
    github: '/',
  },
  {
    image: '/work/portt12.png',
    category: 'shopify',
    name: 'Strip Makeup',
    description:
      'Strip makeup a beauty store selling different kind of cosmetic products at a very affordable prices with unique customer packages.',
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
  {
    image: '/work/portt14.png',
    category: 'React',
    name: 'Restaurant',
    description:
      'Restaurant design for fine dinning and online order booking. Integrated with builtin menu system.',
    link: 'https://restaurant-gericht-site.netlify.app/',
    github: '/',
  },
  {
    image: '/work/portt15.png',
    category: 'Demo',
    name: 'Kachava',
    description:
      'Fresh blendee to enhance your daily fitness and help you push the limits of excercise and gymnastics.',
    link: 'https://www.kachava.com/',
    github: '/',
  },
  {
    image: '/work/portt16.png',
    category: 'Demo',
    name: 'Calpak Travel',
    description:
      'Trendy and luxury travles bag website, that covers all size of travel bags to help you organize on the go.',
    link: 'https://www.calpaktravel.com/',
    github: '/',
  },
  {
    image: '/work/portt17.png',
    category: 'Demo',
    name: 'Pet Shop',
    description:
      'Pet shop specializing in products related to pets and thier daily diet to fullfil your pet needs.',
    link: 'https://lumia-theme.com/?_ab=0&_fd=0&_sc=1',
    github: '/',
  },
  {
    image: '/work/portt18.png',
    category: 'Demo',
    name: 'Luggage Store',
    description:
      'Special store design for luggage company that makes you stand out from the crowd and maximize your profits.',
    link: 'https://lumia-theme.com/',
    github: '/',
  },
  {
    image: '/work/portt19.png',
    category: 'Demo',
    name: 'Gymware',
    description:
      'Gym products website that showcases different products best suited for crowd that goes to gym or workout.',
    link: 'https://lumia-theme.com/?_ab=0&_fd=0&_sc=1',
    github: '/',
  },
  {
    image: '/work/portt20.png',
    category: 'Demo',
    name: 'Trendy Clothes',
    description:
      'Store that only has aim to provide top-notch and best quality products for its customers across the globe.',
    link: 'https://new-ella-demo.myshopify.com/?fts=0',
    github: '/',
  },
  {
    image: '/work/portt21.png',
    category: 'Demo',
    name: 'Fitness Fare',
    description:
      'fitness ware brand selling uniquely selected top items for best outcomes and modern look.',
    link: 'https://new-ella-demo-11.myshopify.com/?fts=0',
    github: '/',
  },
  {
    image: '/work/portt22.png',
    category: 'Demo',
    name: 'Nursury',
    description:
      'Beautiful artificial plants selling spot that turn your idea of selling decorations in the best design possible.',
    link: 'https://new-ella-demo.myshopify.com/?fts=0',
    github: '/',
  },
  {
    image: '/work/portt23.png',
    category: 'Demo',
    name: 'Peach R Reach',
    description:
      'Perfect blend of shape and fitness presented with a beautiful store that represents elegance and style.',
    link: 'https://peacharereach.com/',
    github: '/',
  },
  {
    image: '/work/portt24.png',
    category: 'Demo',
    name: 'Hyper Mart',
    description:
      'Cosmetics brand selling different beauty and skincare products that are non-toxic and perfect for customers.',
    link: 'https://new-ella-demo.myshopify.com/?fts=0',
    github: '/',
  },
  {
    image: '/work/portt25.png',
    category: 'Demo',
    name: 'Mega Store',
    description:
      'Mega store packed with all the products a customer can need from kitchenware to consumer electronics & all.',
    link: 'https://new-ella-demo.myshopify.com/?fts=0',
    github: '/',
  },
  {
    image: '/work/portt26.png',
    category: 'Demo',
    name: 'Serums',
    description:
      'High sales converting and customer engagement design making the store beautiful and responsive.',
    link: 'https://new-ella-demo.myshopify.com/?fts=0',
    github: '/',
  },
  {
    image: '/work/portt27.png',
    category: 'Demo',
    name: 'Automobile',
    description:
      'The perfect design for turning your automobile idea into a multi million dollar store which can give you maximum ROI.',
    link: 'https://new-ella-demo.myshopify.com/?fts=0',
    github: '/',
  },
];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Recent Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
