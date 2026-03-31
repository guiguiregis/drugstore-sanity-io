import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `aboutUsPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/about-us`,
          })
          .title('Preview'),
      ])
    case `affiliatePage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/affiliate`,
          })
          .title('Preview'),
      ])
    case `cartPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/cart`,
          })
          .title('Preview'),
      ])
    case `collectionsPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/collections`,
          })
          .title('Preview'),
      ])
    case `contactUsPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/contact`,
          })
          .title('Preview'),
      ])
    case `faqPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/faq`,
          })
          .title('Preview'),
      ])
    case `infoPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/terms`,
          })
          .title('Preview'),
      ])
    case `buildYourOwnLabPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/lab/build`,
          })
          .title('Preview'),
      ])
    case `blogPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/blog`,
          })
          .title('Preview'),
      ])
    case `orderTrackingPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/order/track/5278749589784`,
          })
          .title('Preview'),
      ])

    case `myAccountPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/account/profile`,
          })
          .title('Preview'),
      ])
    case `productPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/product/a-d-p`,
          })
          .title('Preview'),
      ])
    case `labProductPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/lab/product/3-x-4-blueprint`,
          })
          .title('Preview'),
      ])
    case `quizzPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/quizz/hormone-pcos`,
          })
          .title('Preview'),
      ])
    case `recommendationPage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview?path=/quizz/recommendation/cholesterol,gourmet-greens`,
          })
          .title('Preview'),
      ])
    case `homePage`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://www.practitionerdepot.com/api/preview`,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
