// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationProduct from './annotations/product'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationProduct,
]

// Document types
import collection from './documents/collection'
import colorTheme from './documents/colorTheme'
import page from './documents/page'
import product from './documents/product'
import productVariant from './documents/productVariant'

const documents = [collection, colorTheme, page, product, productVariant]

// Singleton document types
import home from './singletons/home'
import settings from './singletons/settings'

const singletons = [home, settings]

// Block content
import body from './blocks/body'

const blocks = [body]

// Object types
import customProductOptionColor from './objects/customProductOption/color'
import customProductOptionSize from './objects/customProductOption/size'
import imageWithProductHotspots from './objects/imageWithProductHotspots'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import heroCollection from './objects/hero/collection'
import heroHome from './objects/hero/home'
import heroPage from './objects/hero/page'
import moduleAccordion from './objects/module/accordion'
import moduleCallout from './objects/module/callout'
import moduleCallToAction from './objects/module/callToAction'
import moduleCollection from './objects/module/collection'
import moduleGrid from './objects/module/grid'
import moduleImage from './objects/module/image'
import moduleImages from './objects/module/images'
import moduleInstagram from './objects/module/instagram'
import moduleProduct from './objects/module/product'
import moduleProducts from './objects/module/products'
import placeholderString from './objects/placeholderString'
import productHotspots from './objects/productHotspots'
import productOption from './objects/productOption'
import productWithVariant from './objects/productWithVariant'
import proxyString from './objects/proxyString'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoShopify from './objects/seo/shopify'
import shopifyCollection from './objects/shopifyCollection'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'

const objects = [
  customProductOptionColor,
  customProductOptionSize,
  imageWithProductHotspots,
  linkExternal,
  linkInternal,
  heroCollection,
  heroHome,
  heroPage,
  moduleAccordion,
  moduleCallout,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  moduleImage,
  moduleImages,
  moduleInstagram,
  moduleProduct,
  moduleProducts,
  placeholderString,
  productHotspots,
  productOption,
  productWithVariant,
  proxyString,
  seoHome,
  seoPage,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
]

// Custom for pd
import pageLayout from './pages/pageLayout'
import homePage from './pages/homePage'
import collectionsPage from './pages/collectionsPage'
import quizz from './pd_modules/quizz/quizz'
import quizzQuestion from './pd_modules/quizz/quizzQuestion'
import callToAction from './pd_modules/callToAction'
import quizzPage from './pages/quizzPage'
import quizzesPage from './pages/quizzesPage'
import buildYourOwnLabPage from './pages/buildYourOwnLabPage'
import labCategory from './pd_modules/lab/labCategory'
import labCategoryItem from './pd_modules/lab/labCategoryItem'
import labProductPage from './pages/labProductPage'
import recommendation from './pd_modules/quizz/recommendation'
import aboutUsPage from './pages/aboutUsPage'
import contactUsPage from './pages/contactUsPage'
import faqPage from './pages/faqPage'
import affiliatePage from './pages/affiliatePage'
import faqTopic from './pd_modules/faqTopic'
import blogPost from './pd_modules/blogPost'
import blogPage from './pages/blogPage'
import shopifyOrder from './pd_modules/shopifyOrder'
import orderTrackingPage from './pages/orderTrackingPage'
import myAccountPage from './pages/myAccountPage'
import infoPage from './pages/infoPage'
import cartPage from './pages/cartPage'
import productPage from './pages/productPage'
import ifcaPage from './pages/ifcaPage'
import a4mPage from './pages/a4mPage'
import hhsPage from './pages/hhsPage'
import review from './pd_modules/review'
import incompleteCheckout from './pd_modules/incompleteCheckout'

const pdObjects = [
  //shopify
  shopifyOrder,
  incompleteCheckout,
  review,
  // pages pd
  pageLayout,
  homePage,
  collectionsPage,
  quizzesPage,
  quizzPage,
  buildYourOwnLabPage,
  productPage,
  labProductPage,
  aboutUsPage,
  contactUsPage,
  faqPage,
  affiliatePage,
  blogPage,
  orderTrackingPage,
  myAccountPage,
  cartPage,
  infoPage,
  // components pd
  quizz,
  quizzQuestion,
  callToAction,
  labCategory,
  labCategoryItem,
  recommendation,
  faqTopic,
  blogPost,
  ifcaPage,
  a4mPage,
  hhsPage
]

export const schemaTypes = [
  ...annotations,
  ...documents,
  ...singletons,
  ...objects,
  ...blocks,
  ...pdObjects,
]
