query MyQuery {
    carouselImages(where: {slug: "geveltuin"}) {
      id
      createdAt
      images {
        url
      }
    }
  }