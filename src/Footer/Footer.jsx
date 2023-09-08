// Library Imports
import React from "react";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

// Tailwind Style Variable Object
const style = {
  footerMainContainer: `flex justify-center items-center`,
  footerMainSubContainer: `flex justify-between items-center xl:w-[1200px] w-[800px]  xl:flex-row flex-col xl:m-9 m-10`,
  footerLeftInfoContainer: `text-white flex flex-col w-[700px] p-4 xl:w-[500px]`,
  footerRightInfoContainer: `flex flex-col xl:w-[500px] w-[700px]`,
  footerTopRightContainer: `flex p-3 gap-7 w-[100%]`,
  footerBottomRightContainer: `flex w-[100%] xl:justify-evenly items-center mt-7`,
  footerLinksDivContainer: `flex flex-col xl:w-[170px] w-[300px]`,
  footerLinksHeaderTitle: `text-gray-500 font-bold`,
  footerLinksContent: `text-white mt-2`,
  footerBottomRightElements: `text-white xl:mr-4 mr-10`,
  footerCopyRightContainer: `flex text-gray-400 justify-center items-center xl:mr-0 mr-10`,
};

const Footer = () => {
  return (
    <div className={style.footerMainContainer}>
      <div className={style.footerMainSubContainer}>
        <div className={style.footerLeftInfoContainer}>
          <div className="text-white text-3xl">
            <FaFontAwesomeFlag />
          </div>
          <div className="flex flex-col mt-6 gap-2">
            <h2 className="font-bold">Go Make Something Awesome</h2>
            <p>
              Font Awesome is the internet's icon library and toolkit used by
              millions of designers, developers, and content creators.
            </p>

            <p className="mt-2">
              Made with LOVE and CARE in Bentonville, Boston, Chicago, Grand
              Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.
            </p>
          </div>
        </div>

        <div className={style.footerRightInfoContainer}>
          <div className={style.footerTopRightContainer}>
            <div className={style.footerLinksDivContainer}>
              <p className={style.footerLinksHeaderTitle}>Project</p>
              <p className={style.footerLinksContent}>Download</p>
              <p className={style.footerLinksContent}>Changelog</p>
              <p className={style.footerLinksContent}>Commission Icons</p>
              <p className={style.footerLinksContent}>All Versions</p>
            </div>
            <div className={style.footerLinksDivContainer}>
              <p className={style.footerLinksHeaderTitle}>Community</p>
              <p className={style.footerLinksContent}>GitHub</p>
              <p className={style.footerLinksContent}>Icon Requests</p>
              <p className={style.footerLinksContent}>Twitter</p>
              <p className={style.footerLinksContent}>Blog Awesome</p>
            </div>
            <div className={style.footerLinksDivContainer}>
              <p className={style.footerLinksHeaderTitle}>Help</p>
              <p className={style.footerLinksContent}>Support</p>
              <p className={style.footerLinksContent}>Troubleshooting</p>
              <p className={style.footerLinksContent}>Contact US</p>
              <p className={style.footerLinksContent}>Status</p>
            </div>
          </div>

          <div className={style.footerBottomRightContainer}>
            <p className={style.footerBottomRightElements}>Lisense</p>
            <p className={style.footerBottomRightElements}>Term of Service</p>
            <p className={style.footerBottomRightElements}>Privary Policy</p>
            <p className={style.footerBottomRightElements}>Refunds</p>
            <div className={style.footerCopyRightContainer}>
              <div>
                <AiOutlineCopyrightCircle />
              </div>
              <p>Fonticons, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
