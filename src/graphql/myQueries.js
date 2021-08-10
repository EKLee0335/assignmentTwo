import {gql} from '@apollo/client'

export const GET_COUNTRIES = gql`
   {
    continents {
      code
      name
      countries{code,name,native,capital,currency,languages{name}}
    }
  }
`