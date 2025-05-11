import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";

import {
  AccordionConfig,
  AnnouncementBarConfig,
  BreakpointCardConfig,
  BreakpointHeroConfig,
  BreakpointSpeakersConfig,
  BreakpointTitleConfig,
  AccelerateSpeakersConfig,
  AccelerateHeroConfig,
  AccelerateApplyButtonConfig,
  AccelerateAccordionConfig,
  AccelerateLinkButtonConfig,
  AccelerateInfoItemConfig,
  AccelerateStoriesConfig,
  ButtonConfig,
  CardDeckConfig,
  CarouselConfig,
  CommunityGalleryConfig,
  ContentEditorConfig,
  ConversionPanelConfig,
  FeatureHighlightConfig,
  HeadingConfig,
  HeroConfig,
  HtmlParserConfig,
  NewsletterFormConfig,
  NewsletterMultipleListsFormConfig,
  RichTextQuoteConfig,
  RichStatsConfig,
  SectionConfig,
  SliderConfig,
  StatsConfig,
  SwitchbackConfig,
  SwitchbackChainConfig,
  SwitcherConfig,
  TipConfig,
  TrustbarConfig,
  QuoteConfig,
  QuoteSliderConfig,
  YoutubeConfig,
  CodeBlockConfig,
  DetailsHeroConfig,
  AccelerateInfoSectionConfig,
  AccelerateAttendanceConfig,
} from "./builderConfigs";

import * as configs from "./builderConfigs";

export const richTextDataModels = [
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Button),
    ),
    config: ButtonConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.HtmlParser),
    ),
    config: HtmlParserConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Tip),
    ),
    config: TipConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.YoutubeVideo),
    ),
    config: YoutubeConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.RichTextStat),
    ),
    config: RichStatsConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.RichTextQuote),
    ),
    config: RichTextQuoteConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.CodeBlock),
    ),
    config: CodeBlockConfig,
  },
];

const breakpointDataModels = [
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.BreakpointSpeakers,
      ),
    ),
    config: BreakpointSpeakersConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.BreakpointTitle,
      ),
    ),
    config: BreakpointTitleConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.BreakpointHero),
    ),
    config: BreakpointHeroConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.BreakpointCard),
    ),
    config: BreakpointCardConfig,
  },
];

const accelerateDataModels = [
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateStories.then(
        (lib) => lib.AccelerateStories,
      ),
    ),
    config: AccelerateStoriesConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateAccordion.then(
        (lib) => lib.AccelerateAccordion,
      ),
    ),
    config: AccelerateAccordionConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateSpeakers.then(
        (lib) => lib.AccelerateSpeakers,
      ),
    ),
    config: AccelerateSpeakersConfig,
  },
  {
    component: withChildren(
      dynamic(() =>
        impor../components/accelerate/AccelerateHero.then(
          (lib) => lib.AccelerateHero,
        ),
      ),
    ),
    config: AccelerateHeroConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateApplyButton.then(
        (lib) => lib.AccelerateApplyButton,
      ),
    ),
    config: AccelerateApplyButtonConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateLinkButton.then(
        (lib) => lib.AccelerateLinkButton,
      ),
    ),
    config: AccelerateLinkButtonConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateInfoItem.then(
        (lib) => lib.AccelerateInfoItem,
      ),
    ),
    config: AccelerateInfoItemConfig,
  },
  {
    component: withChildren(
      dynamic(() =>
        impor../components/accelerate/AccelerateInfoSection.then(
          (lib) => lib.AccelerateInfoSection,
        ),
      ),
    ),
    config: AccelerateInfoSectionConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateAttendance.then(
        (lib) => lib.AccelerateAttendance,
      ),
    ),
    config: AccelerateAttendanceConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateSecondaryButton.then(
        (lib) => lib.AccelerateSecondaryButton,
      ),
    ),
    config: configs.AccelerateSecondaryButtonConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AccelerateEventDescription.then(
        (lib) => lib.AccelerateEventDescription,
      ),
    ),
    config: configs.AccelerateEventDescriptionConfig,
  },
  {
    component: dynamic(() =>
      impor../components/accelerate/AcceleratePricing.then(
        (lib) => lib.AcceleratePricing,
      ),
    ),
    config: configs.AcceleratePricingConfig,
  },
  {
    component: withChildren(
      dynamic(() =>
        impor../components/accelerate/AccelerateStarContainer.then(
          (lib) => lib.AccelerateStarContainer,
        ),
      ),
    ),
    config: configs.AccelerateStarContainerConfig,
  },
];

const componentDataModel = [
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Accordion),
    ),
    config: AccordionConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.AnnouncementBar,
      ),
    ),
    config: AnnouncementBarConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.CardDeck),
    ),
    config: CardDeckConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Carousel),
    ),
    config: CarouselConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.CommunityGallery,
      ),
    ),
    config: CommunityGalleryConfig,
  },
  {
    component: withChildren(
      dynamic(() =>
        impor@solana-foundation/solana-lib.then(
          (lib) => lib.ContentEditor,
        ),
      ),
    ),
    config: ContentEditorConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.ConversionPanel,
      ),
    ),
    config: ConversionPanelConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.FeatureHighlight,
      ),
    ),
    config: FeatureHighlightConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Heading),
    ),
    config: HeadingConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Hero),
    ),
    config: HeroConfig,
  },
  {
    component: withChildren(
      dynamic(() =>
        impor@solana-foundation/solana-lib.then((lib) => lib.Section),
      ),
    ),
    config: SectionConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.NewsletterForm),
    ),
    config: NewsletterFormConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.NewsletterMultipleListsForm,
      ),
    ),
    config: NewsletterMultipleListsFormConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Slider),
    ),
    config: SliderConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Stats),
    ),
    config: StatsConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Switchback),
    ),
    config: SwitchbackConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then(
        (lib) => lib.SwitchbackChain,
      ),
    ),
    config: SwitchbackChainConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Switcher),
    ),
    config: SwitcherConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Trustbar),
    ),
    config: TrustbarConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.Quote),
    ),
    config: QuoteConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.QuoteSlider),
    ),
    config: QuoteSliderConfig,
  },
  {
    component: dynamic(() =>
      impor@solana-foundation/solana-lib.then((lib) => lib.DetailsHero),
    ),
    config: DetailsHeroConfig,
  },
  ...richTextDataModels,
  ...breakpointDataModels,
  ...accelerateDataModels,
];

const customComponentsRegistration = () => {
  componentDataModel.map((component) =>
  );

  Builder.register("insertMenu", {
    name: "Content Editor Components",
    items: richTextDataModels.map((model) => ({ name: model.config.name })),
  });

  Builder.register("insertMenu", {
    name: "Breakpoint Components",
    items: breakpointDataModels.map((model) => ({ name: model.config.name })),
  });

  Builder.register("insertMenu", {
    name: "Accelerate Components",
    items: accelerateDataModels.map((model) => ({ name: model.config.name })),
  });
};

export default customComponentsRegistration;
