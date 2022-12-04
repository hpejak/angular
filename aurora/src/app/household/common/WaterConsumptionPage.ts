import {WaterConsumption} from "./WaterConsumption";

export interface WaterConsumptionPage {
  content: WaterConsumption[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
  }
  size: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  totalElements: number
  totalPage: number
}
