import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import { Card } from "../components/card";
import { Button } from "../components/button";

import { ImageBlog } from "../../../../assets/images/blog/Index";
import SectionTitle from "../../../elements/SectionTitle";

export const Psychology = () => {
  return (
    <>
      <div className="w-full h-[108px] mt-36 mb-28 mx-4">
        <p className="font-normal text-xl text-[#274760]/[.52]">Home / Blog</p>
        <SectionTitle>Psychology and Life Style</SectionTitle>
      </div>
      <div className="overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-full">
            <Card
              imgSrc={ImageBlog.psychology1}
              date="March 12"
              title="The Importance of Mental Health: Understanding and Managing Anxiety Disorders"
            />
            <Card
              imgSrc={ImageBlog.psychology2}
              date="March 11"
              title="A Parent's Guide to Childhood Vaccinations: What You Need to Know"
            />
            <Card
              imgSrc={ImageBlog.psychology3}
              date="March 9"
              title="Preventing Heart Disease: Tips for a Heart-Healthy Lifestyle"
            />
            <Card
              imgSrc={ImageBlog.psychology4}
              date="March 8"
              title="Managing Chronic Pain: Treatment Options and Strategies"
            />
            <Card
              imgSrc={ImageBlog.psychology5}
              date="March 5"
              title="Understanding and Managing Diabetes: Tips for Healthy Living"
            />
            <Card
              imgSrc={ImageBlog.psychology6}
              date="March 2"
              title="The Role of Physical Therapy in Injury Recovery and Prevention"
            />
            <Card
              imgSrc={ImageBlog.psychology7}
              date="Feb 28"
              title="Breaking the Stigma: Raising Awareness for Mental Health Issues"
            />
            <Card
              imgSrc={ImageBlog.psychology8}
              date="Feb 26"
              title="Allergies and Asthma: Causes, Symptoms, and Treatment Options"
            />
            <Card
              imgSrc={ImageBlog.psychology9}
              date="Feb 25"
              title="Caring for Your Skin: Tips for Healthy, Glowing Skin"
            />
          </div>
          <div className="mt-36">
            <ul className="flex items-center gap-2">
              <li>
                <FaArrowLeftLong size={25} className="text-[#307BC4]" />
              </li>
              <li>
                <Button classname="text-white bg-[#307BC4]">1</Button>
              </li>
              <li>
                <Button>2</Button>
              </li>
              <li>
                <Button>3</Button>
              </li>
              <li>
                <Button>...</Button>
              </li>
              <li>
                <Button>8</Button>
              </li>
              <li>
                <FaArrowRight size={25} className="text-[#307BC4]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
