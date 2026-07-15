import React from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { RiTwitterXFill } from 'react-icons/ri';
import { TbBrandGithub } from 'react-icons/tb';
import { LuFileText } from 'react-icons/lu';

const Nav: React.FC = () => {
  return (
    <nav className="nav-fixed-wrapper">
      <div className="nav-pill liquid-glass">
        <a href="#home" className="nav-link stretch-hover">
          <HiOutlineHome size={20} />
        </a>

        <span className="nav-divider"></span>

        <div className="nav-socials">
          <a href="https://x.com/maxwelllweb3" className="nav-link stretch-hover">
            <RiTwitterXFill size={18} />
          </a>
          <a href="https://github.com/maxwellsmall" className="nav-link stretch-hover">
            <TbBrandGithub size={20} />
          </a>
          <a href="#resume" className="nav-link stretch-hover">
            <LuFileText size={20} />
          </a>
        </div>

        <span className="nav-divider"></span>

        <a href="/blog" className="nav-blog-btn">
          My Blog
        </a>
      </div>
    </nav>
  );
};

export default Nav;