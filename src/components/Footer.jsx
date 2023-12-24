import React from "react";
import { Link } from "react-scroll";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <div
      name="About"
      className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300  "
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-[#ffc519] cursor-pointer">
          <Link to="home" smooth duration={500}>
            JYANI.
          </Link>
        </h1>
        <p className="py-4">
          We are committed to providing our clients with the highest quality
          data analytics services and solutions. We have a team of experienced
          and certified data analysts who are passionate about helping
          businesses use data to achieve their goals.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 cursor-pointer">
          <a href="https://github.com/purakh-nath" target="_blank">
            <FaGithubSquare size={30} />
          </a>
          <FaTwitterSquare size={30} />
          <FaLinkedin size={30} />
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />

          {/* <FaGithubSquare size={30} /> */}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul className=" cursor-pointer">
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul className=" cursor-pointer">
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul className=" cursor-pointer">
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul className=" cursor-pointer">
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
