import AboutSection from "@/components/AboutSection/AboutSection.js";
import Technologies from "@/components/Technologies/Technologies.js";
import MyExperience from "@/components/MyExperience/MyExperience.js";
import LatestArticles from "@/components/LatestArticles/LatestArticles.js";

export default function Page() {
  return (
    <>
      <AboutSection />
      <Technologies />
      <MyExperience />
      <LatestArticles />
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </>
  );
}
