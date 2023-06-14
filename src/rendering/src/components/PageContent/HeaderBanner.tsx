import {
  Text,
  Field,
  ImageField,
  withDatasourceCheck,
  Image as JssImage,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type HeaderBannerProps = ComponentProps & {
  fields: {
    eyebrow: Field<string>;
    title: Field<string>;
    subtitle: Field<string>;
    backgroundImage: ImageField;
  };
};

const HeaderBanner = (props: HeaderBannerProps): JSX.Element => {
  return (
    <section className="section header-banner">
      <JssImage field={props.fields.backgroundImage} />
      <div className="section-content section-content-left container">
        <Text className="eyebrow" tag="p" field={props.fields.eyebrow} />
        <Text className="title" tag="h1" field={props.fields.title} />
        <Text className="subtitle" tag="p" field={props.fields.subtitle} />
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<HeaderBannerProps>(HeaderBanner);
