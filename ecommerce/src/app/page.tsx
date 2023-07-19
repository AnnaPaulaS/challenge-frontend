'use client'

import { DefaultPageLayout } from '@/components/default/default-page-layout'
import { FilterBar } from '@/components/Filter/filter-bar'
import { styled } from 'styled-components'
import { ProductsList } from '@/components/listing product/products-list'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {

    return (
      <DefaultPageLayout>
        <PageWrapper>
          <FilterBar/>
          <ProductsList/>
        </PageWrapper>
      </DefaultPageLayout>
    )
}