import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints'

type Properties = PageObjectResponse['properties']
type Property = Properties[keyof Properties]
type NumberProperty = Extract<Property, { type: 'number' }>
type RichTextProperty = Extract<Property, { type: 'rich_text' }>
type SelectProperty = Extract<Property, { type: 'select' }>
type DateProperty = Extract<Property, { type: 'date' }>
type TitleProperty = Extract<Property, { type: 'title' }>

type GuestProps = {
  Table: NumberProperty
  Observations: RichTextProperty
  Menu: SelectProperty
  RSVP: SelectProperty
  Language: SelectProperty
  'Due date': DateProperty
  Code: RichTextProperty
  Type: SelectProperty
  Nickname: RichTextProperty
  'Full Name': TitleProperty
}
export interface Guest extends PageObjectResponse {
  properties: GuestProps
}

export type Filter = QueryDatabaseParameters['filter']
export type RichTextFilter = Extract<Filter, { type?: 'rich_text' }>
export type SelectFilter = Extract<Filter, { type?: 'select' }>
