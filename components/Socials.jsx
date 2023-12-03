'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill
} from 'react-icons/ri';

import Link from 'next/link';
{/* Paste the relevant links below */}
const icons = [
  {
    path: 'https://www.linkedin.com/in/iamkhubaib?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://x.com/Khubaib4Seven?t=rnI6nJuz4ePsjOKMh2_ydQ&s=09',
    name: <RiTwitterXFill />,
  },
  {
    path: 'https://www.facebook.com/brinsol.agency?mibextid=9R9pXO',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://instagram.com/khubaib_usama_27?igshid=MTk0NTkyODZkYg==',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
