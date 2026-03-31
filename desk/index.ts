import {ListItemBuilder, StructureResolver, StructureBuilder} from 'sanity/desk'
import products from './productStructure'

const isIdIncluded = (listItem: ListItemBuilder | undefined, includedIds: string[]) => {
  const id = listItem?.getId()
  if (!id) {
    return false
  }
  return includedIds.includes(id)
}

const isShopifyPage = (listItem: ListItemBuilder) =>
  isIdIncluded(listItem, ['shopifyOrder', 'incompleteCheckout', 'review'])

const isPage = (listItem: ListItemBuilder) => {
  const id = listItem.getId()
  return id && id.toLowerCase().includes('page') && id.toLowerCase() !== 'page'
}

const isQuizz = (listItem: ListItemBuilder) => isIdIncluded(listItem, ['quizz', 'quizzQuestion'])

const isHiddenDocType = (listItem: ListItemBuilder) => {
  const id = listItem.getId()
  if (!id || isPage(listItem) || isShopifyPage(listItem)) {
    return false
  }
  return !isIdIncluded(listItem, [
    'collection',
    'colorTheme',
    'home',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings',
    'shopifyOrder',
    'incompleteCheckout',
    'review',
    'quizz',
    'quizzQuestion',
  ])
}

const createList = (
  S: StructureBuilder,
  title: string,
  filterFn: (listItem: ListItemBuilder) => boolean | '' | undefined
) =>
  S.listItem()
    .title(title)
    .child(
      S.list()
        .title(title)
        .items([...S.documentTypeListItems().filter(filterFn)])
    )

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      products(S, context),
      S.divider(),
      createList(S, 'Shopify', isShopifyPage),
      S.divider(),
      createList(S, 'Pages', isPage),
      S.divider(),
      createList(S, 'Quizz', isQuizz),
      S.divider(),
      createList(S, 'Others', isHiddenDocType),
    ])
