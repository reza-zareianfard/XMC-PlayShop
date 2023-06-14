import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  LinkField,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  PromoIcon: ImageField;
  PromoIcon2: ImageField; // DEMO TEAM CUSTOMIZATION - Additional field
  PromoText: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoLink: LinkField;
  PromoText2: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoText3: RichTextField; // DEMO TEAM CUSTOMIZATION - Additional field
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            {/* DEMO TEAM CUSTOMIZATION - Add fields */}
            <div className="field-promotext3">
              <JssRichText field={props.fields.PromoText3} />
            </div>
            <div className="field-promotext">
              <JssRichText field={props.fields.PromoText} />
            </div>
            <div className="field-promotext2">
              <JssRichText field={props.fields.PromoText2} />
            </div>
            {/* END CUSTOMIZATION */}
            <div className="field-promolink">
              {/* DEMO TEAM CUSTOMIZATION - Custom button classes */}
              <JssLink field={props.fields.PromoLink} className="btn--main btn--main--round" />
              {/* END CUSTOMIZATION */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const WithText = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            {/* DEMO TEAM CUSTOMIZATION - Replace Text with JssRichText */}
            <div>
              <div className="field-promotext">
                <JssRichText className="promo-text" field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promotext">
              <JssRichText className="promo-text" field={props.fields.PromoText2} />
            </div>
            {/* END CUSTOMIZATION */}
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

// DEMO TEAM CUSTOMIZATION - New variant
export const WithColumns = (props: PromoProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className={`component promo promo-columns ${props.params.styles}`}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div className="text-cols">
              <div className="field-promotext">
                <JssImage field={props.fields.PromoIcon2} />
                <JssRichText className="rich-text" field={props.fields.PromoText} />
              </div>
              <div className="field-promotext2">
                <JssImage field={props.fields.PromoIcon2} />
                <JssRichText className="rich-text" field={props.fields.PromoText2} />
              </div>
              <div className="field-promotext3">
                <JssImage field={props.fields.PromoIcon2} />
                <JssRichText className="rich-text" field={props.fields.PromoText3} />
              </div>
            </div>
            <div className="field-promolink">
              <JssLink field={props.fields.PromoLink} className="btn--main btn--main--round" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

// SE UPDATES
export const ImageRight = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="promo-text">
            {/* DEMO TEAM CUSTOMIZATION - Add fields */}
            <div className="field-promotext3">
              <JssRichText field={props.fields.PromoText3} />
            </div>
            <div className="field-promotext">
              <JssRichText field={props.fields.PromoText} />
            </div>
            <div className="field-promotext2">
              <JssRichText field={props.fields.PromoText2} />
            </div>
            {/* END CUSTOMIZATION */}
            <div className="field-promolink">
              {/* DEMO TEAM CUSTOMIZATION - Custom button classes */}
              <JssLink field={props.fields.PromoLink} className="btn--main btn--main--round" />
              {/* END CUSTOMIZATION */}
            </div>
          </div>
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

// SE UPDATES
export const ImageTop = (props: PromoProps): JSX.Element => {
  {
    /* <div class="component promo basis-full " style="
    padding: 0 20px;
">
    <div class="component-content" style="
        flex-direction: column;
    ">
        <div class="field-promoicon" style="
            padding-left: 3rem;
            right: 0;
        ">
            <img alt=" " width="350" height="250"
                            src="/-/media/Project/PLAY/playwebsite/media/img/categories/team-sports.jpg?h=250&amp;iar=0&amp;w=350"
                            style="
                position: relative;
                width: 100%;
            ">
            </div>
                    <div class="promo-text" style="
                padding-top: 0;
                padding-right: 0;
                padding-left: 8.6rem;
                top: 1rem;
                background: transparent;
            ">
            <div class="field-promotext3">
                <div>
                    <p>sports</p>
                </div>
            </div>
            <div class="field-promotext">
                <div>
                    <p>Basketball</p>
                </div>
            </div>
            <div class="field-promotext2">
                <div>
                    <p>
                        Selfies pitchfork subway tile seitan, kombucha chartreuse lyft gastropub microdosing occupy
                        hammock. Tumblr hot chicken typewriter yuccie forage. Coloring book echo park man braid
                        williamsburg meh beard pug cray twee tilde pok pok 90's mumblecore health goth. Lo-fi quinoa
                        hoodie authentic put a bird on it banjo biodiesel flexitarian.
                    </p>
                </div>
            </div>
            <div class="field-promolink">
                <a href="http://" class="btn--main btn--main--round" title="" target="">Lets Go!<!-- --></a>
            </div>
        </div>
    </div>
</div> */
  }

  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo promo-top ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            {/* DEMO TEAM CUSTOMIZATION - Add fields */}
            <div className="field-promotext3">
              <JssRichText field={props.fields.PromoText3} />
            </div>
            <div className="field-promotext">
              <JssRichText field={props.fields.PromoText} />
            </div>
            <div className="field-promotext2">
              <JssRichText field={props.fields.PromoText2} />
            </div>
            {/* END CUSTOMIZATION */}
            <div className="field-promolink">
              {/* DEMO TEAM CUSTOMIZATION - Custom button classes */}
              <JssLink field={props.fields.PromoLink} className="btn--main btn--main--round" />
              {/* END CUSTOMIZATION */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

// END CUSTOMIZATION
