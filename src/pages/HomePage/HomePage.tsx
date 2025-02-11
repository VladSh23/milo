import React from "react"
import { HomePageBanner, Layout, Lore, OpenSource, ScrollToHashElement, Thesis  } from "../../components"

import './styles.scss'

const HomePage: React.FC = () => {
  return(
    <Layout withSidebar className="home-layout">
      <ScrollToHashElement behavior="smooth" />
      <div className="home-page">
        <HomePageBanner />
        <Lore />
        <Thesis />
        <OpenSource />
      </div>
    </Layout>
  )
}

export default HomePage