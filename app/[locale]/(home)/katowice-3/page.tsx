import { ImageCarouselFader } from "@/components/customElements/carousels";
import {
  Footer,
  FullscreenCarouselContainer,
  OfferStickyHeader,
  SectionHeading,
} from "@/components/customElements/custom-ui";
import {
  IconsModule,
  InfoBlocks,
  InterchangeableImages,
  PlainParagraphText,
  RzutMieszkania,
  SpiralPhotos4,
  TextPlusSingleVideo,
} from "@/components/customElements/texts-images";
import { VideoBackground } from "@/components/customElements/video";
import { getDictionary, Locales } from "@/app/[locale]/dictionaries";
import { ImageCarouselFaderSideBySide } from "@/components/customElements/carousels/ImageCarouselFaderSideBySide";

const page = async ({
  params: { locale },
}: {
  params: { locale: Locales };
}) => {
  const dict = await getDictionary(locale);
  return (
    <>
      {/* Header */}
      <OfferStickyHeader
        oferta={dict.Katowice_03.Footer_1.oferta}
        dict={dict}
        customAccent="text-accent2"
      />
      <div className="landing-page">
        {/* Video */}
        <VideoBackground
          src="/katowice-1/s1/Opening-offer-showreel.mp4"
          className="aspect-[4/3] md:aspect-video max-h-[1024px] h-full md:-mb-10 lg:-mb-20 flex items-end"
        />
        {/* First Section - Icons Module */}
        <IconsModule
          className=""
          header={
            <SectionHeading
              className="w-2/3 md:w-full"
              top={dict.Katowice_03.icons_module_01.header_top}
              topClass="text-2xl md:text-6xl font-bold text-accent2 pb-2"
              bottom={dict.Katowice_03.icons_module_01.header_bottom}
              bottomClass="text-xl md:text-4xl font-bold md:font-normal leading-7"
            />
          }
          icons={dict.Katowice_03.icons_module_01.icons}
        />
        {/* Second Section - Carousel fader */}
        <FullscreenCarouselContainer>
          <SectionHeading
            wideParent
            top={dict.Katowice_03.image_carousel_fader_01.header_top}
            topClass="text-accent2 font-bold"
            bottom={dict.Katowice_03.image_carousel_fader_01.header_bottom}
          />
          <ImageCarouselFader
            autoplay={true}
            duration={6000}
            dotsEnabledOnlyVisible={true}
            textBackground="bg-gradient-to-t from-dark via-dark/75 to-dark/0"
            className="md:aspect-[16/9] max-h-[40svh] md:max-h-full h-svh md:h-full"
            textPlacement="bottom"
            images={dict.Katowice_03.image_carousel_fader_01.images}
          />
        </FullscreenCarouselContainer>
        {/* Custom Text under carousel */}
        <PlainParagraphText
          texts={dict.Katowice_03.custom_text_section_01.texts}
          className=" md:-mt-16"
        />
        {/* Third Section - Rzut Mieszkania */}
        <RzutMieszkania
          customAccent="text-accent2"
          locale={locale}
          cena={dict.Katowice_03.rzut_mieszkania_01.price}
          powierzchnia={dict.Katowice_03.rzut_mieszkania_01.area}
          img={dict.Katowice_03.rzut_mieszkania_01.images}
          header={
            <SectionHeading
              className=""
              topClass="text-accent2 pb-2 font-bold"
              top={dict.Katowice_03.rzut_mieszkania_01.header_top}
              bottom={dict.Katowice_03.rzut_mieszkania_01.header_bottom}
            />
          }
        />
        {/* Fourth Section - Info Texts */}
        <InfoBlocks
          info={dict.Katowice_03.InfoBlocks_1.info}
          backgroundClass="bg-transparent md:items-start p-4 md:p-8 w-full"
          itemSpacing="gap-6"
          headerClass="font-normal md:pt-2"
          header={
            <SectionHeading
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.InfoBlocks_1.header_top}
              bottom={dict.Katowice_03.InfoBlocks_1.header_bottom}
            />
          }
        />
        {/* Fifth section - Custom text 2 */}
        <PlainParagraphText
          texts={dict.Katowice_03.custom_text_section_02.texts}
          header={
            <SectionHeading
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.custom_text_section_02.header_top}
              bottom={dict.Katowice_03.custom_text_section_02.header_bottom}
            />
          }
        />
        {/* Sixth section - new side by side carousel */}
        <ImageCarouselFaderSideBySide
          dotsEnabledOnlyVisible
          textPlacement="bottom"
          textBackground="bg-gradient-to-t from-dark via-dark/75 to-dark/0"
          className="md:aspect-[16/9] max-h-[40svh] md:max-h-full h-svh md:h-full"
          images={dict.Katowice_03.image_carousel_fader_01.images}
        />
        {/* Fifth Section - Interchangeable images */}
        <InterchangeableImages
          interval={4000}
          mode="carousel"
          elements={dict.Katowice_03.interchangeable_images_01.elements}
          header={
            <SectionHeading
              wideParent
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.interchangeable_images_01.header_top}
              bottom={dict.Katowice_03.interchangeable_images_01.header_bottom}
            />
          }
        />
        {/* Sixth Section - Info with video */}
        <TextPlusSingleVideo
          src={dict.Katowice_03.text_plus_single_video_01.source}
          content={dict.Katowice_03.text_plus_single_video_01.content}
          customAccent="text-accent2"
          header={
            <SectionHeading
              className=""
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.text_plus_single_video_01.header_top}
              bottom={dict.Katowice_03.text_plus_single_video_01.header_bottom}
            />
          }
        />

        {/* Eighth Section - Footer */}
        <Footer
          dict={dict}
          header={
            <SectionHeading
              className="gap-3 md:gap-2 md:flex hidden"
              topClass="text-accent2 font-bold"
              top={dict.Katowice_03.Footer_1.header_top}
              bottom={dict.Katowice_03.Footer_1.header_bottom}
            />
          }
          oferta={dict.Katowice_03.Footer_1.oferta}
        />
      </div>
    </>
  );
};

export default page;
